<script lang="ts">
  import Footer from "./Footer.svelte";
  import Nav from "./Nav.svelte";
  import Tailwind from "./Tailwind.svelte";
</script>

<Tailwind />
<main
  class="flex flex-col min-h-screen max-w-4xl mx-auto bg-gray-800 px-7 py-5">
  <Nav title="Pretend Title Quite Longs YESSSSS" />
  <div class="flex-grow">
    <p class="mb-4">
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
      tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
      Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
    </p>
    <p class="mb-4">
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
      tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
      Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
    </p>
    <p>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
      tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
      Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
    </p>
  </div>
  <Footer />
</main>
