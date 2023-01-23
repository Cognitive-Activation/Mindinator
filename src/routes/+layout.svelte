<script>
  import Navbar from "../components/Navbar.svelte";
  import Transition from "../components/Transition.svelte";
  import "../styles/globals.css";
  import "@fontsource/red-hat-display";
</script>

<Navbar />
<slot>404 not found</slot>

<style>
  :global(body) {
    font-family: "Red Hat Display", sans-serif;
  }
</style>
