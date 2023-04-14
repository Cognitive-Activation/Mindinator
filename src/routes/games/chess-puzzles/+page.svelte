<script>
</script>

<div class="board">
    {#each Array(8) as _, index (index)}
        <span class="row">
            {#each Array(8) as _, index (index)}
                <span class="cell">Hello</span>
            {/each}
        </span>
    {/each}
</div>

<style>
    .row {
        display: flex;
    }
</style>
