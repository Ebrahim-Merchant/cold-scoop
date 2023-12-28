<script lang="ts">
  import "./../app.css";
  import { navigate } from "svelte-routing";
  import NavButton from "./NavButton.svelte";
  let navButtonList = [
    { buttonTxt: "Home", navigatePath: "/cold-scoop/home" },
    { buttonTxt: "Menu", navigatePath: "/cold-scoop/menu" },
    { buttonTxt: "About", navigatePath: "/cold-scoop/about" },
  ];
  let logoSrc =
    "https://static.wixstatic.com/media/e9f42a_b9a668f7f3d44773979f98ccca448611~mv2.png/v1/fill/w_752,h_259,al_c,lg_1,q_85,enc_auto/small%20logo.png";
  let hidden = true;
  let activePath = "";
  import logo from "../assets/close.svg";
  import { onMount } from "svelte/internal";

  onMount(() => {
    activePath = window.location.pathname;
  });

  function navBarNavigate(path: string) {
    navigate(path);
    activePath = window.location.pathname;
  }
</script>

<nav {...$$props} class="nav-header fixed top-0">
  <div class="container flex">
    <img src={logoSrc} width="150px" height="50px" alt=""/>
    <div class="flex-row ml-auto hidden sm:flex">
      {#each navButtonList as button}
        <NavButton
          on:click={() => navBarNavigate(button.navigatePath)}
          buttonText={button.buttonTxt}
          isActive={button.navigatePath === activePath}
        />
      {/each}
    </div>
    <div class="flex-row ml-auto flex sm:hidden">
      <NavButton on:click={() => (hidden = !hidden)}>
        <svg slot="button" viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="15" fill="white" />
          <rect y="30" width="100" height="15" fill="white" />
          <rect y="60" width="100" height="15" fill="white" />
        </svg>
      </NavButton>
    </div>
  </div>
</nav>
<div
  class:hidden
  class=" w-full h-full fixed flex flex-col z-[1000] justify-center items-center bg-white/95 overflow-hidden top-0 left-0 overflow-y-auto overflow-x-hidden outline-none"
  aria-hidden="true"
  tabindex="-1"
>
  <button
    on:click={() => (hidden = !hidden)}
    class="text-black m-auto fixed top-0 right-0 p-6"
    ><img src={logo} width="25px" height="25px" alt="" /></button
  >
  <div class="flex-col flex">
    {#each navButtonList as button}
      <NavButton
        class="text-4xl"
        on:click={() => {
          hidden = !hidden;
          navigate(button.navigatePath);
        }}
        buttonText={button.buttonTxt}
      />
    {/each}
  </div>
</div>

<style lang="postcss">
  .nav-header {
    @apply bg-black/[0.2] border-gray-200 px-2 sm:px-4 py-3 rounded flex justify-center w-full;
  }
</style>
