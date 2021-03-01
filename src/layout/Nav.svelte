<script lang="ts">
  import Link16 from "carbon-icons-svelte/lib/Link16";
  import { Link } from "svelte-routing";
  export let title: string;
</script>

<nav class="flex flex-wrap-reverse mb-5 -ml-4">
  <span class="mr-auto ml-4 text-2xl font-light">
    {#if title}
      {title}
    {/if}
  </span>
  <div class="ml-1 flex flex-wrap text-1xl uppercase text-gray-300">
    <Link to="/" class="ml-3">
      <Link16 class="inline-block transform -translate-y-0.5" /> Home</Link>
    <Link to="/code" class="ml-3">
      <Link16 class="inline-block transform -translate-y-0.5" /> Code</Link>
    <Link to="/music" class="ml-3"
      ><Link16 class="inline-block transform -translate-y-0.5" /> Music</Link>
  </div>
</nav>
