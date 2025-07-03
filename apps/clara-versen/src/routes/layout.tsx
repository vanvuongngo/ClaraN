import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="min-dvh-screen">
      <Slot />
    </div>
  );
});
