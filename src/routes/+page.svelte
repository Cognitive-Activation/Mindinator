<script>
  import SEO from "../components/SEO.svelte";
  import Transition from "../components/Transition.svelte";
</script>

<SEO
  title="Brain Games"
  description="Mindinator is your daily dose of brain activation. Work more consciously with an activated mind and excel at all your endeavors"
/>

<Transition>
  <span class="home-container row">
    <span class="home-page-content column">
      <p class="title">Mindinator</p>

      <p class="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <a class="start-button" href="/games">Start</a>
    </span>

    <span class="img-container">
      <span class="blur-span" />
      <img src="./brain.svg" alt="brainimg" />
    </span>
  </span>
</Transition>

<style>
  @font-face {
    font-family: "RedHat";
    font-weight: 400;
    padding: 0%;
    margin: 0%;
    src: url("fonts/RedHatDisplay-VariableFont_wght.ttf");
  }
  .home-container {
    padding: 5rem 6rem;
    align-items: center;
    max-height: 40rem;
    justify-content: space-between;
    gap: 1rem;
  }
  .home-page-content {
    max-width: 650px;
    width: 100%;
    height: 20rem;
    margin-left: 2rem;
    justify-content: space-evenly;
    align-items: flex-start;
  }
  .title {
    font-size: 5rem;
    font-weight: bold;
    padding: 0%;
    margin: 0%;
  }
  .start-button {
    display: flex;
    height: 2rem;
    background: linear-gradient(
      97.77deg,
      #2aa1f7 -5.92%,
      #f8406e 49.06%,
      #2aa1f7 98%,
      #f8406e 150%
    );
    align-items: center;
    justify-content: center;
    font-weight: bold;
    padding: 1.5rem 2.5rem;
    font-size: 1.5rem;
    font-weight: 200;
    border-radius: 15px;
    cursor: pointer;
    background-size: 300% 100%;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
  .start-button:hover {
    background-position: 100% 0;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  .img-container {
    position: relative;
    width: 100%;
    min-width: 15rem;
    max-width: 40rem;
    height: 40rem;
    height: 100%;
    min-height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img-container > img {
    width: 100%;
    height: 100%;
  }
  .blur-span {
    width: 50%;
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    background: linear-gradient(138.53deg, #f56387 6.31%, #41aaf5 90.61%);
    border: 1px solid #000000;
    filter: blur(85px);
    z-index: -10;
  }
  @media screen and (max-width: 950px) {
    .home-container {
      padding: 1rem;
      height: fit-content;
      justify-content: flex-start;
      gap: 0;
      flex-direction: column-reverse;
      max-height: none;
    }
    .home-page-content {
      margin-left: 0%;
    }
    .title {
      display: none;
    }
    .img-container > img {
      max-width: 15rem;
      max-height: 15rem;
    }
    .desc {
      text-align: center;
      padding: 1.5rem;
    }
    .home-page-content {
      align-items: center;
    }
  }
</style>
