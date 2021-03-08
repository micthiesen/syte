<script lang="ts">
  import Footer from "./layout/Footer.svelte";
  import Nav from "./layout/Nav.svelte";
  import Construction32 from "carbon-icons-svelte/lib/Construction32";
</script>

<main
  class="flex flex-col min-h-screen max-w-4xl mx-auto bg-gray-800 px-7 py-5">
  <Nav title={""} />
  <div class="flex-grow flex flex-col">
    <div class="flex-grow flex flex-col justify-center">
      <Construction32 class="h-48 w-48 ml-auto mr-auto" />
      <h1 class="text-lg text-center">WIP :)</h1>
    </div>
  </div>
  <Footer />
</main>
