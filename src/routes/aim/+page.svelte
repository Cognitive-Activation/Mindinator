<script>
    let time;
    let targetFinished = 0;
    const numTargets = 20;
    const target = "./target.png";
    function startGame() {
        gameStarted = true;
        createRandomCircle();
        const beginning = new Date();
        const beginningTime = beginning.getTime();
        const interval = setInterval(() => {
            const current = new Date();
            const currentTime = current.getTime();
            time = currentTime - beginningTime;
        }, 10);
    }

    let divWidth;
    let divHeight;
    let finishTime = 0;
    let avg;
    function finishGame() {
        gameFinished = true;
        finishTime = time;
        avg = time / numTargets;
    }

    let circleSize = 100;
    let top = getRandomNumber(0, divHeight - circleSize);
    let left = getRandomNumber(0, divWidth - circleSize);
    function createRandomCircle() {
        top = getRandomNumber(0, divHeight - circleSize);
        left = getRandomNumber(0, divWidth - circleSize);
    }

    function getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    function restartGame() {
        targetFinished = 0;
        gameFinished = false;
        startGame();
    }

    let gameStarted = false;
    let gameFinished = false;
    $: targetFinished >= numTargets ? finishGame() : console.log('');
</script>

<div class="container">
    <div class="screen">
        <span>
            <p class="heading">Aim Training</p>
        </span>
        {#if gameFinished}
            <div class="board">
                <h1 class="result-text">
                    Time: <span class="primary">{finishTime / 1000} s</span>
                </h1>
                <h1 class="result-text">
                    Average Time: <span class="primary">{avg} ms</span>
                </h1>
                <div class="restartBtn" on:click={restartGame}>
                    Click to Restart
                </div>
            </div>
        {:else if gameStarted}
            <span class="row">
                <span class="details">
                    <!-- <p>Time: <span id="time">00s</span></p> -->
                    <p id="time">Time: {(time / 1000).toFixed(3)} s</p>
                    <p id="remaining">
                        Remaining: {numTargets - targetFinished}
                    </p>
                </span>

                <span class="start">
                    <p href="#" id="start" on:click={restartGame}>New Game</p>
                </span>
            </span>
            <div
                class="board"
                bind:clientWidth={divWidth}
                bind:clientHeight={divHeight}
            >
                <div
                    class="circle"
                    style="background-image: url('{target}'); top: {top}px; left: {left}px;"
                    on:click={() => {
                        createRandomCircle();
                        targetFinished++;
                    }}
                />
            </div>
        {:else}
            <div class="board">
                <div class="start-game" on:click={startGame}>
                    <p class="starttext">Click to start</p>
                </div>
            </div>
        {/if}
    </div>
</div>

<style>
    @import url("https://fonts.googleapis.com/css?family=Khula&display=swap");

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0%;
    }
    .container {
        color: #232323;
        font-family: "Khula", sans-serif;
        height: 100vh;
        background-color: #f8f5f2;
        min-height: 100vh;
        margin: 0;
        text-align: center;
        overflow: hidden;
    }
    .heading {
        font-size: 1.8rem;
        font-weight: bold;
    }
    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 95%;
    }
    .start {
        color: #232323;
        transition: 0.2s all;
        padding: 0.1rem 0.3rem;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #232323;
        text-align: center;
        border-radius: 5px;
        font-size: 1.2rem;
        position: relative;
    }
    .start:hover {
        background-color: #232323;
        color: #f8f5f2;
    }
    h1 {
        line-height: 1.3;
        font-size: 3.5rem;
    }
    .result-text {
        color: #f8f5f2;
        font-size: 1.7rem;
    }
    .screen {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        gap: 1rem;
        transition: margin 0.5s ease-out;
        background: #f8f5f2;
    }
    .primary {
        color: #16d9e3;
    }
    .board {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        max-width: 90rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        max-height: 35rem;
        width: 100%;
        height: 100%;
        position: relative;
        background-color: #232323;
        border-radius: 15px;
        overflow: hidden;
    }
    .circle {
        width: 100px;
        height: 100px;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        border-radius: 50%;
        cursor: pointer;
        animation-name: circle-animation;
        animation-duration: 0.1s;
        animation-iteration-count: 1;
    }
    @keyframes circle-animation {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    .restartBtn {
        display: flex;
        color: #f8f5f2;
        height: fit-content;
        padding: 0.3rem 0.5rem;
        cursor: pointer;
        border-radius: 5px;
        font-size: 1.2rem;
        align-items: center;
        justify-content: center;
    }
    .details {
        display: flex;
        gap: 2rem;
        font-weight: bold;
        font-size: 1.3rem;
        align-items: center;
    }
    #time,
    #remaining {
        font-weight: normal;
    }
    .start-game {
        width: 100%;
        cursor: pointer;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #f8f5f2;
        font-size: 1.5rem;
    }
    @media screen and (max-width: 500px) {
        .details {
            flex-direction: column;
            justify-content: flex-start;
            gap: 0;
            font-size: 1.2rem;
            align-items: flex-start;
        }
    }
</style>
