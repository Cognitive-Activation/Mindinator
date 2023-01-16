<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  export let refresh = ``;
</script>

{#key refresh}
  <!-- <div
    in:fly={{ delay: 500, duration: 500, x: 50 }}
    out:fly={{ delay: 500, duration: 500, x: -50 }}
  > -->
  <div
    in:fly={{ delay: 500, duration: 500, x: 50 }}
    out:fly={{ delay: 500, duration: 500, x: -50 }}
  >
    <slot />
  </div>
{/key}
