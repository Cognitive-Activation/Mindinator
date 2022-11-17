<script>
    import SEO from "../../components/SEO.svelte";
    let glowingPink = new Array(9).fill(false);
    let glowingBlue = new Array(9).fill(false);
    let level = 1;
    const glowTime = 700;
    let gameStarted = false;
    let gameFinished = false;
    let userTurn = false;
    let round = 0;
    const audioFiles = [];
    for (let i = 0; i < 9; i++) {
        audioFiles.push(new Audio(`/audio/${i+1}.wav`));
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
            setTimeout(glowColor, (id + 1) * glowTime, element);
        });
    }

    function glowColor(num) {
        glowingBlue[num] = true;
        audioFiles[num].play();
        setTimeout(() => (glowingBlue[num] = false), glowTime / 2);
    }

    function userGlow(num) {
        glowingPink[num] = true;
        // dispatch("playPause");
        audioFiles[num].play();
        setTimeout(() => (glowingPink[num] = false), glowTime / 2);
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
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <span
                    class="box {userTurn ? 'bgBlue' : 'bgPink'}"
                    id="box-{index}"
                    class:boxBlue={glowingBlue[index] == true}
                    class:boxPink={glowingPink[index] == true}
                    on:click={() => userGlow(index)}
                />
            {/each}
        </span>
    {:else if gameFinished}
        <h1>Game Finished!</h1>
        <h1>Your Final Score: {level}</h1>
        <h1 on:click={restartGame}>Click here to try again</h1>
    {:else}
        <h1>Sequence Memory</h1>
        <p>
            Remember the sequence in which the blocks glow, and repeat them when
            it's your turn
        </p>
        <p on:click={showSequence}>Click here to get started</p>
    {/if}
</div>

<style>
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
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
        width: 120px;
        height: 120px;
        border-radius: 20px;
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

    .boxBlue {
        background-color: #41aaf5;
    }

    .boxPink {
        background-color: #f56387;
    }
</style>
