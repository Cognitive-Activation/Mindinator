<script>
    import SEO from "../../components/SEO.svelte";

    let page = "main-page";
    let greenAppeared = false;
    let greenAppearedTime = null;
    let reactionTime = null;
    let round = 0;
    let avgArr = [];
    let avgTime = null;

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
        setTimeout(setGreenColor, Math.floor(Math.random() * 10 + 2) * 1000);
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
            page = "too-soon-page";
        }
    }
</script>

<SEO
    title="Reaction time test"
    description="Check your reaction time by clicking as fast as possible when the screen changes color, this examination evaluates your reflex action"
/>

{#if page == "end-page"}
    <div class="end-screen">
        <div class="container">
            <h1>Reaction Time Test</h1>
            <div class="reaction-time-text">
                Average time is {avgTime.toFixed(0)}ms
            </div>
            <button class="play-again-btn" on:click={resetGame}
                >Play Again</button
            >
        </div>
    </div>
{:else if page == "main-page"}
    <div class="main-menu active" on:click={playGame}>
        <div class="container">
            <h1>Reaction Time Test</h1>
            <p>Click as soon as you see the green color on the screen.</p>
            <p>Click anywhere to start.</p>
        </div>
    </div>
{:else if page == "play-page"}
    <div
        class="clickable-area"
        style="background-color:{greenAppeared ? 'green' : 'red'}"
        on:click={playAreaClicked}
    >
        <div style="color: white;">
            {greenAppeared ? "click now!" : "click when green color appears"}
        </div>
    </div>
{:else if page == "too-soon-page"}
    <div class="resultPage" on:click={playGame}>
        <div class="container">
            <h1>Too soon!</h1>
            <h1>click the page to try again</h1>
        </div>
    </div>
{:else if page == "time-show-page"}
    <div class="resultPage" on:click={playGame}>
        <div class="container">
            <h1>Your time:</h1>
            <h1>{reactionTime}ms</h1>
            <h1>click to keep going!</h1>
        </div>
    </div>
{/if}

<style>
    .clickable-area {
        height: 100vh;
        width: 100%;
        cursor: pointer;
        background: red;
        display: grid;
        place-items: center;
        text-align: center;
        font-size: 32px;
        font-family: "Roboto", sans-serif;
        color: #fff;
        overflow: hidden;
    }

    .end-screen,
    .main-menu {
        display: grid;
        height: 100vh;
        width: 100%;
        top: 0;
        left: 0;
        background: #0d3b66;
        color: #fff;
        font-family: "Roboto", sans-serif;
        text-align: center;
        place-items: center;
        overflow: hidden;
    }

    .main-menu {
        cursor: pointer;
    }

    .container {
        max-width: 700px;
        padding: 0 0px;
        overflow: hidden;
    }

    .container h1 {
        font-size: 70px;
        margin: 8px 0;
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

    .reaction-time-text {
        font-size: 100px;
        font-weight: 900;
    }

    .end-screen .play-again-btn {
        border: none;
        background: #faf0ca;
        font-size: 20px;
        padding: 8px 32px;
        margin-top: 20px;
        text-transform: uppercase;
        font-weight: 900;
        letter-spacing: 4px;
        cursor: pointer;
    }

    .resultPage {
        display: grid;
        height: 100vh;
        width: 100%;
        top: 0;
        left: 0;
        background: #fffdd0;
        color: #000000;
        font-family: "Roboto", sans-serif;
        text-align: center;
        place-items: center;
        overflow: hidden;
    }
</style>
