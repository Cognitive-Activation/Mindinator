<script>
    let glowing = new Array(9).fill(false);
    let level = 1;
    const glowTime = 1000;
    let gameStarted = false;
    let gameFinished = false;
    let flag = false;
    let round = 0;

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
        setTimeout(() => (flag = true), level * 1000);
        sequence.forEach((element, id) => {
            setTimeout(glowColor, (id + 1) * glowTime, element);
        });
    }

    function glowColor(num) {
        glowing[num] = true;
        setTimeout(() => (glowing[num] = false), glowTime / 2);
    }

    function userGlow(num) {
        glowing[num] = true;
        setTimeout(() => (glowing[num] = false), glowTime / 2);
        check(num);
    }

    function check(num) {
        if (flag && sequence[round] == num) {
            round++;
        } else if (flag) {
            gameFinished = true;
            gameStarted = false;
        }

        if (round == level) {
            level++;
            round = 0;
            flag = false;
            showSequence();
        }
    }

    function restartGame() {
        sequence = [];
        level = 1;
        round = 0;
        gameFinished = false;
        gameStarted = true;
        flag = false;
        showSequence();
    }
</script>

<div class="container">
    {#if gameStarted}
        <h1>Level: {level}</h1>
        <h1>{flag ? "Your" : "Wait for your"} Turn</h1>
        <span class="game">
            {#each Array(9) as _, index (index)}
                <span
                    class="box"
                    id="box-{index}"
                    class:sel-box={glowing[index] == true}
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
        height: 100vh;
        width: 100%;
        overflow: hidden;
        flex-direction: column;
        background: #f8f5f2;
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
        transition: background-color 0.4s;
    }

    .sel-box {
        background-color: #f8f5f2;
    }
</style>
