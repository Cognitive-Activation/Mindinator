<script>
    import { page } from "$app/stores";
    import HomeNavbar from "./HomeNavbar.svelte";
    import GameNavbar from "./GameNavbar.svelte";
    $: navSelector = selectNav();
    $: selectNav = () => {
        if ($page.url.pathname.startsWith("/games/")) {
            return "game";
        } else {
            return "home";
        }
    }
</script>

{#if navSelector == "home"}
    <HomeNavbar />
{:else if navSelector == "game"}
    <!-- <h1>Noi</h1> -->
    <GameNavbar />
{/if}
