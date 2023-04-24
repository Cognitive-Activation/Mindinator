<script lang="ts">
    import { fly } from "svelte/transition";

    import { toastVisibility, toastText } from "../UtilityStore.js";

    $: if ($toastVisibility) {
        setTimeout(() => {
            $toastVisibility = false;
        }, 2500);
    }
</script>

{#if $toastVisibility}
    <div
        class="container"
        in:fly={{ y: -100, duration: 500 }}
        out:fly={{ y: -100, duration: 500 }}
    >
        <article>
            <div class="text">{$toastText}</div>
        </article>
    </div>
{/if}

<style>
    .container {
        display: flex;
        align-items: center;
        position: absolute;
        top: 40;
        z-index: 50;
        width: 100vw;
    }
    article {
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 0.2rem;
        margin: 0 auto 0.5rem auto;
        width: 20rem;
        background: #e97777;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .text {
        margin-left: 1rem;
    }
</style>
