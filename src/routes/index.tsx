import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1 class="text-4xl font-bold">Find the last tram from X to Y</h1>

      <p>
        <span aria-hidden="true">💡</span>
        <span class="sr-only">Idea</span>: animate in different stop names in
        the placeholder above
      </p>

      <section class="mt-10 space-y-5">
        <p>My Qwik todo list:</p>
        <ul>
          <li>manifest/favions</li>
          <li>List of stations from API</li>
          <li>Individual stop/route pages</li>
        </ul>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Last tram from - lasttramfrom.com",
};
