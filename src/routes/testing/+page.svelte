<script>
    import { enhance } from "$app/forms";
    import { onMount } from "svelte";
    import axios from "axios";
    import { goto } from "$app/navigation";
    /** @type {import('./$types').PageData} */
    export let data;

    /** @type {import('./$types').ActionData} */
    export let form;
    let email = "malurr@rknec.edu";
    let password = "Tekademcpatanahikyukaamnahikarta";
    async function handleSubmit() {
        const { data } = await axios.post(
            "http://localhost:3000/api/auth/login",
            {
                email: email,
                password: password,
            },
            { withCredentials: true }
        );
        console.log(data)
        console.log(data.token)
        // axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
        goto("/");
    }
</script>

<!-- <form method = "POST" action=""> -->
<div>
    <label for="email">Email</label>
    <input bind:value={email} name="email" type="email" id="email" />
</div>
<div>
    <label for="password">Password</label>
    <input bind:value={password} name="password" type="text" id="password" />
</div>
<button on:click={handleSubmit}>Log in</button>
<!-- </form> -->
