<script>
  import SEO from "../../components/SEO.svelte";

  let page = "main-page";
  let score = 0;
  let lives = 3;

  let seenSet = new Set();

  let displayWord = null;

  getWord();

  function getRandomFromSet() {
    let items = Array.from(seenSet);
    return items[Math.floor(Math.random() * items.length)];
  }

  async function getWord() {
    if (lives == 0) page = "end-page";
    const x = await fetch(
      "https://cognitivestimulation.tech/api/word/getsingleword"
    );
    const y = await x.json();
    let chance = Math.random() * 100;

    if (!seenSet.size || chance >= 35) {
      displayWord = y[0];
    } else {
      displayWord = getRandomFromSet();
    }
  }

  function playGame() {
    score = 0;
    lives = 3;
    page = "play-page";
    seenSet = new Set();
  }

  function seenClicked() {
    if (seenSet.has(displayWord)) {
      score += 1;
    } else {
      lives--;
      seenSet.add(displayWord);
    }
    getWord();
  }

  function newClicked() {
    if (!seenSet.has(displayWord)) {
      score += 1;
      seenSet.add(displayWord);
    } else {
      lives--;
    }
    getWord();
  }
</script>

<SEO
  title="Word memory"
  description="Try to remember the words if they are new or repeated, this exercise will stimulate your retentive cognitive functions"
/>

<span class="verbal-container">
  <span class="gradient-span">
    <span class="content">
      {#if page == "main-page"}
        <div class="main-menu" on:click={playGame}>
          <div class="container">
            <h1>Word test</h1>
            <p>Click seen if you have seen the word or else click new</p>
            <p>Click to start.</p>
          </div>
        </div>
      {:else if page == "play-page"}
        <div class="play-area">
          <span class="play-page-container">
            <div class="details">
              <p style="font-size: 25px">
                Score | {score}
              </p>

              <p style="font-size: 25px" class="row">
                {#each Array(lives) as _}
                  ❤️
                {/each}
              </p>
            </div>

            <h1 id="word">{displayWord}</h1>

            <div class="submit-options">
              <button class="btn button" on:click={seenClicked}>Seen</button>
              <button class="btn button" on:click={newClicked}>New</button>
            </div>
          </span>
        </div>
      {:else if page == "end-page"}
        <div class="end-screen" on:click={playGame}>
          <div class="container">
            <h1>Your score is {score}</h1>
            <p>Click to play again</p>
          </div>
        </div>
      {/if}
    </span>
  </span>
</span>

<style>
  .verbal-container {
    display: flex;
    height: 40rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .gradient-span {
    width: 70%;
    height: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    overflow: hidden;
  }
  .content::after {
    content: "";
    position: absolute;
    width: 300%;
    height: 300%;
    background: linear-gradient(0deg, #fa3566, #41aaff);
    display: flex;
    animation-name: gradient-animation;
    animation-duration: 5s;
    animation-iteration-count: infinite;
  }
  @keyframes gradient-animation {
    to {
      transform: rotate(360deg);
    }
  }
  .content {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    box-shadow: #f56387 6;
    z-index: 10;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .submit-options {
    display: flex;
    gap: 3rem;
  }
  .end-screen,
  .main-menu,
  .play-area {
    display: flex;
    width: 99%;
    padding: 1rem;
    height: 98%;
    background: radial-gradient(50% 50% at 50% 50%, #1e1d1d 0%, #010101 100%);
    font-size: 1.3rem;
    border-radius: 15px;
    z-index: 100;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }
  .container > p {
    text-align: center;
  }
  .play-page-container {
    display: flex;
    width: 100%;
    padding: 1rem;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .details {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 1rem;
  }
  .heart-span {
    display: flex;
    background: url("./heart.svg");
    width: 2rem;
    background-color: #f56387;
    height: 2rem;
  }
  .btn {
    width: 6rem;
    height: 2.2rem;
    border: none;
    font-size: 1.1rem;
    outline: none;
    color: #fff;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
  }

  .btn::before {
    position: absolute;
    content: "";
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    left: -2px;
    top: -2px;
    background: linear-gradient(124deg, #41aaff, #f56387);
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    animation: move 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  .btn:hover::before {
    opacity: 1;
  }

  .btn::after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    border-radius: 5px;
    height: 100%;
    background-color: #1e1d1d;
    left: 0;
    top: 0;
  }

  @keyframes move {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
</style>
