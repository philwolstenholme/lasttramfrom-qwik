import { component$, Resource } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { useEndpoint } from "@builder.io/qwik-city";
import "isomorphic-fetch";

export interface Results {
  to: To;
  from: From;
  times: Times;
  url: string;
  now: Time;
}

export interface Times {
  [key: string]: Object[];
}

export interface To {
  slug: string;
  name: string;
}
export interface From {
  slug: string;
  name: string;
  latitude: number;
  longitude: number;
}

export interface Time {
  date: Date;
  time: string;
  duration: string;
  via: string;
}
export interface Date {
  day: Day;
  month: Month;
}
export interface Day {
  ofWeek: string;
  ofMonth: string;
}
export interface Month {
  short: string;
  long: string;
}

export const onGet: RequestHandler<Results> = async ({ params }) => {
  const response = await fetch(
    `https://lasttramfrom.com/.netlify/functions/get-times?from=${
      params.from
    }&to=${[params.to]}`
  );

  if (response.ok) {
    const data = await response.json();

    const d = new Date();
    const todayKey = [
      d.getFullYear(),
      String(d.getMonth() + 1).padStart(2, "0"),
      String(d.getDate()).padStart(2, "0"),
    ].join(`-`);

    data.now = data.times[todayKey];
    return data;
  } else {
    throw new Error("Failed to fetch times");
  }
};

export default component$(() => {
  const productData = useEndpoint<Results>();

  return (
    <div>
      <Resource
        value={productData}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Error</div>}
        onResolved={(data) => (
          <>
            <h1>
              Trams from {data.from.slug} to {data.to.slug}
            </h1>
            <p>{data.now.time}</p>
          </>
        )}
      />
    </div>
  );
});
