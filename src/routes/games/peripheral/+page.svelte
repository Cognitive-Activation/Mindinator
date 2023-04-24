<script>
  import SEO from "$lib/components/SEO.svelte";

  let page = "main-page";
  let greenAppeared = false;
  let greenAppearedTime = null;
  let reactionTime = null;
  let round = 0;
  let avgArr = [];
  let avgTime = null;
  let timeOut=null
  function resetGame() {
    greenAppeared = false;
    greenAppearedTime = null;
    reactionTime = null;
    round = 0;
    avgArr = [];
    avgTime = null;
    playGame();
  }

  function setRedColor() {
    greenAppeared = false;
  }

  function setGreenColor() {
    greenAppeared = true;
    greenAppearedTime = Date.now();
  }

  function playGame() {
    page = "play-page";
    setRedColor();
    timeOut = setTimeout(setGreenColor, Math.floor(Math.random() * 10 + 2) * 1000);
  }

  function playAreaClicked() {
    if (greenAppeared == true) {
      reactionTime = Date.now() - greenAppearedTime;
      avgArr.push(reactionTime);
      round++;
      if (round == 3) {
        const sum = avgArr.reduce((a, b) => a + b, 0);
        avgTime = sum / avgArr.length || 0;
        page = "end-page";
      } else {
        page = "time-show-page";
      }
    } else {
      clearTimeout(timeOut)
      page = "too-soon-page";

    }
  }
</script>

<SEO
  title="Reaction time test ( peripheral vision )"
  description="Evaluate your reaction time to color change on the screen perceived through your peripheral vision"
/>

<span id="rp-container">
  {#if page == "end-page"}
    <div class="end-screen" on:click={resetGame}>
      <div class="container">
        <span class="reaction-time-text">
          <p>Reaction Time Test</p>
          <p>AVERAGE TIME : {avgTime.toFixed(0)}ms</p>
        </span>
        <p>Click to play again !</p>
      </div>
    </div>
  {:else if page == "main-page"}
    <a class="main-menu active" on:click={playGame} href="#rp-container">
      <div class="container">
        <span>
          <p>Reaction Time Test</p>
          <p>Click as soon as you see the green color on the screen.</p>
        </span>
        <p>Click anywhere to start.</p>
      </div>
    </a>
  {:else if page == "play-page"}
    <div
      class="clickable-area"
      style="background-color:{greenAppeared
        ? 'rgba(130, 205, 71, 1)'
        : 'rgba(255, 65, 65, 1);'}"
      on:click={playAreaClicked}
    >
      <span class="circle">
        <span class="blackdot" />
      </span>
    </div>
  {:else if page == "too-soon-page"}
    <div class="resultPage" on:click={playGame}>
      <div class="container">
        <p>Too soon!</p>
        <p>Click the page to try again</p>
      </div>
    </div>
  {:else if page == "time-show-page"}
    <div class="resultPage" on:click={playGame}>
      <div class="container">
        <span class="row">
          <p>Your time: {reactionTime}ms</p>
        </span>
        <p>Click to keep going!</p>
      </div>
    </div>
  {/if}
</span>

<style>
  #rp-container {
    display: flex;
    cursor: pointer;
    overflow: hidden;
    width: 100%;
    user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    height: 100vh;
  }
  .clickable-area {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: rgba(255, 65, 65, 1);
  }

  .end-screen,
  .main-menu {
    display: flex;
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 0.8rem;
    justify-content: center;
    align-items: center;
  }

  .main-menu {
    cursor: pointer;
  }

  .container {
    display: flex;
    font-size: 1.5rem;
    gap: 3.5rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .container > span:first-child {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .container p:first-child {
    font-size: 3rem;
    font-weight: 500;
  }
  .container > p {
    font-size: 1.8rem;
    font-weight: 500;
  }
  .end-screen .play-again-btn {
    border: none;
    cursor: pointer;
  }

  .resultPage {
    display: grid;
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }

  .circle {
    background-color: #ffffff;
    width: 75%;
    height: 150%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  .reaction-time-text {
    font-size: 2rem;
  }
  a{
    color: currentColor;
  }
  .blackdot {
    background-color: #000000;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
  }
</style>
