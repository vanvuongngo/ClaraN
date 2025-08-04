import { component$, useSignal } from "@builder.io/qwik";
import {
  LuDatabase,
  LuHome,
  LuMonitor,
  LuMoon,
  LuSettings,
  LuUser,
  LuWrench,
} from "@qwikest/icons/lucide";
export interface NavBarProps {
  title?: string;
}

export const TopBar = component$<NavBarProps>(({ title }) => {
  const centerLgText = useSignal(title);

  return (
    <div class="navbar bg-base-100 shadow-sm">
      <div class="navbar-start">
        <button class="btn btn-ghost">
          <LuHome />
          <span class="hidden lg:inline">Back to Home</span>
        </button>
      </div>

      <div class="navbar-center hidden lg:flex">{centerLgText}</div>

      <div class="navbar-end">
        <button class="btn btn-ghost text-sm">
          <LuDatabase /> <span class="hidden lg:flex">Knowledge Base</span>
        </button>
        <button class="btn btn-ghost text-sm">
          <LuWrench /> <span class="hidden lg:flex">Tools</span>
        </button>
        <button class="btn btn-ghost btn-circle text-sm">
          <LuMonitor />
        </button>

        <div class="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            class="btn btn-ghost btn-circle avatar"
          >
            <LuUser />
            {/* logged in
            <div class="w-10 rounded-full">
              <img
                width="40"
                height="40"
                alt="Profile image"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div> */}
          </div>
          <ul
            tabIndex={0}
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li class="divider-primary">{"Max Ola"}</li>
            <li>
              <a href="#" onClick$={() => console.log("open settings")}>
                <LuSettings /> Settings
              </a>
            </li>
            {/* given is login <li>
                <a>Logout</a>
              </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
});
