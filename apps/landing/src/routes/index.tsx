import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Container, NewHeader } from "@diamant-tech/diamant-ui";
import { Hero } from "../components/hero/Hero";

export default component$(() => {
  return (
    <>
      <Hero />
      <Container>
        <h1 class="text-red-700 ">HELLO</h1>
      </Container>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
