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
        if (chance >= 25) {
            displayWord = y[0];
        } else if (seenSet.length != 0) {
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

{#if page == "main-page"}
    <div class="main-menu" on:click={playGame}>
        <div class="container">
            <h1>Word test</h1>
            <p>Click seen if you have seen the word or else click new</p>
            <p>Click anywhere to start.</p>
        </div>
    </div>
{:else if page == "play-page"}
    <div class="play-area">
        <div class="container">
            <div class="container">
                <p style="font-size: 30px">Score | {score}</p>
                <p style="font-size: 30px">lives | {lives}</p>
            </div>
            <h1 id="word">{displayWord}</h1>
            <div>
                <button class="button" on:click={seenClicked}>Seen</button>
                <button class="button" on:click={newClicked}>New</button>
            </div>
        </div>
    </div>
{:else if page == "end-page"}
    <div class="end-screen">
        <div class="container">
            <h1>Your score is {score}</h1>
            <p on:click={playGame}>Click here to play again</p>
        </div>
    </div>
{/if}

<style>
    :global(body) {
        overflow: hidden;
    }
    * {
        box-sizing: border-box;
    }

    .play-area {
        width: 100%;
        height: 100vh;
        background: #0d3b66;
        display: grid;
        place-items: center;
        font-size: 32px;
        font-family: "Roboto", sans-serif;
        color: #fff;
        overflow: hidden;
    }

    .end-screen,
    .main-menu {
        display: grid;
        width: 100%;
        height: 100vh;
        background: #0d3b66;
        color: #fff;
        font-family: "Roboto", sans-serif;
        text-align: center;
        place-items: center;
    }

    .container {
        max-width: 700px;
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
</style>
