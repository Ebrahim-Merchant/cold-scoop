<script lang="ts">
  export let buttonText = null;
  export let isActive = false;
</script>

<button
  {...$$props}
  on:click
  class="{$$props.class || ''} {isActive ? 'bg-white hover:text-black"' : 'bg-black text-white' } py-2 px-4 hover:bg-white hover:text-black"
>
  {#if $$slots.button}
    <slot name="button" />
  {:else}
    {buttonText}
  {/if}
</button>
