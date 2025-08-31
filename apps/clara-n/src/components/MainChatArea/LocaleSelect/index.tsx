import { component$ } from "@builder.io/qwik";

//TODO: make it shine... more languages dropdown?
export const LocaleSelect = component$(() => {
  return (
    <>
      <a href="/en" title="/en">
        EN
      </a>
      {"|"}
      <a href="/de">DE</a>
    </>
  );
});

export default LocaleSelect;
