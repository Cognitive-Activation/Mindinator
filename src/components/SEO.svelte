<script>
    export let title = undefined;
    export let description = undefined;
</script>

<svelte:head>
    {#if title}
        <title>{title}</title>
    {/if}

    {#if description}
        <meta name="description" content={description}>
    {/if}
</svelte:head>
