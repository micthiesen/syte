<script lang="ts">
  import Link16 from "carbon-icons-svelte/lib/Link16";
  export let title: string | null = null;
</script>

<nav class="flex flex-wrap-reverse mb-5 -ml-4">
  <span class="mr-auto ml-4 text-2xl font-light">
    {#if title}
      {title}
    {/if}
  </span>
  <div class="self-start ml-1 flex flex-wrap text-1xl uppercase text-gray-300">
    <span class="ml-3"
      ><Link16 class="inline-block transform -translate-y-0.5" /> Code</span>
    <span class="ml-3"
      ><Link16 class="inline-block transform -translate-y-0.5" /> Music</span>
  </div>
</nav>
