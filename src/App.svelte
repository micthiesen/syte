<script lang="ts">
  import Construction32 from "carbon-icons-svelte/lib/Construction32";
  import Footer from "./Footer.svelte";
  import Nav from "./Nav.svelte";
</script>

<main
  class="flex flex-col min-h-screen max-w-4xl mx-auto bg-gray-800 px-7 py-5">
  <Nav title={null} />
  <div class="flex-grow flex flex-col justify-center">
    <div>
      <Construction32 class="h-48 w-48 ml-auto mr-auto" />
      <h1 class="text-lg text-center">WIP :)</h1>
    </div>
  </div>
  <Footer />
</main>
