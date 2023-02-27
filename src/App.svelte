<script>
  import { Router, Link, Route } from "svelte-routing";
  import Footer from "./lib/Footer.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Home from "./lib/pages/Home.svelte";
  import Menu from "./lib/pages/Menu.svelte";
  import About from "./lib/pages/About.svelte"
  
  import AOS from "aos";
  AOS.init();
  export let url = "";
</script>

<Navbar />
<Router url="{url}">
    <Route path="/"><Home /></Route>
    <Route path="/menu"><Menu /></Route>
    <Route path="/about"><About /></Route>
</Router>
<Footer />