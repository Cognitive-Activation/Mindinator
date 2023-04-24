<script>
    import { fly } from "svelte/transition";
    import Toggle from "./Toggle.svelte";
    import Cancel from "$lib/images/cancel.svg";
    import { isModalOpen } from "$lib/UtilityStore.js";
    import { user, isWiredIn } from "$lib/UserStore";
    import { goto } from "$app/navigation";

    let menuSelected = false;

    function openModal() {
        $isModalOpen = true;
    }
</script>

<span class="navbar-container row gap1">
    <span class="name row gap1">
        <span class="logo" />
        <span>
            <a style="color:var(--text-color)" href="/">Mindinator</a>
        </span>
    </span>

    <span class="menu-options row gap1">
        <Toggle />

        <p on:click={() => goto("/dashboard")}>Dashboard</p>

        <p>Blog</p>

        <p>Riddles</p>

        {#if !$isWiredIn}
            <button on:click={openModal} class="submit-btn">Sign In</button>
        {:else}
            <p>{$user.name}</p>
        {/if}
    </span>
    {#if menuSelected == true}
        <span
            class="mobile-menu-options menu-options row gap1"
            in:fly={{ delay: 0, duration: 500, x: 50 }}
            out:fly={{ delay: 0, duration: 500, x: 50 }}
        >
            <span class="class1">
                <span class="menu-heading">
                    <span>
                        <span
                            on:click={() => (menuSelected = true)}
                            class="menu-bars"
                        >
                            <span />
                            <span />
                            <span />
                        </span>

                        <span> Menu </span>
                    </span>

                    <span
                        class="cancel-btn"
                        on:click={() => (menuSelected = false)}
                    >
                        <img src={Cancel} alt="cancel" />
                    </span>
                </span>

                <span class="mobile-options">
                    <p>Dashboard</p>

                    <p>Blog</p>

                    <p>Riddles</p>

                    <!-- <p style="color: #41aaf5;">Sign in</p> -->
                </span>
            </span>

            <span class="bottom-name"> Mindinator </span>
        </span>

        <span on:click={() => (menuSelected = false)} class="blur-screen" />
    {/if}

    <span on:click={() => (menuSelected = true)} class="menu-bars">
        <span />
        <span />
        <span />
    </span>
</span>

<style>
    /* Google sign in button CSS */
    .google-button {
        all: unset;
        margin: auto;
        width: fit-content;
        height: 52px;
        background-color: #4285f4;
        border-radius: 2px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
        transition: all 300ms ease-in-out;
        display: flex;
        justify-content: space-between;
    }
    .google-button .google-icon-wrapper {
        margin: 1px;
        width: 50px;
        height: 50px;
        border-radius: 1px;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .google-button .google-button-text {
        display: flex;
        color: #ffffff;
        font-size: 16px;
        letter-spacing: 0.2px;
        font-family: "Roboto";
        margin-left: 1em;
        margin-right: 1em;
        align-items: center;
    }
    .google-button:hover {
        box-shadow: 0 0 3px 3px rgba(66, 133, 244, 0.3);
        cursor: pointer;
    }
    .google-button:active {
        background: #3367d6;
    }

    /* End of Google Sign in button CSS */
    .logo {
        background: url("/logo.svg");
        display: flex;
        position: relative;
        width: 2rem;
        height: 2rem;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .row {
        display: flex;
        align-items: center;
    }
    .column {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .gap1 {
        gap: 1rem;
    }
    .navbar-container {
        padding: 1.2rem 2rem;
        align-items: center;
        font-size: 1.2rem;
        justify-content: space-between;
    }
    .menu-options {
        justify-content: space-between;
        width: 100%;
        font-size: 1.15 rem;
        max-width: 45rem;
    }
    .menu-options > p {
        cursor: pointer;
    }
    .blur-screen {
        width: 100%;
        height: 100%;
        display: flex;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(5px);
    }
    .menu-bars {
        display: none;
        height: 1.8rem;
        cursor: pointer;
        width: 1.8rem;
        flex-direction: column;
        justify-content: space-around;
        gap: 0.1rem;
    }
    .menu-bars > span {
        background-color: var(--text-color);
    }
    .menu-bars > span:first-child,
    .menu-bars > span:last-child {
        width: 1rem;
        display: flex;
        height: 0.15rem;
    }
    .menu-bars > span:nth-child(2) {
        width: 100%;
        height: 0.15rem;
    }
    .menu-bars > span:last-child {
        margin-left: auto;
    }
    .class1 {
        display: flex;
        width: 100%;
        font-size: 1.05rem;
        font-weight: bold;
        gap: 3rem;
        flex-direction: column;
    }
    .menu-heading {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .menu-heading > span:first-child {
        display: flex;
        gap: 1rem;
    }
    .mobile-options {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .mobile-options > p {
        height: 4.5rem;
        display: flex;
        cursor: pointer;
        padding: 1rem;
        transition: 0.5s all;
        align-items: center;
        border-bottom: 1px solid white;
    }
    .mobile-options > p:hover {
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
    }
    .cancel-btn {
        display: flex;
        width: 1.8rem;
        align-items: center;
        cursor: pointer;
        justify-content: center;
        height: 1.8rem;
    }
    .cancel-btn > img {
        width: 90%;
        height: 90%;
    }
    .bottom-name {
        font-size: 1.2rem;
        margin-left: auto;
        font-weight: bold;
    }
    @media screen and (max-width: 950px) {
        .menu-options {
            display: none;
        }
        .menu-bars {
            display: flex;
        }
        .mobile-menu-options {
            display: flex;
            position: absolute;
            background: linear-gradient(
                172.21deg,
                rgba(65, 170, 245, 0.7) 0%,
                rgba(245, 99, 135, 0.7) 97.84%
            );
            backdrop-filter: blur(5px);
            height: 100%;
            top: 50%;
            left: 100%;
            max-width: 18rem;
            padding: 1.5rem;
            transform: translate(-100%, -50%);
            z-index: 100;
            flex-direction: column;
        }
    }
</style>
