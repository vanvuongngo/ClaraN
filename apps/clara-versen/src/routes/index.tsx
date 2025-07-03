import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Clara VerseN</h1>
      <p>
        This project started a hardfork of the awesome Clara Verse. Why you want
        to use Clara VerseN? Because the tech stack based on modern and
        lightweight technologies ...
      </p>
      <h2>Tech Stack</h2>
      <ol>
        <li>
          <a href="https://tauri.app/">Tauri</a> instead of heavy electron -
          more secure using the system web engine and rust
        </li>
        <li>
          <a href="https://qwik.dev/">Qwik</a> web framework instead of React
          javascript framework - secure because less javascript and npm packages
          to maintain
        </li>
        <li>
          Uses the latest <a href="http://nodejs.org/">Nodejs</a> LTS version at
          leased to ensure that all security updates are included
        </li>
      </ol>
    </>
  );
});

export const head: DocumentHead = {
  title: "Clara VerseN - AI Assistant",
  meta: [
    {
      name: "description",
      content:
        "Clara VerseN is a hardfork of the awesome Clara Verse with modern tech stack and mobile first",
    },
  ],
};
