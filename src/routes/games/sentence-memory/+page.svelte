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
getWord();

function resetGame(){
  prevSentence = "";
  timeLimit = 2;
  input = null;
  numLength = 1;
  setPlayScreen();
}

async function getWord() {
    const x = await fetch ('https://mindinator.com/api/word/getsingleword');
    const y = await x.json();
    sentence += y[0]+" ";
  }


function increaseProgress () {
    if(progress === 0) {
        // pp = 100;
        page="input-page";
    }
    progress--;
}

function setPlayScreen(){
  page = "play-page";
  progress = 100;
  interval = setInterval(increaseProgress, timeLimit * 1000 / 100);
}

function checkInput(){
  if(input == sentence.trim()){
    numLength++;
    timeLimit+=0.5;
    prevSentence = sentence;
    getWord();
    page="break-page";
    clearInterval(interval);
  }
  else{
    endExpected = sentence;
    page ="end-page";
    sentence = "";
    getWord();
  }
  
}

</script>

{#if page == "main-page"}
  <div class="main-menu" on:click={setPlayScreen}>
    <div class="container">
      <h1>Word retention</h1>
      <p>Can your remember all the words in the sentence?</p>
      <p>click to play!</p>
    </div>
  </div>

{:else if page == "play-page"}
  <div class="play-area">
    <h1 style="text-align: center;">{sentence}</h1>

    <div class="progress-bar">
      <div class="progress" style="width: {progress}%;" />
    </div>
  </div>


{:else if page == "input-page"}
  <div class="play-area">
    <!-- svelte-ignore a11y-autofocus -->
    <form on:submit={checkInput}>
      <input
      class="input-field"
      autofocus="autofocus"
      bind:value={input}
      onfocus="this.value=''"
    />
    <button class="button" on:click={checkInput}>submit</button>
    </form>
   
  </div>
{:else if page == "end-page"}
  <div class="end-screen">
    <form on:submit={resetGame}>
      <h1 style="color: red;">Your Answer: {input}</h1>

      <h1>Expected Answer: {endExpected}</h1>
  
      <h1>Current Level: {numLength}</h1>
  
      <button autofocus class="button" on:click={resetGame}>click here to play again</button>
  
    
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
      <button autofocus class="button" type="submit" on:click={setPlayScreen} >Next</button>
</form>
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
