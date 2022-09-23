import { component$, Slot } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const location = useLocation();

  return (
    <div>
      <h1>Trams from {location.params.from}</h1>
      <Slot />
    </div>
  );
});
