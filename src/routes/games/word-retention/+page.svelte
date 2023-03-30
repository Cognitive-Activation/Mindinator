<script>
  let page = "main-page";
  let numLength = 1;
  let timeLimit = 2;
  let progress = 100;

  let sentence = "";
  let prevSentence = "";
  let endExpected = "";
  let input = null;
  let interval;

  let time = 0;
  let timeOver = false;

  function resetGame() {
    prevSentence = "";
    timeLimit = 2;
    input = null;
    numLength = 1;
    setPlayScreen();
  }

  function startGame() {
    page = "play-page";
    getWord();
  }

  async function getWord() {
    const x = await fetch("https://mindinator.com/api/word/getsingleword");
    const y = await x.json();
    sentence += y[0] + " ";
    startTime();
  }

  function increaseProgress() {
    if (progress === 0) {
      // pp = 100;
      page = "input-page";
    }
    progress--;
  }

  function setPlayScreen() {
    page = "play-page";
    progress = 100;
    interval = setInterval(increaseProgress, (timeLimit * 1000) / 100);
  }

  function checkInput() {
    if (input == sentence.trim()) {
      numLength++;
      timeLimit += 0.5;
      prevSentence = sentence;
      getWord();
      page = "break-page";
      clearInterval(interval);
    } else {
      endExpected = sentence;
      page = "end-page";
      sentence = "";
      getWord();
    }
  }

  function startTime() {
    const beginning = new Date();
    const beginningTime = beginning.getTime();
    const interval = setInterval(() => {
      const current = new Date();
      const currentTime = current.getTime();
      time = currentTime - beginningTime;

      if (time > 5000) {
        timeOver = true;
        time = 5000;
        clearInterval(interval);
        page = "input-page";
      }
    }, 10);
  }
</script>

{#if page == "main-page"}
  <div class="main-menu" on:click={startGame}>
    <div class="container">
      <p class="title">Word Retention</p>
      <p class="game-desc">Remember the words and that show up on the screen</p>
      <p>Click to play !</p>
    </div>
  </div>
{:else if page == "play-page"}
  <div class="play-area">
    <p class="title">Word Retention</p>

    <span class="timer">
      <p class="timer-p-tag">
        {(5 - time / 1000).toFixed(2)}
      </p>
    </span>
    <span class="sentence-display-page sentence">{sentence}</span>
  </div>
{:else if page == "input-page"}
  <div class="play-area">
    <p class="game-desc">Enter the words you remember</p>
    <form on:submit={checkInput} class="answer-form sentence-display-page">
      <span class="input-tag-container">
        <input
          class="input-field"
          autofocus="autofocus"
          bind:value={input}
          placeholder="Type here"
          onfocus="this.value=''"
        />
      </span>
    </form>
    <span class="submit-span">
      <button class="submit-btn" on:click={checkInput}>submit</button>
    </span>
  </div>
{:else if page == "end-page"}
  <div class="end-screen">
    <form on:submit={resetGame}>
      <h1 style="color: red;">Your Answer: {input}</h1>

      <h1>Expected Answer: {endExpected}</h1>

      <h1>Current Level: {numLength}</h1>

      <button autofocus class="button" on:click={resetGame}
        >click here to play again</button
      >
    </form>
  </div>
{:else if page == "break-page"}
  <form class="break-screen" on:submit={setPlayScreen}>
    <h1>Your Answer: {input}</h1>
    <div class="user-num" />
    <h1 id="expected">Expected Answer: {prevSentence}</h1>
    <div class="actual-num" />
    <h1>Current Level: {numLength}</h1>
    <div class="level" />
    <button autofocus class="button" type="submit" on:click={setPlayScreen}
      >Next</button
    >
  </form>
{/if}

<style>
  .main-menu {
    display: flex;
    min-height: 100vh;
    padding: 1rem;
    justify-content: center;
  }
  .container {
    width: 100%;
    height: 100vh;
    justify-content: space-around;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .game-desc {
    font-size: 1.5rem;
    font-weight: 800;
  }
  .sentence-display-page {
    width: 100%;
    max-width: 570px;
    height: 100%;
    max-height: 404px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    color: var(--bg-color);
    background: var(--text-color);
  }
  .play-area {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 100vh;
  }
  .title {
    font-weight: bolder;
    font-size: 2.5rem;
  }
  .timer-p-tag {
    font-size: 1.5rem;
    font-weight: 800;
  }
  .sentence {
    font-size: 1.5rem;
    font-weight: 800;
  }
  .answer-form {
    background-color: rgba(58, 58, 58, 1);
  }
  input {
    border: none;
    height: 1.5rem;
    font-size: 1.05rem;
    width: 100%;
    max-width: 392px;
    padding-left: 0.4rem;
    background-color: transparent;
    padding-bottom: 0.4rem;
    color: var(--text-color);
  }
  input:focus {
    outline: none;
  }
  .input-tag-container {
    max-width: 20rem;
    width: 100%;
    height: 0.25rem;
    transition: 0.2s all;
    display: flex;
    align-items: flex-start;
    flex-direction: column-reverse;
    background: rgba(65, 170, 245, 1);
  }
</style>
