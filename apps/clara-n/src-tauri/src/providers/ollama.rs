// Ollama API https://ollama.readthedocs.io/en/api/

use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use tauri::{AppHandle, Emitter};

#[derive(Serialize, Deserialize, Debug)]
struct Json {
    response: Option<String>,
}

#[derive(Clone, Serialize)]
struct Payload {
    chunk: String,
}

#[tauri::command]
pub async fn ask_ollama(app: AppHandle, prompt: String) -> Result<(), String> {
    if prompt.is_empty() {
        return Err("Please provide a prompt message".to_string());
    }

    app.emit("ollama_prompted", prompt.clone()).unwrap();

    let client = reqwest::Client::new();
    let mut map = HashMap::new();
    //TODO: setup model as a setting
    map.insert("model", "llama3.2".to_string());
    map.insert("prompt", prompt);

    //TODO: setup host as a setting
    let mut res = client
        .post("http://127.0.0.1:11434/api/generate")
        .json(&map)
        .send()
        .await
        .unwrap();

    while let Some(chunk) = res.chunk().await.expect("Failed on chunks") {
        let json: Json = serde_json::from_slice(&chunk).expect("Failed on parsing");
        let chunk = json.response.unwrap_or("".into());
        app.emit("ollama_chunked", Payload { chunk }).unwrap();
    }

    Ok(())
}
