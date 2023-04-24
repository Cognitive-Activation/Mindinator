<script>
    import { onMount } from "svelte";

    function toggleMode() {
        window.document.body.classList.toggle("light");
    }

    let darkMode = true;

    onMount(() => {
        if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            window.document.body.classList.toggle("light");
            darkMode = false;
        }
    });
</script>

<label class="toggle-switch">
    <input
        type="checkbox"
        bind:checked={darkMode}
        on:change={toggleMode}
        class={darkMode ? "input-dark" : "input-light"}
    />
    <span class="slider round" />
</label>

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

    :global(body) {
        transition: background-color 1s;
        transition: color 1s;
        -webkit-transition: background-color 1s;
        -webkit-transition: color 1s;
    }

    .toggle-switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    .toggle-switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url("$lib/images/light-mode.svg");
        background-size: 50%;
        background-repeat: no-repeat;
        background-color: #ed9de1;
        background-position: center right;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    .input-dark + .slider {
        background-image: url("$lib/images/dark-mode.svg");
        background-position: center left;
        background-color: #2196f3;
    }

    .input-dark + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
</style>
