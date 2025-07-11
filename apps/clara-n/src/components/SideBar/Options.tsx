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
    <div class="border-base-content/20 space-y-1 border-t p-2">
      <ul class="menu">
        <li>
          <a>
            <LuStar /> <span class="peer-checked:hidden">Starred</span>
          </a>
        </li>
        <li>
          <a>
            <LuArchive /> Archived
          </a>
        </li>
        <li>
          <a>
            <LuTrash2 /> Trash
          </a>
        </li>
        <li>
          <a>
            <LuSparkles /> What's New
          </a>
        </li>
        <li>
          <a>
            <LuSettings /> Settings
          </a>
        </li>
      </ul>
    </div>
  );
});
