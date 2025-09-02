# THIS FILE IS AUTO-GENERATED. DO NOT MODIFY!!

# Copyright 2020-2023 Tauri Programme within The Commons Conservancy
# SPDX-License-Identifier: Apache-2.0
# SPDX-License-Identifier: MIT

-keep class ch.devn.claran.* {
  native <methods>;
}

-keep class ch.devn.claran.WryActivity {
  public <init>(...);

  void setWebView(ch.devn.claran.RustWebView);
  java.lang.Class getAppClass(...);
  java.lang.String getVersion();
}

-keep class ch.devn.claran.Ipc {
  public <init>(...);

  @android.webkit.JavascriptInterface public <methods>;
}

-keep class ch.devn.claran.RustWebView {
  public <init>(...);

  void loadUrlMainThread(...);
  void loadHTMLMainThread(...);
  void evalScript(...);
}

-keep class ch.devn.claran.RustWebChromeClient,ch.devn.claran.RustWebViewClient {
  public <init>(...);
}
