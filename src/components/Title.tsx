import { For } from "solid-js";

export default function Title({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <h1 class="text-4xl text-center py-8 flex gap-2 flex-wrap justify-evenly mx-4">
      <For each={words}>
        {(word) => (
          <span
            class="bg-slate-900 text-white px-1"
            style={{
              transform: "rotate(" + Math.random() * 10 + "deg)",
            }}
          >
            {word}
          </span>
        )}
      </For>
    </h1>
  );
}
