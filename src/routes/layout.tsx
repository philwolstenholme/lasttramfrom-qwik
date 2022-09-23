import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <>
      <main class="content">
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer class="content mt-10">
        <ul class="text-sm m-auto list-reset">
          <li class="mb-2 inline-block pr-2">
            If you like this site, maybe consider
            <a
              href="https://www.buymeacoffee.com/philw"
              target="_blank"
              rel="noopener"
              class="font-bold"
            >
              buying me a ☕️
            </a>
            or
            <a
              href="https://www.paypal.me/philgw/4.50"
              target="_blank"
              rel="noopener"
              class="font-bold"
            >
              a 🍺
            </a>
            ?
          </li>
          <li class="mb-2 inline-block pr-2">
            <a
              href="https://invite-uk.gett.com/code/GTPGPAS"
              target="_blank"
              rel="noopener"
              class="font-bold"
            >
              Get money off a black cab with Gett
            </a>
          </li>{" "}
          <li class="mb-2 inline-block">
            <a
              href="https://uber.com/invite/uberinmcr"
              target="_blank"
              rel="noopener"
              class="font-bold"
            >
              £3 off your first Uber journey
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
});
