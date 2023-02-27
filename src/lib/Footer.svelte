<script>
  const info = [
    {
      heading: "Address",
      content: "PO Box 343084, Dubai, United Arab Emirates",
    },
    {
      heading: "CONTACT",
      content: "info@coldscoop.ca"
    },
    {
      heading: "HOURS",
      content: "OPEN DAILY<br/>Sat - Wed - 10AM-10PM<br/>Thu-Fri - 10AM-1PM"
    }
  ];
</script>

<footer class="max-h-fit sm:h-96 bg-black">
  <div
    class="max-w-3xl flex gap-2 text-white justify-center m-auto pt-8 flex-col sm:flex-row"
  >
    {#each info as infoItem}
      <div class="basis-1/3 p-4">
        <p class="text-lg">{infoItem.heading}</p>
        <div class="pt-4">{@html infoItem.content}</div>
      </div>
    {/each}
  </div>
  <div class="max-w-3xl text-white m-auto pl-4 py-12 sm:pt-12 h-fit">
    ©2021 by Cold Scoop
  </div>
</footer>
