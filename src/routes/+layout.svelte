<script>
  import "../styles/globals.css";
  import "@fontsource/red-hat-display";
  import NavHandler from "$lib/components/NavHandler.svelte";
  import SEO from "$lib/components/SEO.svelte";
</script>

<SEO />

<NavHandler />
<slot>
  <h1>404 not found</h1>
</slot>

<style>
  :global(body) {
    font-family: "Red Hat Display", sans-serif;
  }
</style>
