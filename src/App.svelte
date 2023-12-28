<script>
  import { Router, Link, Route } from "svelte-routing";
  import Footer from "./lib/Footer.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Home from "./lib/pages/Home.svelte";
  import Menu from "./lib/pages/Menu.svelte";
  import About from "./lib/pages/About.svelte"
  
  import AOS from "aos";
  AOS.init();
  export let url = "/cold-scoop/home";
</script>

<Navbar />
<Router basepath="/cold-scoop" url="{url}">
    <Route path="/home"><Home /></Route>
    <Route path="/menu"><Menu /></Route>
    <Route path="/about"><About /></Route>
</Router>
<Footer />