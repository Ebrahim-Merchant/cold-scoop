<script lang="ts">
  import HeadingSection from "../sections/HeadingSection.svelte";
  import DoubleSection from "../sections/DoubleSection.svelte";
  document.title = "HOME | Cold Scoop"

</script>

<!-- Modal -->
<HeadingSection />
<DoubleSection>
  <img
    slot="left"
    class="h-full"
    src="https://static.wixstatic.com/media/1ddf5b9de50b46f4bfc25e53a352eb67.jpg/v1/fill/w_1792,h_1302,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/1ddf5b9de50b46f4bfc25e53a352eb67.jpg"
    alt="Ice Cream"
    data-aos="fade-right"
  />
  <div
    slot="right"
    class="flex items-center justify-center h-full text-center flex-col sm:pr-20"
  >
    <div class="text-black">
      <div class="text-4xl">OUR FLAVORS</div>
      <div class="text-2xl">Fresh n' Tasty!</div>
      <div class="text-xl">
        The best flavours served to make you feel good and taste good
      </div>
    </div>
    <button
      class="text-black p-4 mt-4 color border border-black hover:bg-gray-900 hover:text-white"
      >MENU</button
    >
  </div>
</DoubleSection>

<section class="h-768 juice-back" data-aos="fade-up">
  <div
    class="flex items-center justify-center h-full pb-10 text-center flex-col"
  >
    <div class="text-white">
      <div class="text-2xl">ENJOY</div>
      <div class="text-8xl">FRESH</div>
      <div class="text-8xl">FRUITS</div>
    </div>
    <button
      class="text-white p-4 mt-4 color border border-white hover:bg-gray-900 hover:border-white/0"
      >MENU</button
    >
  </div>
</section>

<DoubleSection>
  <div
    slot="left"
    class="flex items-center justify-center h-full text-center flex-col sm:pl-20"
  >
    <div class="text-black">
      <div class="text-4xl">OUR PLACE</div>
      <div class="text-2xl">Ice Cream!</div>
      <div class="text-xl">We serve soft serve ice cream.</div>
    </div>
    <button
      class="text-black p-4 mt-4 color border border-black hover:bg-gray-900 hover:text-white"
      >MENU</button
    >
  </div>
  <img
    slot="right"
    class="h-full"
    src="https://static.wixstatic.com/media/84770f_9a956bbd2dda4af5b1ec35c35d26c07b~mv2_d_3840_2160_s_2.jpg/v1/fill/w_1792,h_1300,al_r,q_90,usm_0.66_1.00_0.01,enc_auto/84770f_9a956bbd2dda4af5b1ec35c35d26c07b~mv2_d_3840_2160_s_2.jpg"
    alt="Ice Cream"
  />
</DoubleSection>


<style>
  .juice-back {
    background-image: url(" https://static.wixstatic.com/media/6e24e1d7e0584a9abeb9dfe9e825321c.jpg/v1/fill/w_1792,h_879,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6e24e1d7e0584a9abeb9dfe9e825321c.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
