<script>
    import { enhance } from "$app/forms";
    import axios from "axios";
    import { goto } from "$app/navigation";
    import { isWiredIn, user } from "$lib/UserStore.js";
    import { isModalOpen, toastVisibility, toastText } from "../UtilityStore";

    let stateOfModal = "Sign in";
    async function handleSubmit(event) {
        if (stateOfModal === "Sign in") {
            const formData = new FormData(this);
            axios
                .post(
                    this.action + "login",
                    {
                        email: formData.get("email"),
                        password: formData.get("password"),
                    },
                    { withCredentials: true }
                )
                .then(async (res) => {
                    axios.defaults.headers.common[
                        "Authorization"
                    ] = `Bearer ${res.data.token}`;
                    $isWiredIn = true;
                    const resp = await axios.get("/auth/user", {
                        withCredentials: true,
                    });
                    $user = resp.data.user;
                    $isModalOpen = false;
                    goto("/dashboard");
                })
                .catch((err) => {
                    console.log(err);
                    console.log(err);
                    if (err.response.status === 404) {
                        $toastText = "That account does not exist";
                        $toastVisibility = true;
                    } else if (err.response.status === 400) {
                        $toastText = "Incorrect password";
                        $toastVisibility = true;
                    }
                });
        } else {
            const formData = new FormData(this);
            axios
                .post(this.action + "register", {
                    name: formData.get("username"),
                    email: formData.get("email"),
                    password: formData.get("password"),
                })
                .then(async () => {
                    stateOfModal = "Sign in";
                })
                .catch((err) => {
                    if (err.response.status === 400) {
                        $toastText = "Email already registered, kindly log in";
                        $toastVisibility = true;
                        stateOfModal = "Sign in";
                        goto("/");
                    }
                });
        }
    }
</script>

<div id="modal" style="--display: {$isModalOpen ? 'block' : 'none'};">
    <div class="modal-head">
        <button
            class="log-in-head"
            style="border-bottom: {stateOfModal === 'Sign in'
                ? '3px solid #41AAF5'
                : 'none'}"
            on:click={() => (stateOfModal = "Sign in")}>Sign in</button
        >
        <button
            class="sign-up"
            style="border-bottom: {stateOfModal === 'Sign up'
                ? '3px solid #41AAF5'
                : 'none'}"
            on:click={() => (stateOfModal = "Sign up")}>Sign up</button
        >
    </div>
    <div class="modal-body">
        <div class="log-in-body">
            <form
                method="POST"
                action="https://mindinator.com/api/auth/"
                on:submit|preventDefault={handleSubmit}
                use:enhance
            >
                {#if stateOfModal === "Sign up"}
                    <div class="username-group modal-input-group">
                        <label for="username">Username</label>
                        <input
                            name="username"
                            type="text"
                            placeholder="Enter username here"
                        />
                    </div>
                {/if}
                <div class="email-group modal-input-group">
                    <label for="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter email here"
                    />
                </div>
                <div class="password-group modal-input-group">
                    <label for="password">Password</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter password here"
                    />
                </div>
                <button class="submit-btn">{stateOfModal}</button>
            </form>

            <span class="or-span"> or </span>
            <span class="sign-in-with-container">
                <button
                    class="sign-in-with"
                    on:click={() =>
                        goto("https://mindinator.com/api/auth/google")}
                >
                    <img src="./google.svg" alt="" />
                    <span class="text">{stateOfModal} with Google</span>
                </button>
            </span>
            <span class="legal-notice"
                ><p>
                    By continuing, you agree to our <a href="/privacy">
                        Privacy Policy
                    </a>
                </p>
            </span>
        </div>
    </div>
</div>

<style>
    #modal {
        display: var(--display);
        position: fixed;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        color: black;
        width: min(80%, 40rem);
        margin-top: 2rem;
        z-index: 1000;
        background: linear-gradient(139.42deg, #f56387 0%, #41aaf5 98.64%);
        padding: 1.2rem;
        border-radius: 15px;
    }

    .modal-head,
    .modal-body {
        background: white;
    }

    .modal-head {
        padding: 20px 40px 20px 40px;
        border-radius: 15px 15px 0 0;
    }

    .modal-body {
        border-radius: 0 0 15px 15px;
        display: flex;
    }

    .modal-head {
        width: 100%;
        display: flex;
    }
    .modal-head > button {
        font-size: 1.5rem;
    }

    .log-in-head,
    .sign-up {
        min-width: 50%;
        padding-top: 4%;
        padding-bottom: 1%;
        text-align: center;
    }

    .log-in-body {
        width: 100%;
    }
    .modal-head > button {
        background-color: transparent;
        box-shadow: none;
        border: none;
    }

    button {
        font-weight: 700;
        font-size: 1.2rem;
    }

    /* General styling common to both */

    .modal-input-group {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 1rem;
    }

    .modal-input-group > input {
        background-color: transparent;
        border: none;
        font-size: 1rem;
        border-bottom: 1px solid black;
        padding: 0.5rem 0.5rem 0.5rem 0;
    }

    .modal-input-group > input:focus {
        outline: none;
        border-bottom: 3px solid #2196f3;
        /* border-color: #2196f3; */
    }

    .or-span,
    .sign-in-with,
    .legal-notice {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sign-in-with {
        background-color: transparent;
        box-shadow: none;
        border: none;
        font-weight: 500;
        gap: 1rem;
        border: 1px solid black;
        border-radius: 8px;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 0;
    }

    .sign-in-with-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    /* Sign In part */
    .log-in-body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0.5rem 1.5rem;
        min-width: 100%;
        gap: 1rem;
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0.5rem 1.5rem;
        min-width: 100%;
        gap: 2rem;
    }
    /* Sign Up part */

    .legal-notice a {
        text-decoration: underline;
    }
</style>
