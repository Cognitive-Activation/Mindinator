<script>
  import SEO from "$lib/components/SEO.svelte";
  // import Simultaneous1 from "$lib/images/simultaneous.svg";
  // import Reaction from "$lib/images/ReactionTest.svg";
  // import Peripheral from "$lib/images/ReactionTestVision.svg";
  import Card from "$lib/components/Card.svelte";
  // import "$lib/images";
  import { onMount } from "svelte";
  import axios from "axios";
</script>

<SEO
  title="Games"
  description="Choose from a bunch of scientifically proven brain activation games aimed at improving your work efficiency"
/>

<span class="body">
  <span class="grid-container">
    <Card />
  </span>
</span>

<style>
  .body {
    padding: 0;
    margin: 0%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  * {
    padding: 0%;
    margin: 0%;
    box-sizing: border-box;
  }

  .grid-container {
    max-width: 90%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    gap: 3rem;
    row-gap: 2.5rem;
    justify-items: center;
    padding: 1rem;
    grid-template-columns: repeat(4, 1fr);
    height: 40rem;
    border-radius: 10px;
  }
</style>
