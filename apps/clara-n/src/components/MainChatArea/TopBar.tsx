import { component$, useSignal } from "@builder.io/qwik";

export interface NavBarProps {
  title?: string;
}

export const TopBar = component$<NavBarProps>(({ title }) => {
  const centerLgText = useSignal(title);

  return (
    <div class="navbar bg-base-100 shadow-sm">
      <div class="navbar-start">
        <button class="btn btn-ghost">
          <span>🏠</span>
          <span class="hidden lg:inline">Back to Home</span>
        </button>
      </div>

      <div class="navbar-center hidden lg:flex">{centerLgText}</div>

      <div class="navbar-end">
        <button class="btn btn-ghost text-xs">
          🗃️ <span class="hidden lg:flex">Knowledge Base</span>
        </button>
        <button class="btn btn-ghost text-xs">
          🧰 <span class="hidden lg:flex">Tools</span>
        </button>
        <button class="btn btn-ghost btn-circle text-xs">🖥️</button>

        <div class="dropdown dropdown-end">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-circle avatar"
          >
            <div class="w-10 rounded-full">
              <img
                width="40"
                height="40"
                alt="Profile image"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>{"Max Ola"}</li>
            <li>
              <a href="#" onClick$={() => console.log("open settings")}>
                Settings
              </a>
            </li>
            {/* <li>
                <a>Logout</a>
              </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
});
