import { component$ } from "@builder.io/qwik";
import { useLocation, Link } from "@builder.io/qwik-city";
import { stops } from "../../data/stops";

export default component$(() => {
  const location = useLocation();

  const stop = stops.find((element) => element[0] === location.params.from)[1];

  return (
    <div>
      <h1 class="text-4xl font-bold">Trams from {stop.name} to…</h1>
      <ul>
        {stops.map(([id, { name }]) => (
          <li key={id}>
            <Link href={`/${location.params.from}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
});
