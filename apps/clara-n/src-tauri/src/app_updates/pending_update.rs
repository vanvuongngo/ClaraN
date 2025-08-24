use std::sync::{Arc, Mutex};
use tauri_plugin_updater::Update;

pub struct PendingUpdate {
    inner: Arc<Mutex<Option<Update>>>,
}

impl PendingUpdate {
    pub fn new() -> Self {
        PendingUpdate {
            inner: Arc::new(Mutex::new(None)),
        }
    }

    pub fn set_update(&self, update: Update) {
        let mut lock = self.inner.lock().unwrap();
        *lock = Some(update);
    }

    pub fn take_update(&self) -> Option<Update> {
        let mut lock = self.inner.lock().unwrap();
        lock.take()
    }
}
