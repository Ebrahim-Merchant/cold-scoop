<script>
  import { navigate } from "svelte-routing";

  import SingleSection from "./SingleSection.svelte";
</script>

<SingleSection class="heading-background">
  <div class="flex items-center justify-center h-full text-center flex-col">
    <div class="text-white">
      <div class="text-2xl bold" data-aos="fade-in">HAND CRAFTED</div>
      <div class="text-8xl" data-aos="zoom-in">FROZEN YOGURT</div>
      <div class="text-2xl" data-aos="fade-in">AND</div>
      <div class="text-8xl" data-aos="zoom-in">ICE CREAM</div>
    </div>
    <button
      data-aos="zoom-in"
      class="text-white p-4 mt-4 color border border-white hover:bg-gray-900 hover:border-white/0"
      on:click={() => navigate("/menu")}>MENU</button
    >
  </div>
</SingleSection>

<style>
  :global(.heading-background) {
    background-image: url("https://static.wixstatic.com/media/e9f42a_175f7288eeba4c0ea6e6160234321b42~mv2.jpg/v1/fill/w_3000,h_1170,al_c,q_90,enc_auto/e9f42a_175f7288eeba4c0ea6e6160234321b42~mv2.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
