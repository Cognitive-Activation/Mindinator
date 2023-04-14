<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  let page = "main-page";
  let numLength = 1;
  let displayNum = null;

  let timeLimit = 2;
  let progress = 100;

  let input = null;

  function playGame() {
    timeLimit = 2;
    input = 0;
    numLength = 1;
    setPlayScreen();
  }

  function generate(n) {
    var add = 1,
      max = 12 - add;
    if (n > max) {
      return generate(max) + generate(n - max);
    }
    max = Math.pow(10, n + add);
    var min = max / 10; // Math.pow(10, n) basically
    var number = Math.floor(Math.random() * (max - min + 1)) + min;
    return ("" + number).substring(add);
  }

  function increaseProgress() {
    if (progress === 0) {
      // pp = 100;
      page = "input-page";
    }
    progress--;
  }

  setInterval(increaseProgress, (timeLimit * 1000) / 100);

  function setPlayScreen() {
    page = "play-page";
    progress = 100;
    displayNum = generate(numLength);
  }

  function checkInput() {
    if (input == displayNum) {
      numLength++;
      timeLimit++;
      page = "break-page";
    } else {
      page = "end-page";
    }
  }
</script>

{#if page == "main-page"}
  <div class="main-menu" on:click={playGame}>
    <div class="container">
      <h1>Number memory</h1>
      <p>Average person can remember 7 numbers at once, can you?</p>
      <p>click to play!</p>
    </div>
  </div>
{:else if page == "play-page"}
  <div class="play-area">
    <h1>{displayNum}</h1>

    <div class="progress-bar">
      <div class="progress" style="width: {progress}%;" />
    </div>
  </div>
{:else if page == "input-page"}
  <div class="play-area">
    <!-- svelte-ignore a11y-autofocus -->
    <form on:submit={checkInput}>
      <input
        type="number"
        class="input-field"
        autofocus="autofocus"
        bind:value={input}
        onfocus="this.value=''"
      />
      <button class="button" type="submit" on:click={checkInput}>submit</button>
    </form>
  </div>
{:else if page == "end-page"}
  <div class="end-screen">
    <h1 style="color: red;">Your Answer: {input}</h1>

    <h1>Expected Answer: {displayNum}</h1>

    <h1>Current Level: {numLength}</h1>

    <p on:click={playGame}>click here to play again</p>
  </div>
{:else if page == "break-page"}
  <div class="break-screen">
    <form on:submit={setPlayScreen}>
      <h1>Your Answer: {input}</h1>
      <div class="user-num" />
      <h1>Expected Answer: {displayNum}</h1>
      <div class="actual-num" />
      <h1>Current Level: {numLength}</h1>
      <div class="level" />
      <button class="button" autofocus on:click={setPlayScreen}>Next</button>
    </form>
  </div>
{/if}

<style>
  * {
    box-sizing: border-box;
  }

  .play-area {
    height: 100vh;
    width: 100%;
    background: #0d3b66;
    display: grid;
    place-items: center;
    font-size: 32px;
    font-family: "Roboto", sans-serif;
    color: #fff;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    /* grid-auto-rows: 100px; */
  }

  .end-screen,
  .main-menu {
    display: grid;
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background: #0d3b66;
    color: #fff;
    font-family: "Roboto", sans-serif;
    text-align: center;
    place-items: center;
  }

  .container {
    padding: 0 32px;
  }

  .main-menu h1 {
    font-size: 70px;
    margin: 8px 0;
  }

  .container p {
    font-size: 20px;
    line-height: 2;
    font-weight: 800;
    margin: 0;
  }

  .end-screen h1 {
    font-size: 30px;
  }

  .button {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
  }

  .button:hover {
    background-color: #188d20;
  }

  .progress-bar {
    width: 10%;
    height: 10px;
    background-color: white;
    border-radius: 5px;
    overflow: hidden;
  }

  .progress {
    width: 100%;
    height: 100%;
    background-color: tomato;
  }
  .break-screen,
  .user-num,
  .actual-num,
  .level {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .input-field {
    width: 30%;
    border: 0;
    border-bottom: 2px solid gray;
    outline: 0;
    font-size: 4rem;
    color: white;
    padding: 7px 0;
    background: transparent;
    text-align: center;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
</style>
