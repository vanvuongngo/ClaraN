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

## 🆚 **ClaraN vs The Competition**

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


### **🎯 Current Release Status**

| **Component** | **Status** | **Description** |
|---------------|------------|-----------------|
| 🧠 **Clara AI Assistant** | 0.4.0 open | Chat Interface with multi-provider support |
| 🐳 **Docker Deployment** | 0.3.0 open | One-command local deployment |
| 🧠 **Clara AI Assistant** | 0.2.0 in progress | Chat Interface with ollama provider support |
| 🧠 **Clara AI Assistant** | ✅ **0.1.1 Released** | Started with UI layout |
| 📱 **Mobile Apps** | ✅ **Released** | Android support, iOS (simulator only) |
| 🖥️ **Desktop Apps** | ✅ **Released** | Windows, macOS, Linux support |

## 🔐 **Privacy & Security**

| 🛡️ **Privacy Feature** | **Status** | **Details** |
|------------------------|------------|-------------|
| **Local Processing** | ✅ 100% | All AI models run on your machines |
| **No Telemetry** | ✅ Zero | No data collection or phone home |
| **Open Source** | ✅ Full | Complete codebase transparency |
| **Self-Hosted** | ✅ Complete | Own your entire AI stack |
| **No Cloud APIs** | ✅ Optional | Cloud providers only if you choose |
| **Encrypted Storage** | ✅ Built-in | Local data encrypted by default |


## 🌍 **Community & Support**

<div align="center">

### **Join the ClaraVerse Community**

<table>
<tr>
  <td align="center">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="50"/>
    <br/><strong>GitHub</strong><br/>
    <a href="https://github.com/vanvuongngo/ClaraN/issues">Issues</a> -
    <a href="https://github.com/vanvuongngo/ClaraN/pulls">PRs</a>
  </td>
</tr>
</table>

</div>

## 📜 License
ClaraN is open-source software licensed under the MIT License. This means you can:

- ✅ Use it commercially
- ✅ Modify and distribute
- ✅ Use it privately
- ✅ Contribute back to the community
