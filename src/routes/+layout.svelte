<script>
  import "../styles/globals.css";
  import "@fontsource/red-hat-display";
  import NavHandler from "$lib/components/NavHandler.svelte";
  import SEO from "$lib/components/SEO.svelte";
  import Login from "$lib/components/Login.svelte";
  import Toasts from "$lib/components/Toasts.svelte";
  import { isModalOpen } from "$lib/UtilityStore.js";
  import "$lib/interceptors.js";
  import axios from "axios";
  import { onMount } from "svelte";
  import { user, isWiredIn } from "$lib/UserStore.js";

  function closeModal() {
    $isModalOpen = false;
  }

  onMount(async () => {
    const { data } = await axios.get("auth/user", { withCredentials: true });
    console.log(data);
    $user = data.user;
    $isWiredIn = true;
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  id="background"
  style="--position: {$isModalOpen ? 'absolute' : 'none'};
         --display: {$isModalOpen ? 'block' : 'none'}}"
  on:click={closeModal}
/>

<Toasts />

<SEO />
<NavHandler />
<Login />

<slot>
  <h1>404 not found</h1>
</slot>

<style>
  :global(body) {
    font-family: "Red Hat Display", sans-serif;
  }

  #background {
    position: var(--position);
    display: var(--display);
    z-index: 10;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(25, 25, 25, 0.8);
  }
</style>
