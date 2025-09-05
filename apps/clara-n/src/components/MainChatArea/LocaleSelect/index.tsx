import { component$ } from "@builder.io/qwik";

//TODO: make it shine... more languages dropdown?
export const LocaleSelect = component$(() => {
  return (
    <>
      <a class="btn btn-ghost px-1" href="/en" title="english">
        EN
      </a>
      {"|"}
      <a class="btn btn-ghost px-1" href="/de" title="deutsch">
        DE
      </a>
    </>
  );
});

export default LocaleSelect;
