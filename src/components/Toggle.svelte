<script>
    import { onMount } from "svelte";

    function toggleMode() {
        window.document.body.classList.toggle("light");
    }
    
    onMount(() => {
        if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            window.document.body.classList.toggle("light");
        }
    });
</script>

<button on:click={toggleMode}>Toggle</button>

<style>
    :root {
        --bg-color: #1b1b1b;
        --text-color: #ffffff;
    }

    :global(body.light) {
        --bg-color: #ffffff;
        --text-color: #1b1b1b;
    }

    :global(body) {
        background: var(--bg-color);
        color: var(--text-color);
    }

    button {
        background-color: var(--bg-color);
        color: var(--text-color);
        border: none;
        cursor: pointer;
    }

    :global(*) {
        transition: background-color 0.3s;
        transition: color 0.3s;
    }
</style>
