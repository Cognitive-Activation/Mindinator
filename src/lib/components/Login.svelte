<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    let stateOfModal = "log-in";
    export let isOpenModal;
    
    function closeModal() {
        isOpenModal = false;
        dispatch("closeModal", { isOpenModal });
    }
</script>

<div
    id="background"
    style="--display: {isOpenModal ? 'block' : 'none'};"
    on:click={closeModal}
/>

<div id="modal" style="--display: {isOpenModal ? 'block' : 'none'};">
    <div class="modal-head">
        <button
            class="log-in"
            style="border-bottom: {stateOfModal === 'log-in'
                ? '3px solid #41AAF5'
                : 'none'}"
            on:click={() => (stateOfModal = "log-in")}>Log in</button
        >
        <button
            class="sign-up"
            style="border-bottom: {stateOfModal === 'sign-up'
                ? '3px solid #41AAF5'
                : 'none'}"
            on:click={() => (stateOfModal = "sign-up")}>Sign Up</button
        >
    </div>
    <div class="modal-body">
        {#if stateOfModal === "log-in"}
            <h1>Login content</h1>
        {:else}
            <h1>Sign up content</h1>
        {/if}
    </div>
</div>

<style>
    :global(body.modal-open) {
        overflow: hidden;
    }

    #background {
        display: var(--display);
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(25, 25, 25, 0.8);
    }

    #modal {
        display: var(--display);
        position: fixed;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        color: black;
        width: min(80%, 50rem);
        margin-top: 2rem;
        z-index: 1000;
    }
    #modal > * {
        padding: 20px;
    }

    .modal-head {
        width: 100%;
        display: flex;
    }
    .modal-head > button {
        font-weight: bolder;
        font-size: 1.5rem;
    }

    .log-in,
    .sign-up {
        min-width: 50%;
        padding-top: 4%;
        padding-bottom: 1%;
        text-align: center;
    }

    .modal-body {
        margin: 5%;
        width: 90%;
        display: flex;
        gap: 2rem;
    }

    button {
        background-color: transparent;  
        box-shadow: none;
        border: none;
    }
</style>

