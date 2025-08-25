// https://tauri.app/plugin/updater/#checking-for-updates
use crate::app_updates::pending_update::PendingUpdate;
use serde::Serialize;
use tauri::{ipc::Channel, AppHandle, State};

#[derive(Clone, Serialize)]
#[serde(
    rename_all = "camelCase",
    rename_all_fields = "camelCase",
    tag = "event",
    content = "data"
)]
pub enum UpdateAppEvent<'a> {
    UpdateStarted {
        content_length: Option<u64>,
    },
    UpdateProgressed {
        downloaded: usize,
        content_length: Option<u64>,
    },
    UpdateFinished {},
    UpdateError {
        message: &'a str,
        code: &'a str,
    },
}

#[derive(Debug, thiserror::Error)]
pub enum Error {
    #[error(transparent)]
    Updater(#[from] tauri_plugin_updater::Error),
    #[error("there is no pending update")]
    NoPendingUpdate,
}

#[tauri::command]
pub async fn update_app(
    app: AppHandle,
    pending_update_state: State<'_, PendingUpdate>,
    on_event: Channel<UpdateAppEvent<'_>>,
) -> Result<(), String> {
    log::debug!("invoked: update_app");

    let Some(update) = pending_update_state.take_update() else {
        log::error!(
            "Failed to get pending update state. Missing to call the check_update command?"
        );

        return Err(Error::NoPendingUpdate.to_string());
    };

    let mut started = false;
    let mut downloaded = 0;

    match update
        .download_and_install(
            |chunk_length, content_length| {
                if !started {
                    started = true;
                    let _ = on_event.send(UpdateAppEvent::UpdateStarted { content_length });
                }

                downloaded += chunk_length;
                let _ = on_event.send(UpdateAppEvent::UpdateProgressed {
                    downloaded,
                    content_length,
                });
            },
            || {
                log::info!("Downloaded and installed new app version");
                let _ = on_event.send(UpdateAppEvent::UpdateFinished {});
            },
        )
        .await
    {
        Ok(()) => {
            // open for discussion - only show a message and wait until user manually trigger a restart?
            log::info!("Restart app to use new version.");
            app.restart();
        }
        Err(e) => {
            let message = "Failed to download and install new app version.";
            log::error!("{} Causes: {e}", message);
            let _ = on_event.send(UpdateAppEvent::UpdateError {
                message,
                code: "UPDATER_10",
            });
        }
    };

    Ok(())
}
