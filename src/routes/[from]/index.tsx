import { component$ } from "@builder.io/qwik";
import { useLocation, Link } from "@builder.io/qwik-city";
import { stops } from "../../data/stops";

export default component$(() => {
  const location = useLocation();

  return (
    <div>
      <h1 class="text-4xl font-bold">
        Trams from {stops[location.params.from as keyof typeof stops].name} to…
      </h1>
      <ul>
        {Object.keys(stops).map((id) => (
          <li key={stops[id as keyof typeof stops].id}>
            {/* Tidy this up later https://bobbyhadz.com/blog/typescript-no-index-signature-with-parameter-of-type-string */}
            <Link
              href={`/${location.params.from}/${
                stops[id as keyof typeof stops].id
              }`}
            >
              {stops[id as keyof typeof stops].name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});
