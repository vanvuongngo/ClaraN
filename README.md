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

### 📱 Mobile App

| operation system | supported | bundle |
|---|---|---|
| Android | :white_check_mark: | is planned |
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


## 📜 License
ClaraN is open-source software licensed under the MIT License. This means you can:

- ✅ Use it commercially
- ✅ Modify and distribute
- ✅ Use it privately
- ✅ Contribute back to the community
