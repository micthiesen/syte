<script lang="ts">
  import "smelte/src/tailwind.css";
  export let name: string;
</script>

<main class="p-4 mx-auto text-center max-w-xl">
  <h1 class="uppercase text-6xl leading-normal font-thin text-svelte">
    Hello {name}!
  </h1>
  <p class="custom-style">
    Visit the
    <a href="https://svelte.dev/tutorial" class="text-blue-500 underline"
      >Svelte tutorial
    </a>
    to learn how to build Svelte apps.
  </p>
</main>

<style>
  .custom-style {
    @apply italic;
  }
</style>
