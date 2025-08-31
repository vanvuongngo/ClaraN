#[cfg(desktop)]
mod app_updates;
mod providers;

// App updater
#[cfg(desktop)]
use crate::app_updates::checker::check_update;
#[cfg(desktop)]
use crate::app_updates::pending_update::PendingUpdate;
#[cfg(desktop)]
use crate::app_updates::updater::update_app;

// AI providers
use crate::providers::ollama::ask_ollama;

// state management https://tauri.app/develop/state-management/
#[cfg(desktop)]
use tauri::Manager;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_clipboard_manager::init())
        .plugin(tauri_plugin_opener::init()) // https://v2.tauri.app/plugin/opener/
        .setup(|app| {
            // log plugin https://v2.tauri.app/plugin/logging/
            if cfg!(debug_assertions) {
                // only include this code on debug builds
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Debug) // https://v2.tauri.app/plugin/logging/#maximum-log-level
                        .build(),
                )?;
            } else {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info) // https://v2.tauri.app/plugin/logging/#maximum-log-level
                        .rotation_strategy(tauri_plugin_log::RotationStrategy::KeepAll) // https://v2.tauri.app/plugin/logging/#configuring-log-file-behavior
                        .build(),
                )?;
            }

            // updater plugin for desktop only
            #[cfg(desktop)]
            {
                app.handle()
                    .plugin(tauri_plugin_updater::Builder::new().build())?;
                app.manage(PendingUpdate::new());
            }

            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            ask_ollama,
            #[cfg(desktop)]
            check_update,
            #[cfg(desktop)]
            update_app
        ])
        .run(tauri::generate_context!())
        .expect("Error while running ClaraN application");
}
