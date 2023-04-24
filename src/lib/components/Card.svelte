<script>
    import gamesData from "$lib/GameData.js";
</script>

{#each gamesData as data}
    <a class="card column" style=" {data.backgroundcolor};" href={data.link}>
        <span class="info column">
            <p class="title">{data.name}</p>
            <p class="description">{data.desc}</p>
        </span>

        <span
            class="image"
            style="background: url({data.img}); background-size: cover; background-repeat: no-repeat; {data.imagestyle}"
        />
    </a>
{/each}

<style>
    .column {
        display: flex;
        flex-direction: column;
    }

    * {
        padding: 0%;
        margin: 0%;
        box-sizing: border-box;
    }
    * {
        flex: 1 1 100px;
    }

    span {
        display: flex;
    }

    .card {
        min-width: 19rem;
        color: #1b1a1a;
        position: relative;
        min-height: 15rem;
        max-height: 20rem;
        border-radius: 10px;
        transition: 0.5s all;
        padding: 2rem 1.5rem;
        justify-content: space-between;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        top: 0%;
        overflow: hidden;
        transition: 0.2s all ease;
        box-shadow: rgba(38, 57, 77, 0.5) 0px 20px 30px -10px;
    }
    .card:hover {
        top: -10px;
    }
    .title {
        letter-spacing: 0.1rem;
        /* font-family: fantasy; */
        font-weight: 500;
        font-size: 1.4rem;
        text-align: center;
    }
    .description {
        font-size: 1.1rem;
        margin-left: 1rem;
    }
    .info {
        gap: 1rem;
    }
    .image {
        margin-left: auto;
        position: absolute;
        display: flex;
        width: 9rem;
        height: 9rem;
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>
