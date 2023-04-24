<script>
  import { goto } from "$app/navigation";
  let page = "main-page";
  let numLength = 0;
  let timeLimit = 2;
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
    numLength = 0;
    startGame();
  }

  function startGame() {
    page = "play-page";
    getWord();
  }

  async function getWord() {
    const x = await fetch(
      `https://mindinator.com/api/sentence/randomsentence/${numLength + 1}`
    );
    const y = await x.json();
    sentence = y[0] + " ";
    startTime();
  }

  function checkInput() {
    if (
      input.toLowerCase().trim().replaceAll(" ", "") ==
      sentence.trim().toLowerCase().replaceAll(" ", "")
    ) {
      numLength++;
      timeLimit += 0.5;
      prevSentence = sentence;
      page = "break-page";
      clearInterval(interval);
    } else {
      endExpected = sentence;
      page = "end-page";
      sentence = "";
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

<span class="page-container">
  {#if page == "main-page"}
    <div class="main-menu" on:click={startGame}>
      <div class="container">
        <p class="title">Word Retention</p>
        <p class="game-desc">Remember the words that show up on the screen</p>
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
        <span class="input-tag-container normal-tag-color">
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
    <div class="play-area">
      <p class="answer-display">
        <span class="wrong-answer-img" /> Incorrect Answer
      </p>
      <form
        on:submit={startGame}
        class="wrong-answer answer-form sentence-display-page"
      >
        <span class="input-tag-red input-tag-container">
          <span class="display-solution">{input}</span>
        </span>
      </form>
      <span class="score-display">
        <p class="game-desc">
          Your Score: {numLength}
        </p>

        <span class="submit-span">
          <button
            class="button submit-btn"
            autofocus
            type="submit"
            on:click={resetGame}>Restart</button
          >
          <button
            class="submit-btn all-game-btn"
            on:click={() => goto("/games")}>All Games</button
          >
        </span>
      </span>
    </div>
  {:else if page == "break-page"}
    <div class="play-area">
      <p class="answer-display">
        <span class="correct-answer-img" /> Correct Answer
      </p>
      <form
        on:submit={startGame}
        class="correct-answer answer-form sentence-display-page"
      >
        <span class="input-tag-green input-tag-container">
          <span class="display-solution">{input}</span>
        </span>
      </form>
      <span class="score-display">
        <p class="game-desc">
          Your Score: {numLength}
        </p>

        <span class="submit-span">
          <button
            class="button submit-btn"
            type="submit"
            autofocus
            on:click={startGame}>Next</button
          >
        </span>
      </span>
    </div>
  {/if}
</span>

<style>
  .page-container {
    display: flex;
    align-items: center;
    width: 100%;
    text-align: center;
    justify-content: center;
    padding: 0rem 1rem;
  }

  .main-menu {
    display: flex;
    min-height: 100vh;
    width: 100%;
    padding: 1rem;
    justify-content: center;
  }
  form {
    padding: 1rem;
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
  .sentence {
    -webkit-user-select: none;
    user-select: none;
    -ms-user-select: none;
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
    width: 100%;
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
  .display-solution {
    font-size: 1.05rem;
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
  .input-tag-red {
    background-color: rgba(255, 65, 65, 1);
  }
  .input-tag-green {
    background-color: rgba(130, 205, 71, 1);
  }
  .normal-tag-color {
    background: rgba(65, 170, 245, 1);
  }
  .input-tag-container {
    max-width: 20rem;
    width: 100%;
    height: 0.25rem;
    transition: 0.2s all;
    display: flex;
    align-items: flex-start;
    flex-direction: column-reverse;
  }
  .wrong-answer {
    border: 2px solid rgba(255, 65, 65, 1);
  }
  .correct-answer {
    border: 2px solid rgba(130, 205, 71, 1);
  }
  .answer-display {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    gap: 0.5rem;
    justify-content: center;
  }
  .correct-answer-img {
    width: 35px;
    height: 35px;
    background: url($lib/images/correct.svg);
    background-repeat: no-repeat;
    background-size: contain;
  }
  .wrong-answer-img {
    width: 35px;
    height: 35px;
    background: url($lib/images/wrong.svg);
    background-repeat: no-repeat;
    background-size: contain;
  }
  .score-display {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .score-display > span:last-child {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    align-items: center;
  }
  .submit-span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
  }
  .submit-btn {
    margin: auto;
  }
  .all-game-btn {
    background-color: var(--bg-color);
    border: 1px solid var(--text-color);
  }
</style>
