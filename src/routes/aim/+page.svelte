<script>
    let time = 0
    let targetFinished = 0
    let interval;

    function startGame () {
        gameStarted = true;
        interval=setInterval(increaseTime,1000);
        createRandomCircle ();
    }

    // board.addEventListener( 'click', ( event ) => {
    //     if ( event.target.classList.contains( 'circle' ) ) {
    //         targetFinished++
    //         event.target.remove()
    //         createRandomCircle()
    //         remainingEl.innerHTML = 20-targetFinished
    //     }
    //     if(targetFinished==20){
    //         finishGame()
    //     }
    // })

    // function startGame() {
    //     createRandomCircle()
    // }

    // const moonLanding = new Date();
    // for(let i = 0; i < 100000000; i++) { }
    // const now = new Date();

    // console.log(now.getMilliseconds() - moonLanding.getMilliseconds());

    function increaseTime() {
        if(targetFinished!=20){
            ++time;
        }
            let current = time;
            if ( current < 10 ) {
                current = `0${ current }`
            }
    }

    let finishTime;
    let avg;
    function finishGame() {
        finishTime = time;
        avg = (time/20);
    }   

    let top = 0
    let left = 0
    let width = 0
    let height = 0;
    let circleSize = 0;
    function createRandomCircle() {
        circleSize = 10;
        width = 100;
        height = 100;
        top = getRandomNumber( 0, width - circleSize )
        left = getRandomNumber( 0, height - circleSize )
    }

    function getRandomNumber( min, max ) {
        return Math.round( Math.random() * ( max - min ) + min )
    }

    let gameStarted = false;
    let gameFinished = false;
</script>
<div class="container">
    <div class="screen">
        <span>
            <p class="heading">Aim Training</p>
        </span>
    {#if gameFinished}
        <h1 class="result-text">Time: <span class="primary" >{ finishTime }s</span></h1>
        <h1 class="result-text">Average Time: <span class="primary" >{ avg }s</span></h1>
        <div class="restartBtn" on:click={restartGame()}>Click to Restart</div>
    {:else if gameStarted}
        <span class="row">
            <span class="details">
                <p>Time: <span id="time">00s</span></p>
                <p>Remaining: <span id="remaining">20</span></p>
            </span>

            <span class="start">
                <p href="#" id="start" on:click={restartGame()}>New Game</p>
            </span>
        </span>
        <div class="board">
            <div class="circle" style="top: {top}; left: {left}; width:{width}; height: {height}" on:click={drawNewCircle()}></div>
        </div>
    {:else}
        <div class="board">
            <div class="start-game" on:click={() => startGame()}>
                <p class="starttext"> Click to start</p>
            </div>
        </div>
    {/if}
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css?family=Khula&display=swap');

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0%;
    }
    .container {
        color: #232323;
        font-family: 'Khula', sans-serif;
        height: 100vh;
        background-color: #f8f5f2;
        min-height: 100vh;
        margin: 0;
        text-align: center;
        overflow: hidden;
    }
    .heading{
        font-size: 1.8rem;
        font-weight: bold;
    }
    a {
    padding: 0%;
    margin: 0%;
    text-decoration: none;
    }
    .row{
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
    .start:hover{
    background-color: #232323;
    color: #f8f5f2;
    }
    h1 {
    line-height: 1.3;
    font-size: 3.5rem;
    }
    .result-text{
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

    .screen.up {
    margin-top: 0vh;
    }

    .time-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    padding: 0;
    }
    .time-list li {
    margin: 10px;
    }
    .time-btn {
    background-color: transparent;
    border: 2px solid #C0C0C0;
    color: #fff;
    cursor: pointer;
    font-family: inherit;
    padding: .5rem 1rem;
    font-size: 1.5rem;
    }
    .time-btn:hover {
    border: 2px solid #16D9E3;
    color: #16D9E3;
    }
    .hidden {
    opacity: 0;
    }
    .primary {
    color: #16D9E3;
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
        display: flex;
        background: url("target.png");
        background-repeat:no-repeat ;
        background-size: cover;
        position: absolute;
        border-radius: 50%;
        cursor: pointer;
        animation-name: circle-animation;
        animation-duration: 0.1s;
        animation-iteration-count: 1;
    }
    @keyframes circle-animation {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    .restartBtn{
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
    .details{
        display: flex;
        gap: 2rem;
        font-weight: bold;
        font-size: 1.3rem;
        align-items: center;
    }
    #time ,#remaining{
        font-weight: normal;
    }
    .start-game{
        width: 100%;
        cursor: pointer;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #f8f5f2;
        font-size: 1.5rem;
    }
    @media screen and (max-width:500px) {
        .details{
            flex-direction: column;
            justify-content: flex-start;
            gap: 0;
            font-size: 1.2rem;
            align-items: flex-start;
        }
    }
</style>
