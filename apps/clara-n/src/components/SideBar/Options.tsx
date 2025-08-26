import {
  $,
  component$,
  useSignal,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import {
  // LuArchive,
  // LuSettings,
  // LuStar,
  // LuTrash2,
  LuSparkles,
} from "@qwikest/icons/lucide";
import { Channel, invoke } from "@tauri-apps/api/core";
// https://v2.tauri.app/plugin/opener/
import { openUrl } from "@tauri-apps/plugin-opener";
import {
  AppVersions,
  CheckUpdateEvent,
  DownloadProgress,
  UpdateAppEvent,
} from "./types";

export const Options = component$(() => {
  const appVersionMeta = useStore<AppVersions>({});

  const updateAppContentLength = useSignal(0);
  const updateProgressMeta = useStore<DownloadProgress>({
    downloaded: 0,
    contentLength: 0,
  });

  const handleCheckUpdateEvent = $((message: CheckUpdateEvent) => {
    if (message.event === "versionChanged") {
      appVersionMeta.currentVersion = message.data.currentVersion;
      appVersionMeta.version = message.data.version;
    } else if (message.event === "versionNotChanged") {
      appVersionMeta.version = undefined;
    } else if (message.event === "error") {
      //TODO show message, causes and code
      console.error("Options.handleCheckUpdateEvent", message.data);
    }
  });

  const handleUpdateAppEvent = $((message: UpdateAppEvent) => {
    if (message.event === "updateStarted") {
      updateAppContentLength.value = message.data.contentLength;
    } else if (message.event === "updateProgressed") {
      updateProgressMeta.contentLength = message.data.contentLength;
      updateProgressMeta.downloaded = message.data.downloaded || 0;
    } else if (message.event === "updateFinished") {
      appVersionMeta.version = undefined;
      updateProgressMeta.contentLength = 0;
      updateProgressMeta.downloaded = 0;
    }
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    // TODO: to prevent network connection - disable the check for an update with a setting
    const onCheckUpdateEvent = new Channel<CheckUpdateEvent>();
    onCheckUpdateEvent.onmessage = handleCheckUpdateEvent;
    await invoke("check_update", {
      onEvent: onCheckUpdateEvent,
    }).catch((error: string) => console.error(error)); // TODO: show message
  });

  return (
    <div class="@container">
      <div class="border-base-content/20 space-y-1 border-t p-2">
        <ul class="menu">
          {appVersionMeta.version && (
            <li>
              <button
                class="btn btn-primary btn-sm"
                onClick$={() => {
                  const onUpdateAppEvent = new Channel<UpdateAppEvent>();
                  onUpdateAppEvent.onmessage = handleUpdateAppEvent;
                  invoke("update_app", {
                    onEvent: onUpdateAppEvent,
                  }).catch(
                    (error: string) => console.error(error), // TODO: show message
                  );
                }}
                title={`Install with restart. From v${appVersionMeta.currentVersion} to v${appVersionMeta.version}`}
              >
                {!updateProgressMeta.contentLength ? (
                  <>
                    <span class="hidden @min-[135px]:block">Update</span>
                    <span> {appVersionMeta.version}</span>
                  </>
                ) : (
                  <progress
                    class="progress w-8 @min-[135px]:w-24"
                    value={updateProgressMeta.downloaded}
                    max={updateProgressMeta.contentLength}
                  />
                )}
              </button>
            </li>
          )}
          {/* <li>
            <a href="#">
              <LuStar /> <span class="hidden @min-[135px]:block">Starred</span>
            </a>
          </li> */}
          {/* <li>
            <a href="#">
              <LuArchive />{" "}
              <span class="hidden @min-[135px]:block">Archived</span>
            </a>
          </li> */}
          {/* <li>
            <a href="#">
              <LuTrash2 /> <span class="hidden @min-[135px]:block">Trash</span>
            </a>
          </li> */}
          <li>
            <a
              href="#"
              onClick$={async () => {
                await openUrl(
                  "https://github.com/vanvuongngo/ClaraN/releases/latest",
                );
              }}
            >
              <LuSparkles />{" "}
              <span class="hidden @min-[135px]:block">What's New</span>
            </a>
          </li>
          {/* <li>
            <a href="#">
              <LuSettings />{" "}
              <span class="hidden @min-[135px]:block">Settings</span>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
});
