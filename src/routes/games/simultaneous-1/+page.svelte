<script>
  import SEO from "../../../components/SEO.svelte";

  let stage = 1;
  let time = 0;
  let result;
  let dataRecieved = false;
  let promise = Promise;
  let blackInput = "";
  let whiteInput = "";
  let blackOriginal = "";
  let whiteOriginal = "";
  let gameStarted = false;
  let timeOver = false;
  let stagePageRemove = true;
  let expected1;
  let entered1;
  let entered2;
  let x = null;
  let y = null;
  let expected2;
  let firstCorrect = null;
  let secondCorrect = null;

  function displayStagePage() {
    stagePageRemove = false;
    setTimeout(removeStagePage, 800);
  }

  async function removeStagePage() {
    stagePageRemove = true;
    promise = await getSentenses();
  }

  function onSubmit() {
    x = whiteInput;
    y = blackInput;
    let u = whiteOriginal;
    let v = blackOriginal;
    whiteInput = whiteInput.toLowerCase();
    whiteInput = whiteInput.replace(/[\W_]+/g, "");

    blackInput = blackInput.toLowerCase();
    blackInput = blackInput.replace(/[\W_]+/g, "");

    whiteOriginal = whiteOriginal.toLowerCase().replace(/[\W_]+/g, "");
    blackOriginal = blackOriginal.toLowerCase().replace(/[\W_]+/g, "");
    console.log(blackInput, whiteInput, blackOriginal, whiteOriginal);

    if (blackInput === blackOriginal && whiteInput === whiteOriginal) {
      stage++;
      refresh();
      displayStagePage();
    } else {
      expected2 = u;
      entered2 = x;
      expected1 = v;
      entered1 = y;
      if (blackInput == blackOriginal) {
        firstCorrect = true;
      } else {
        firstCorrect = false;
      }
      if (whiteInput == whiteOriginal) {
        secondCorrect = true;
      } else {
        secondCorrect = false;
      }
      result = false;
      gameStarted = false;
    }
  }

  async function clickedtoStart() {
    stage = 1;
    refresh();
    displayStagePage();
  }

  function refresh() {
    firstCorrect = null;
    secondCorrect = null;
    gameStarted = true;
    result = true;
    blackInput = whiteInput = "";
    timeOver = false;
    time = 0;
    dataRecieved = false;
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
      }
    }, 10);
  }

  async function getSentenses() {
    const res = await fetch(
      `https://cognitivestimulation.tech/api/sentence/getsentence${stage + 2}`
    );
    const text = await res.json();
    if (res.ok) {
      console.log(text);
      blackOriginal = text[0];
      whiteOriginal = text[1];
      dataRecieved = true;
      startTime();
      return text;
    } else {
      throw new Error(text);
    }
  }
</script>

<SEO
  title="Simultaneous stimulation Level 1"
  description="Cognitive activation achieved through simultaneous input retention put together in fun to play game with competitive analysis"
/>

<span class="body column">
  <span class="title">
    <p class="title">Simultaneous Stimulation</p>
  </span>

  <form class="container column" on:submit|preventDefault={onSubmit}>
    {#if stagePageRemove == false}
      <span class="game-start-container">
        <p>Stage - {stage}</p>
      </span>
    {/if}

    {#if gameStarted == false}
      <span on:click={clickedtoStart} class="game-start-container">
        <p>Click to Start</p>
      </span>
    {/if}

    {#if result == false}
      <span on:click={clickedtoStart} class="game-start-container column">
        <span class="row board-container">
          <span class="board-subcontainer">
            <span class="board {firstCorrect ? 'green' : 'red'}">
              {#if timeOver == true}
                <span
                  class="input-tag-container {firstCorrect
                    ? 'darkgreen'
                    : 'darkred'}"
                >
                  <p class="black-tag correctFont">{y}</p>
                </span>

                {#if !firstCorrect}
                  <span>
                    <p class="correctFont">
                      Expected answer: {expected1}
                    </p>
                  </span>
                {/if}
              {/if}
            </span>

            <div class={firstCorrect?"correct-answer-img":"wrong-answer-img"} />

          </span>

          <span class="timer">
            <p class="timer-p-tag">
              {(5 - time / 1000).toFixed(2)}
            </p>
          </span>

          <span class="board-subcontainer">
            <span class="board {secondCorrect ? 'green' : 'red'}">
              {#if timeOver == true}
                <span
                  class="input-tag-container {secondCorrect
                    ? 'darkgreen'
                    : 'darkred'}"
                >
                  <p class="white-tag correctFont">{x}</p>
                </span>

                {#if !secondCorrect}
                  <span>
                    <p class="correctFont">
                      Expected answer: {expected2}
                    </p>
                  </span>
                {/if}
              {/if}
            </span>

            <span class={secondCorrect?"correct-answer-img":"wrong-answer-img"} />
          </span>
        </span>

        <span>
          <p class="correctFont">Click to Restart !</p>
        </span>
      </span>
    {/if}

    <span class="row board-container">
      <span class="board black">
        {#if timeOver == false}
          <p class="text black-text">
            {#if dataRecieved == false}
              <p>...</p>
            {:else if timeOver == false}
              {#await promise}
                <p>...</p>
              {:then data}
                <p>{data[0]}</p>
              {:catch error}
                <p>...</p>
              {/await}
            {/if}
          </p>
        {/if}

        {#if timeOver == true}
          <span class="input-tag-container">
            <input
              bind:value={blackInput}
              id="black-tag"
              autocomplete="off"
              autofocus
              type="text"
              required
              class="black-tag"
              placeholder="Type here"
            />
          </span>
        {/if}
      </span>

      <span class="timer">
        <p class="timer-p-tag">
          {(5 - time / 1000).toFixed(2)}
        </p>
      </span>

      <span class="board white">
        {#if timeOver == false}
          <p class="text white-text">
            {#if dataRecieved == false}
              <p>...</p>
            {:else if timeOver == false}
              {#await promise}
                <p>...</p>
              {:then data}
                <p>{data[1]}</p>
              {:catch error}
                <p>...</p>
              {/await}
            {/if}
          </p>
        {/if}

        {#if timeOver == true}
          <span class="input-tag-container">
            <input
              bind:value={whiteInput}
              id="white-tag"
              type="text"
              autocomplete="off"
              required
              class="white-tag"
              placeholder="Type here"
            />
          </span>
        {/if}
      </span>
    </span>

    <span class="submit-span">
      {#if timeOver}
        <button class="submit-btn" type="submit">Submit</button>
      {/if}
    </span>
  </form>
</span>

<style>
  .clickToStart {
    font-size: 1.2rem;
  }
  .msg {
    align-items: center;
    font-size: 1.3rem;
    gap: 0.5rem;
  }
  .title {
    font-size: 1.8rem;
    font-weight: bold;
  }
  .game-start-container {
    background-color: transparent;
    position: absolute;
    color: #f8f5f2;
    font-weight: bold;
    cursor: pointer;
    background-color: #1b1a1a;
    backdrop-filter: blur(5px);
    font-size: 2rem;
    gap: 2rem;
    height: 100%;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  body {
    margin: 0%;
    padding: 0%;
  }
  .body {
    margin: 0%;
    width: 100%;
    gap: 1rem;
    padding: 1.5rem 2rem 2rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
  }
  .row {
    display: flex;
    align-items: center;
  }
  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .container {
    height: 33rem;
    overflow-x: hidden;
    display: flex;
    position: relative;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    width: 100%;
    user-select: none;
  }
  .board-container {
    height: 100%;
    padding: 1rem;
    width: 100%;
    gap: 1rem;
    justify-content: space-between;
  }
  .board {
    width: 100%;
    height: 100%;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    transition: 0.2s all;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  .black {
    background-color: #232323;
    color: #fffffe;
  }
  .white {
    background-color: #fffffe;
    color: #232323;
  }
  .red {
    background: rgba(255, 65, 65, 1);
    gap: 3rem;
  }
  .green {
    background: rgba(130, 205, 71, 1);
    gap: 3rem;
  }
  input {
    border: none;
    height: 1.5rem;
    font-size: 1.05rem;
    width: 100%;
    padding-left: 0.4rem;
    padding-bottom: 0.4rem;
  }
  input:focus {
    outline: none;
  }
  .black-tag {
    background-color: transparent;
    color: white;
  }
  .white-tag {
    background-color: transparent;
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

  .timer {
    padding: 1rem;
    font-size: 2rem;
    text-align: center;
    min-width: 6rem;
    font-weight: bold;
  }
  .text {
    font-size: 1.5rem;
    text-align: center;
  }
  .submit-btn {
    background: rgba(65, 170, 245, 1);
    color: #f8f5f2;
    padding: 0.5rem 1rem;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s all;
  }
  .submit-span {
    height: fit-content;
    height: 2.5rem;
  }
  .submit-btn:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .darkgreen {
    background: rgba(43, 133, 47, 1);
  }
  .darkred {
    background: rgba(177, 0, 0, 1);
  }
  .correctFont {
    font-size: 1.3rem;
    padding-bottom: 0.2rem;
    font-weight: 500;
  }
  .board-subcontainer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  .correct-answer-img {
    width: 50px;
    height: 60px;
    background: url(../../correct.svg);
    background-repeat: no-repeat;
    background-size:contain;
  }
  .wrong-answer-img {
    width: 50px;
    height: 60px;
    background: url(../../wrong.svg);
    background-repeat: no-repeat;
    background-size: contain;
  }
  @media screen and (max-width: 800px) {
    .container {
      height: 45rem;
      overflow: hidden;
    }
    .title {
      font-size: 1.5rem;
    }
    .board-container {
      flex-direction: column;
      width: 100%;
      justify-content: center;
    }
    .board {
      width: 100%;
    }
    .text {
      font-size: 1.2rem;
    }
    .submit-btn {
      margin-bottom: 1rem;
    }
    p {
      margin: 0%;
    }
    input {
      font-size: 0.9rem;
    }
  }
</style>
