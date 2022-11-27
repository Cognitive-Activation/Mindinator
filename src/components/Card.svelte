<script>
    export let data;
</script>

<span class="card {data.border} column">
    <span class="info column">
        <p class="title">{data.name}</p>
        <p class="description">{data.desc}</p>
    </span>

    <span
        class="image"
        style="background: url({data.img}); background-size: cover; background-repeat: no-repeat;"
    />
</span>

<style>
    .card {
        display: flex;
    }

    :root {
        --red: hsl(0, 78%, 62%);
        --cyan: hsl(180, 62%, 55%);
        --orange: hsl(34, 97%, 64%);
        --blue: hsl(212, 86%, 64%);
    }
    .cyan {
        border-top: 3px solid var(--cyan);
    }

    .red {
        border-top: 3px solid var(--red);
    }

    .blue {
        border-top: 3px solid var(--blue);
    }

    .orange {
        border-top: 3px solid var(--orange);
    }

    .column {
        display: flex;
        flex-direction: column;
    }
    .card {
        width: 85%;
        min-width: 18rem;
        position: relative;
        background-color: #1b1a1a;
        color: #f8f5f2;
        min-height: 20rem;
        max-height: 25rem;
        border-radius: 10px;
        transition: 0.5s all;
        padding: 2rem 1.5rem;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
        flex: 1 1 50px;

        top: 0%;
        transition: 0.2s all ease;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }

    .card:hover {
        top: -10px;
    }
    .title {
        letter-spacing: 0.1rem;
        font-family: fantasy;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: center;
        color: #fffffe;
    }

    .description {
        font-size: 1.1rem;
        color: #f8f5f2;
        margin-left: 1rem;
    }

    .info {
        gap: 1rem;
    }

    .image {
        margin-left: auto;
        display: flex;
        width: 5rem;
        height: 5rem;
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>
