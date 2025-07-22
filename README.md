# ClaraN

**Your fully local AI Superstack - Privacy-First, On-Premises, Limitless**

ClaraN isn't just another chat UI. It's a complete AI ecosystem that runs 100% on your machines.

This is a hardfork of the awesome project https://github.com/badboysm890/ClaraVerse

## Tech Stack

- [Tauri](https://tauri.app/) for building Desktop- and Mobile apps as a hybrid and secure framework - using [Rust](https://www.rust-lang.org/) and web technologies
- [Qwik](https://qwik.dev/) web framework for building performant Web UIs
- [Nodejs](http://nodejs.org/) Javascript for tooling
- [DaisyUI](http://daisyui.com/) for faster, cleaner and simple [tailwind CSS](https://tailwindcss.com/) UI development


## Supported environments

### 🖥️ Desktop App

| operation system | supported | bundle |
|---|---|---|
| [MacOS](https://github.com/vanvuongngo/ClaraN/releases/latest) | :white_check_mark: | aarch64.dmg (aarch64.app.tar.gz), x64.dmg (x64.app.tar.gz) |
| Apple Store | N/A | please [buy me a coffee](https://buymeacoffee.com/vuongngo) for an apple developer license $99 |
| [Windows](https://github.com/vanvuongngo/ClaraN/releases/latest) | :white_check_mark: | x64-setup.exe, x64_en-US.msi |
| [Ubuntu](https://github.com/vanvuongngo/ClaraN/releases/latest) | :white_check_mark: | amd64.AppImage, amd64.deb, x86_64.rpm |

#### Troubleshooting

AppImage on Ubuntu: ***AppImages require FUSE to run***
```sh
sudo apt-get install libfuse2
```

Debian:
The installation is failing because of missinng libraries. Any clue how to fix?

### 📱 Mobile App

| operation system | supported | bundle |
|---|---|---|
| [Android](https://github.com/vanvuongngo/ClaraN/releases/latest) | :white_check_mark: | apk, aab |
| iOS | :white_check_mark: | is planned |


## 🛠️ Development Setup

```sh
# Install once the global dependency
npm install -g pnpm

# Install dependencies
pnpm install
````

### Web app
```sh
pnpm dev
```

### Desktop app
```sh
pnpm desktop:dev
```

### Android mobile app
- prerequisites: openjdk, Android Studio with one installed emulator
```sh
pnpm android:dev
```

### iOS mobile app
- prerequisites: XCode
```sh
pnpm ios:dev
```

## 📸 **Visual Showcase**

<details>
<summary><strong>🖼️ Click to see screenshots</strong></summary>

### 📱 **Mobile Chat**

<table>

<thead>
<tr>
  <th>System</td>
  <th>Chat</th>
  <th>Sidebar</th>
  <th>Keyboard</th>
</tr>
</thead>

<tbody>

<!-- Android -->
<tr>
<td style="vertical-align: baseline;">Android</td>
<td><img src="assets/snapshots/android_chat.jpg" width="200px" alt="Android chat version" /></td>
<td><img src="assets/snapshots/android_sidebar.jpg" width="200px" alt="Android sidebar" /></td>
<td><img src="assets/snapshots/android_chat_keyboard.jpg" width="200px" alt="Android keyboard" /></td>
</tr>

<!-- iOS -->
<tr>
<td>iOS</td>
<td><img src="assets/snapshots/ios_chat.png" width="200px" alt="iOS chat version" /></td>
<td></td>
</tr>

</tbody>
</table>


### 🖥️ **Desktop Chat**

<table>

<thead>
<tr>
  <th>System</td>
  <th>Chat</th>
  <th>Collapsed sidebar</th>
</tr>
</thead>

<tbody>

<!-- MacOS -->
<tr>
<td style="vertical-align: baseline;">MacOS</td>
<td><img src="assets/snapshots/desktop_chat.png" width="800px" alt="MacOS desktop chat version" /></td>
<td><img src="assets/snapshots/macos_desktop_collapsed_sidebar.png" width="500px" alt="Assistent wiht collapsed sidebar" /></td>
</tr>

</tbody>
</table>

</details>

## 🆚 ClaraN vs The Competition

| Feature | **ClaraN** | **ClaraVerse** | OpenWebUI | LibreChat | Ollama WebUI |
|---------|------------|----------------|-----------|-----------|--------------|
| 💻 **100% Local Stack** | ✅ Complete | ✅ Complete | ✅ Yes | ✅ Yes | ✅ Basic |
| 🧩 **Visual App Builder** | ❌ No | ✅ Built-in | ❌ No | ❌ No | ❌ No |
| 🔄 **Native Automation** | ❌ No | ✅ N8N Integrated | ❌ No | ❌ No | ❌ No |
| 🧠 **Agent Builder** | ❌ No | ✅ Visual Designer | ❌ No | ❌ No | ❌ No |
| 🎨 **Image Generation** | ❌ No | ✅ ComfyUI | ✅ Basic DALL-E | ❌ No | ❌ No |
| 🧱 **Widget System** | ❌ No | ✅ Dynamic Dashboard | ❌ No | ✅ Basic | ❌ No |
| 🔧 **Code Execution** | ❌ No | ✅ OpenInterpreter | ❌ No | ❌ No | ❌ No |
| 📱 **Mobile App** | ✅ Tauri - Android [iOS] | ❌ in progress | ❌ Web Only | ❌ Web Only | ❌ Web Only |
| 🖥️ **Desktop App** | ✅ Tauri - MacOS Ubuntu Windows | ✅ Electron | ❌ Web Only | ❌ Web Only | ❌ Web Only |


## 🗓️ Release Timeline & Roadmap


### 🎯 Current Release Status

| **Component** | **Status** | **Description** |
|---------------|------------|-----------------|
| 🧠 **Clara AI Assistant** | 0.4.0 open | Chat Interface with multi-provider support |
| 🐳 **Docker Deployment** | 0.3.0 open | One-command local deployment |
| 🧠 **Clara AI Assistant** | 0.2.0 in progress | Chat Interface with ollama provider support |
| 🧠 **Clara AI Assistant** | ✅ **0.1.1 Released** | Started with UI layout |
| 📱 **Mobile Apps** | ✅ **Released** | Android support, iOS (simulator only) |
| 🖥️ **Desktop Apps** | ✅ **Released** | Windows, macOS, Linux support |

## 🔐 Privacy & Security

| 🛡️ **Privacy Feature** | **Status** | **Details** |
|------------------------|------------|-------------|
| **Local Processing** | ✅ 100% | All AI models run on your machines |
| **No Telemetry** | ✅ Zero | No data collection or phone home |
| **Open Source** | ✅ Full | Complete codebase transparency |
| **Self-Hosted** | ✅ Complete | Own your entire AI stack |
| **No Cloud APIs** | ✅ Optional | Cloud providers only if you choose |
| **Encrypted Storage** | ✅ Built-in | Local data encrypted by default |


## 🌍 Community & Support

Any help is welcome ...
<div align="center">

### Join the ClaraN Community


<table>
<tr>
  <td align="center">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="50"/>
    <br/><strong>GitHub</strong><br/>
    <a href="https://github.com/vanvuongngo/ClaraN/issues">Issue</a> -
    <a href="https://github.com/vanvuongngo/ClaraN/pulls">PR</a> -
    <a href="https://github.com/users/vanvuongngo/projects/4">Board</a>
  </td>
</tr>
</table>

</div>

## How to build a new release

1. Clone the project
```sh
git clone git@github.com:<USER>/ClaraN.git
```

2. Create a tag and push it, e.g. `v1.0.0`, which will trigger the github CI
```sh
git tag v1.0.0 && git push origin v1.0.0
```

3. A new draft release will created and you can add add more informations about the changes, here https://github.com/<USER>/ClaraN/releases

4. Ensure that the github secrets are setup for the mobile builds: https://github.com/<USER>/ClaraN/settings/secrets/actions

5. Ready? Click: `publish release`

## 📜 License
ClaraN is open-source software licensed under the MIT License. This means you can:

- ✅ Use it commercially
- ✅ Modify and distribute
- ✅ Use it privately
- ✅ Contribute back to the community
