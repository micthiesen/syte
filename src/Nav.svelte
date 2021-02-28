<script lang="ts">
  export let title: string | null = null;
</script>

<nav class="px-4 py-2.5 flex flex-wrap -ml-4">
  <span class="mr-auto ml-4 text-2xl">{title}</span>
  <div class="self-end flex flex-wrap text-1xl uppercase text-gray-300">
    <span class="ml-4">Coding Stuff</span>
    <span class="ml-4">Musical Musings</span>
  </div>
</nav>
