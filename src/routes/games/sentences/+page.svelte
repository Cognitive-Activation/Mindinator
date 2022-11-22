<script>
    async function getRandomNumber() {
        const res = await fetch(`/tutorial/random-number`);
        const text = await res.text();

        if (res.ok) {
            return text;
        } else {
            throw new Error(text);
        }
    }
    let promise = fetchData();

    function fetchData() {
        promise = getRandomNumber();
    }

    let level = 1;
    let gameStarted = true;
    let gameFinished = false;
</script>

{#if gameFinished}
    <h1>OOPS! you entered that wrong.</h1>
    <h1>Final Score: {level}</h1>
    <span class="restart" on:click={restartGame}>Click here to restart</span>
{:else if gameStarted}
    {#each Array({level}) as _}
        {#await promise}
            <h1>...</h1>
        {:then word}
            <h1>{word}</h1>
        {/await}
    {/each}
{/if}

<style>
</style>
