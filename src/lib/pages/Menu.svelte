<script lang="ts">
  import Card from "../Card.svelte";
  import Navbar from "../Navbar.svelte";

  let menu = [
    {
      title: "Ice Creams",
      items: [
        {
          itemSrc:
            "https://static.wixstatic.com/media/e9f42a_8d942fd050104eb2a1133955f0ea7c41~mv2.png/v1/fill/w_464,h_464,usm_1.20_1.00_0.01/file.webp",
          itemTitle: "Soft Serve Ice Cream",
        },
        {
          itemSrc:
            "https://static.wixstatic.com/media/e9f42a_7e052b7dbe7c4e808ee5eccc33c063d6~mv2.png/v1/fill/w_464,h_464,usm_1.20_1.00_0.01/file.webp",
          itemTitle: "Rollup Ice Cream",
        },
      ],
    },
    {
      title: "Juices",
      items: [
        {
          itemSrc:
            "https://static.wixstatic.com/media/e9f42a_e25800f914a141469e6292aa4bf7e67b~mv2.png/v1/fill/w_464,h_464,usm_1.20_1.00_0.01/file.webp",
          itemTitle: "Orange Juices",
        },
        {
          itemSrc:
            "https://static.wixstatic.com/media/e9f42a_ab664ba16a394f36a7febfaad7ff1fb7~mv2.png/v1/fill/w_464,h_464,usm_1.20_1.00_0.01/file.webp",
          itemTitle: "Natural Pomegranate Juice",
        },
        {
          itemSrc:
            "https://static.wixstatic.com/media/e9f42a_8fff7b7e18d440819f204e8a367ffaff~mv2.png/v1/fill/w_464,h_464,usm_1.20_1.00_0.01/file.webp",
          itemTitle: "Lemonade",
        },
        {
          itemSrc:
            "https://static.wixstatic.com/media/e9f42a_1a33b83a892e46749b206b0672232a02~mv2.png/v1/fill/w_464,h_464,usm_1.20_1.00_0.01/file.webp",
          itemTitle: "Shushie's",
        },
        {
          itemSrc:
            "https://static.wixstatic.com/media/e9f42a_90b6e0d11ffa42debcd567cef8e0038e~mv2.png/v1/fill/w_464,h_464,usm_1.20_1.00_0.01/file.webp",
          itemTitle: "Milkshakes",
        },
      ],
    },
  ];
  document.title = "MENU | Cold Scoop"
</script>

<div class="bg-blue-600 h-[368px]">
  <div class="flex items-center justify-center h-full text-center flex-col">
    <div
      class="text-white
        "
    >
      <div class="text-8xl">MENU</div>
    </div>
  </div>
</div>
<div class="flex justify-center items-center py-8 flex-col">
  <div class="max-w-fit sm:max-w-[768px] ">
    {#each menu as sectionItem}
      <h1 class="text-2xl text-center">{sectionItem.title}</h1>
      <div class="flex flex-wrap content-evenly gap-5 py-10 justify-center sm:justify-start">
        {#each sectionItem.items as item}
          <Card class="px-10" imageSrc={item.itemSrc} imageTitle={item.itemTitle} />
        {/each}
      </div>
    {/each}
  </div>
</div>
