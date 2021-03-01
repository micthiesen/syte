<script lang="ts">
  export let setTitle: (value: string) => void;
  $: setTitle("Music");
</script>

<h1 class="text-lg text-center">Writing Goes Here</h1>
