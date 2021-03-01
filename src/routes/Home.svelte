<script lang="ts">
  import Construction32 from "carbon-icons-svelte/lib/Construction32";

  export let setTitle: (value: string) => void;
  $: setTitle("");
</script>

<div class="flex-grow flex flex-col justify-center">
  <Construction32 class="h-48 w-48 ml-auto mr-auto" />
  <h1 class="text-lg text-center">WIP :)</h1>
</div>
