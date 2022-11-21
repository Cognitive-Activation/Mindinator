<script>
    import { onMount } from 'svelte';
    import { fly, slide } from 'svelte/transition';
    import { quintOut } from 'svelte/easing'
    export let refresh = ``;
</script>

{#key refresh}
    <div in:fly={{ delay: 100, duration: 2000, x: -5000, }} out:fly={{ delay: 200, duration: 1000,  x: 5000, }}>
        <slot />
    </div>

    <!-- <div in:slide={{ duration: 2000 }} out:slide={{ duration: 1000,  easing: quintOut }}>
        <slot />
    </div> -->
{/key}