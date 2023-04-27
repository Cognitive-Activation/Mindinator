<script>
    import { onDestroy } from "svelte";
    import SEO from "$lib/components/SEO.svelte";
    let glowing = new Array(9).fill(false);
    let level = 1;
    const glowTime = 700;
    let gameStarted = false;
    let gameFinished = false;
    let userTurn = false;
    let round = 0;
    const audioFiles = [];
    const timeouts = [];

    for (let i = 0; i < 9; i++) {
        audioFiles.push(new Audio(`$lib/audio/${i + 1}.wav`));
    }
    
    let sequence = [];
    function showSequence() {
        gameStarted = true;
        const temp = Math.floor(Math.random() * 9);
        if (temp == sequence[level - 1]) {
            showSequence();
            return;
        }
        sequence.push(temp);
        makeGlow();
    }

    function makeGlow() {
        setTimeout(() => (userTurn = true), (level + 0.5) * glowTime);
        sequence.forEach((element, id) => {
            timeouts.push(setTimeout(glowColor, (id + 1) * glowTime, element));
        });
    }

    function glowColor(num) {
        glowing[num] = true;
        audioFiles[num].play();
        setTimeout(() => (glowing[num] = false), glowTime / 2);
    }

    function userGlow(num) {
        glowing[num] = true;
        // dispatch("playPause");
        audioFiles[num].play();
        setTimeout(() => (glowing[num] = false), glowTime / 2);
        check(num);
    }

    function check(num) {
        if (userTurn && sequence[round] == num) {
            round++;
        } else if (userTurn) {
            gameFinished = true;
            gameStarted = false;
        }

        if (round == level) {
            level++;
            round = 0;
            userTurn = false;
            showSequence();
        }
    }

    function restartGame() {
        sequence = [];
        level = 1;
        round = 0;
        gameFinished = false;
        gameStarted = true;
        userTurn = false;
        showSequence();
    }

    function clearTimeoutDestroy () {
        timeouts.forEach((ele) => {
            clearTimeout(ele);
        })
    }

    function handleClick() {
        if (gameFinished) {
            restartGame();
        } else {
            showSequence();
        }
    }

    onDestroy(clearTimeoutDestroy);
</script>

<SEO
    title="Sequence Memory"
    description="Stimulation of cognitive function through repetitive retention of an increasing pattern"
/>

<div class="container">
    {#if gameStarted}
        <h1>Level: {level}</h1>
        <h1>{userTurn ? "Your" : "Wait for your"} Turn</h1>
        <span class="game">
            {#each Array(9) as _, index (index)}
                <span
                    class="box {userTurn ? 'bgBlue' : 'bgPink'}"
                    id="box-{index}"
                    class:boxGlow={glowing[index] == true}
                    on:click={() => userGlow(index)}
                />
            {/each}
        </span>
    {:else if gameFinished}
        <div on:click={restartGame} class="container">
            <h1>Game Finished!</h1>
            <h1>Your Final Score: {level - 1}</h1>
            <h1>Click anywhere to try again</h1>
        </div>
    {:else}
        <div on:click={showSequence} class="container">
            <h1>Sequence Memory</h1>
            <p>
                Remember the sequence in which the blocks glow, and repeat them
                when it's your turn
            </p>
            <p>Click here to get started</p>
        </div>
    {/if}
</div>

<style>
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 80vh;
        width: 100%;
        flex-direction: column;
        color: #f45d48;
    }

    .game {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
    }

    .box {
        width: min(20vw, 120px);
        aspect-ratio: 1;
        border-radius: min(20px, 2vw);
        margin: 20px;
        background-color: #f45d48;
        border: 2px solid black;
        transition: background-color 0.4s ease-in-out;
    }

    .bgPink {
        background-color: #f56387;
    }

    .bgBlue {
        background-color: #41aaf5;
    }

    .boxGlow {
        background-color: white;
    }
</style>
