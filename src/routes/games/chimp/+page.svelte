<script>
    import { onMount } from "svelte";
    let w, h;
    let boxArray = [];
    let gameStarted = false;
    let gameLost = false;
    let gameWon = false;
    let currLevel = 1;
    let currRound = 1;

    const startBoxes = 5;
    const lb = {
        x: 10,
        y: 200,
    };

    function generateBox() {
        const x = lb.x + Math.random() * (w - lb.x - 120);
        const y = lb.y + Math.random() * (h - lb.y - 120);
        for (let i = 0; i < boxArray.length; i++) {
            if (
                (x > boxArray[i].x && x < boxArray[i].x + 120) ||
                (x > boxArray[i].x - 120 && x < boxArray[i].x)
            ) {
                if (
                    (y > boxArray[i].y && y < boxArray[i].y + 120) ||
                    (y > boxArray[i].y - 120 && y < boxArray[i].y)
                ) {
                    generateBox();
                    return;
                }
            }
        }
        const box = {
            x: x,
            y: y,
            visible: true
        };
        boxArray.push(box);
        boxArray.length = boxArray.length;
        console.log(boxArray);
    }

    function checkSequence(userInput) {
        gameStarted = true;
        boxArray[userInput - 1].visible = false;
        if (userInput == currRound) {
            console.log("YEAa");
            currRound++;
        } else {
            gameLost = true;
        }

        if (currRound == boxArray.length + 1) {
            gameWon = true;
        }
    }

    function restartGame() {
        currLevel = 1;
        currRound = 1;

        gameStarted = false;
        gameLost = false;
        boxArray = [];

        for (let i = 0; i < startBoxes; i++) {
            generateBox();  
        }
    }

    function levelUpGame() {
        currLevel += 1;
        currRound = 1;

        gameStarted = false;
        gameWon = false;
        boxArray = [];
        for (let i = 0; i < startBoxes + currLevel - 1; i++) {
            generateBox();
        }
    }

    onMount(() => {
        for (let i = 0; i < startBoxes; i++) {
            generateBox();
        }
    });
</script>

<div class="container" bind:clientHeight={h} bind:clientWidth={w}>
    <h1>The Chimp Game!!</h1>
    {#if gameWon}
        <div class="game-won" on:click={() => levelUpGame()}>
            <h1>Round {currLevel} cleared.</h1>
            <h1>Click to proceed to the next round.</h1>
        </div>
    {:else if gameLost}
        <h1>You're shit!</h1>
        <button class="restartButton" on:click={() => restartGame()}
            >Click here to restart</button
        >
    {:else}
        <span class="boxes">
            {#each boxArray as boxNum, index (index)}
                <span
                    class="box"
                    id="box-{index}"
                    style="top:{boxNum.y}px; left: {boxNum.x}px; background-color: {gameStarted
                        ? 'white'
                        : '#f45d48'};
                        visibility: {boxNum.visible ? "visible" : "collapse"}"
                    on:click={() => {
                        checkSequence(index + 1);
                    }}
                >
                    {#if !gameStarted}
                        <span class="box-content">{index + 1}</span>
                    {/if}
                </span>
            {/each}
        </span>
    {/if}
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5rem;
        height: 90vh;
    }

    .box {
        width: min(10%, 120px);
        aspect-ratio: 1;
        border-radius: min(20%, 60px);
        margin: 20px;
        border: 2px solid black;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .box-content {
        font-weight: bold;
        font-size: 200%;
    }
</style>
