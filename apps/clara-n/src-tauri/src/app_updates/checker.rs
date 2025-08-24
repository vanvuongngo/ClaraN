// https://tauri.app/plugin/updater/#checking-for-updates
use crate::app_updates::pending_update::PendingUpdate;
use serde::Serialize;
use tauri::{ipc::Channel, AppHandle, State};
use tauri_plugin_updater::UpdaterExt;

#[derive(Clone, Serialize)]
#[serde(
    rename_all = "camelCase",
    rename_all_fields = "camelCase",
    tag = "event",
    content = "data"
)]
pub enum CheckUpdateEvent<'a> {
    VersionChanged {
        current_version: &'a str,
        version: &'a str,
    },
    SameVersion {},
    Error {
        message: &'a str,
        code: &'a str,
    },
}

#[tauri::command]
pub async fn check_update(
    app: AppHandle,
    pending_update_state: State<'_, PendingUpdate>,
    on_event: Channel<CheckUpdateEvent<'_>>,
) -> Result<(), tauri_plugin_updater::Error> {
    log::debug!("invoked: check_update");

    let updater = app
        .updater_builder()
        .version_comparator(|current, update| {
            // allowing downgrades, if a version is not working
            // https://tauri.app/plugin/updater/#allowing-downgrades
            update.version != current // default comparison: `update.version > current`
        })
        .build()?;

    match updater.check().await {
        Ok(Some(update)) => {
            log::info!("Found a new application version: v{}", update.version);

            let _ = on_event.send(CheckUpdateEvent::VersionChanged {
                current_version: update.current_version.clone().as_str(),
                version: update.version.clone().as_str(),
            });

            pending_update_state.set_update(update)
        }
        Ok(None) => {
            let _ = on_event.send(CheckUpdateEvent::SameVersion {});
        }
        Err(e) => {
            let message = "Failed to check for updates. Please check your network connection or no remote latest.json file exists.";
            log::error!("{} Causes: {e}", message);

            let _ = on_event.send(CheckUpdateEvent::Error {
                message,
                code: "UPDATER_01",
            });
        }
    }

    Ok(())
}
