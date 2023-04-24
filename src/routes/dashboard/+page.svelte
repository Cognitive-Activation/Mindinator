<script>
    import { user, isWiredIn } from "$lib/UserStore.js";
    import { goto } from "$app/navigation";
    import { enhance } from "$app/forms";
    import axios from "axios";

    async function handleLogout() {
        axios.defaults.headers.common["Authorization"] = "";
        axios
            .post(this.action, {},{
                withCredentials : true
            })
            .then(() => {
                $isWiredIn = false;
                $user = {};
                goto("/");
            })
            .catch((err) => {
                console.log(err);
            });
    }
</script>

<div class="container">
    <h1>Hello {$user.name ? $user.name : "kind stranger"}</h1>

    <h1>Dashboard coming soon</h1>

    {#if $isWiredIn}
        <form
            action="http://localhost:3000/api/auth/logout"
            method="POST"
            on:submit|preventDefault={handleLogout}
            use:enhance
        >
            <button class="submit-btn">Logout</button>
        </form>
    {/if}
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }
</style>
