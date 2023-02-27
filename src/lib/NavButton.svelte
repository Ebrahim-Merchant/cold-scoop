<script lang="ts">
  export let buttonText = null;
</script>

<button
  {...$$props}
  on:click
  class="{$$props.class || ''} py-2 bg-black text-white px-4 hover:bg-white hover:text-black"
>
  {#if $$slots.button}
    <slot name="button" />
  {:else}
    {buttonText}
  {/if}
</button>
