<script lang="ts">
  import Link16 from "carbon-icons-svelte/lib/Link16";
  export let title: string;
</script>

<nav class="flex flex-wrap-reverse mb-5 -ml-4">
  <span class="mr-auto ml-4 text-2xl font-light">
    {#if title}
      {title}
    {/if}
  </span>
  <div class="ml-1 flex flex-wrap text-1xl uppercase text-gray-300">
    <a href="/" class="ml-3">
      <Link16 class="inline-block transform -translate-y-0.5" /> Home</a>
    <a href="/code" class="ml-3">
      <Link16 class="inline-block transform -translate-y-0.5" /> Code</a>
    <a href="/music" class="ml-3"
      ><Link16 class="inline-block transform -translate-y-0.5" /> Music</a>
  </div>
</nav>
