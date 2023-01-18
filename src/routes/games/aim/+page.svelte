<script>
  import SEO from "../../../components/SEO.svelte";

  let time;
  let targetFinished = 0;
  const numTargets = 20;
  const target = "./target.png";
  function startGame() {
    gameStarted = true;
    createRandomCircle();
    const beginning = new Date();
    const beginningTime = beginning.getTime();
    const interval = setInterval(() => {
      const current = new Date();
      const currentTime = current.getTime();
      time = currentTime - beginningTime;
    }, 10);
  }

  let divWidth;
  let divHeight;
  let finishTime = 0;
  let avg;
  function finishGame() {
    gameFinished = true;
    finishTime = time;
    avg = time / numTargets;
  }

  const circleSize = 100;
  let top = getRandomNumber(0, divHeight - circleSize);
  let left = getRandomNumber(0, divWidth - circleSize);
  function createRandomCircle() {
    top = getRandomNumber(0, divHeight - circleSize);
    left = getRandomNumber(0, divWidth - circleSize);
  }

  function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function restartGame() {
    targetFinished = 0;
    gameFinished = false;
    gameStarted = false;
  }

  let gameStarted = false;
  let gameFinished = false;
  $: targetFinished >= numTargets ? finishGame() : console.log("");
</script>

<SEO
  title="Aim trainer"
  description="Sharpen your Aim and activate your senses by hitting 20 targets in the lowest time possible"
/>

<div class="container" id="aim">
  <div class="screen">
    <span class="row">
      {#if gameStarted}
        <span class="details">
          <p id="time">Time: {(time / 1000).toFixed(3)} s</p>
          <p id="remaining">
            Remaining: {numTargets - targetFinished}
          </p>
        </span>
      {/if}
      <span>
        <p class="heading">Aim Training</p>
      </span>
      {#if gameStarted}
        <span class="start">
          <p href="#" id="start" on:click={restartGame}>New Game</p>
        </span>
      {/if}
    </span>
    {#if gameFinished}
      <div class="board">
        <div on:click={restartGame} class="result-span">
          <h1 class="result-text">
            Time: <span class="primary">{finishTime / 1000} s</span>
          </h1>
          <h1 class="result-text">
            Average Time: <span class="primary">{avg} ms</span>
          </h1>
          <div class="restartBtn">Click to Restart</div>
        </div>
      </div>
    {:else if gameStarted}
      <div
        class="board"
        bind:clientWidth={divWidth}
        bind:clientHeight={divHeight}
      >
        <div
          class="circle"
          style="top: {top}px; left: {left}px;"
          on:click={() => {
            createRandomCircle();
            targetFinished++;
          }}
        />
      </div>
    {:else}
      <div class="board">
        <a href="#aim" class="start-game" on:click={startGame}>
          <p class="starttext">Click to start !</p>
        </a>
      </div>
    {/if}
  </div>
</div>

<style>
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0%;
  }
  .result-span {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
    cursor: pointer;
    gap: 1rem;
  }
  .container {
    font-family: "Khula", sans-serif;
    margin: 0;
    text-align: center;
    overflow: hidden;
  }
  .heading {
    font-size: 1.8rem;
    font-weight: bold;
  }
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
  }
  .start {
    transition: 0.2s all;
    padding: 0.3rem 0.6rem;
    height: fit-content;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    text-align: center;
    border-radius: 5px;
    font-size: 1.2rem;
    position: relative;
  }
  h1 {
    line-height: 1.3;
    font-size: 3.5rem;
  }
  .result-text {
    font-size: 1.7rem;
    color: white;
  }
  .screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    gap: 1rem;
    transition: margin 0.5s ease-out;
  }
  .primary {
    color: #16d9e3;
  }
  .board {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 90rem;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    max-height: 35rem;
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #232323;
    border-radius: 15px;
    overflow: hidden;
  }
  .circle {
    width: 80px;
    height: 80px;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    display: flex;
    background: url(../../aimTrainergame.svg);
    border-radius: 50%;
    cursor: pointer;
    z-index: 100000;
    animation-name: circle-animation;
    animation-duration: 0.1s;
    animation-iteration-count: 1;
  }
  @keyframes circle-animation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .restartBtn {
    display: flex;
    height: fit-content;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1.2rem;
    align-items: center;
    justify-content: center;
  }
  .details {
    display: flex;
    gap: 2rem;
    font-weight: bold;
    font-size: 1.3rem;
    align-items: center;
  }
  #time,
  #remaining {
    min-width: 9rem;
    text-align: start;
    font-weight: normal;
  }
  .start-game {
    width: 100%;
    cursor: pointer;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 500px) {
    .details {
      flex-direction: column;
      justify-content: flex-start;
      gap: 0;
      font-size: 1.2rem;
      align-items: flex-start;
    }
  }
</style>
