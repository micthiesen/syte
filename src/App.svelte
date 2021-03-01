<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import Footer from "./layout/Footer.svelte";
  import Nav from "./layout/Nav.svelte";
  import Code from "./routes/Code.svelte";
  import Home from "./routes/Home.svelte";
  import Music from "./routes/Music.svelte";

  let url = "";
  let title = "";
  const setTitle = (value: string) => {
    title = value;
  };
</script>

<Router {url}>
  <main
    class="flex flex-col min-h-screen max-w-4xl mx-auto bg-gray-800 px-7 py-5">
    <Nav {title} />
    <div class="flex-grow flex flex-col">
      <Route path="code"><Code {setTitle} /></Route>
      <Route path="music"><Music {setTitle} /></Route>
      <Route path="/"><Home {setTitle} /></Route>
    </div>
    <Footer />
  </main>
</Router>
