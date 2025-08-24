export interface AppVersions {
  version?: string;
  currentVersion?: string;
}

export type CheckUpdateEventKey = "versionChanged" | "versionNotChanged";
export type UpdateAppEventKey = "updateStarted" | "updateProgressed" | "updateFinished";

export type UpdateAppEventData = {
  contentLength: number;
  downloaded?: number;
};

export interface CheckUpdateEvent {
  event: CheckUpdateEventKey;
  data: AppVersions;
}

export interface UpdateAppEvent {
  event: UpdateAppEventKey;
  data: UpdateAppEventData;
}

export interface DownloadProgress {
  downloaded: number;
  contentLength: number;
}