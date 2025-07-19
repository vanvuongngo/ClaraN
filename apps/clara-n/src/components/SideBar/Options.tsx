import { component$ } from "@builder.io/qwik";
import {
  LuArchive,
  LuSettings,
  LuSparkles,
  LuStar,
  LuTrash2,
} from "@qwikest/icons/lucide";

export const Options = component$(() => {
  return (
    <div class="@container">
      <div class="border-base-content/20 space-y-1 border-t p-2">
        <ul class="menu">
          <li>
            <a>
              <LuStar /> <span class="hidden @min-[135px]:block">Starred</span>
            </a>
          </li>
          <li>
            <a>
              <LuArchive />{" "}
              <span class="hidden @min-[135px]:block">Archived</span>
            </a>
          </li>
          <li>
            <a>
              <LuTrash2 /> <span class="hidden @min-[135px]:block">Trash</span>
            </a>
          </li>
          <li>
            <a>
              <LuSparkles />{" "}
              <span class="hidden @min-[135px]:block">What's New</span>
            </a>
          </li>
          <li>
            <a>
              <LuSettings />{" "}
              <span class="hidden @min-[135px]:block">Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
});
