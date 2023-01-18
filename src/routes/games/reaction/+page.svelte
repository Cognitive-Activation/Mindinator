<script>
  import SEO from "../../../components/SEO.svelte";

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
    timeOut = setTimeout(setGreenColor, Math.floor(Math.random() * 6 + 2) * 1000);
  }

  function handleAnchorClick(event) {
    event.preventDefault();
    const link = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace("#", "");
    const anchor = document.getElementById(anchorId);
    window.scrollTo({
      top: anchor.offsetTop,
      behavior: "smooth",
    });
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
  title="Reaction time test"
  description="Check your reaction time by clicking as fast as possible when the screen changes color, this examination evaluates your reflex action"
/>
<span class="reaction-container" id="rc-container">
  {#if page == "end-page"}
    <div class="container" on:click={resetGame}>
      <div class="end-screen">
        <h1>Reaction Time Test</h1>
        <div class="reaction-time-text avg-time">
          Average time = {avgTime.toFixed(0)}ms
        </div>
        <p>Click to play again !</p>
      </div>
    </div>
  {:else if page == "main-page"}
    <a
      href="#rc-container"
      id="container"
      class="container"
      on:click={handleAnchorClick}
    >
      <div class="main-menu active" on:click={playGame}>
        <p>Reaction Time Test</p>
        <p>Click as soon as you see the green color on the screen.</p>
        <p>Click to start</p>
      </div>
    </a>
  {:else if page == "play-page"}
    <div class="container">
      <div
        class="clickable-area"
        style="background-color:{greenAppeared
          ? 'rgba(110, 255, 50, 1)'
          : '#FF4141'}"
        on:click={playAreaClicked}
      >
        <div style="color: white;">
          {greenAppeared ? "Click now!" : "Click when green color appears"}
        </div>
      </div>
    </div>
  {:else if page == "too-soon-page"}
    <div class="container">
      <div class="resultPage" on:click={playGame}>
        <p>Too soon!</p>
        <p>Click to try again</p>
      </div>
    </div>
  {:else if page == "time-show-page"}
    <div class="container">
      <div class="resultPage" on:click={playGame}>
        <p>Your time: {reactionTime}ms</p>
        <p>Click to keep going!</p>
      </div>
    </div>
  {/if}
</span>

<style>
  .reaction-container {
    width: 100%;
    display: flex;
    user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    overflow: hidden;
    height: 100%;
    min-height: 100vh;
  }
  .container {
    width: 100%;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    align-items: center;
  }
  .end-screen,
  .resultPage {
  }

  .end-screen,
  .main-menu,
  .resultPage,
  .clickable-area {
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    padding: 0rem 0.2rem;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }
  .resultPage,
  .clickable-area {
    font-size: 1.8rem;
  }
  .main-menu > p:first-child {
    font-size: 2.2rem;
    font-weight: bold;
  }
  .avg-time,
  .resultPage > p:last-child,
  .main-menu > p:last-child {
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    margin-top: 2rem;
  }

  /* CSS */
  .button {
    align-items: center;
    appearance: none;
    background-color: #fcfcfd;
    border-radius: 4px;
    border-width: 0;
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    box-sizing: border-box;
    color: #36395a;
    cursor: pointer;
    display: inline-flex;
    font-family: "JetBrains Mono", monospace;
    height: 48px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow 0.15s, transform 0.15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow, transform;
    font-size: 18px;
  }

  .button:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  }

  .button:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  .button:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
  }
</style>
