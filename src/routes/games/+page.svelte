<script>
  import SEO from "../../components/SEO.svelte";
  import Transition from "../../components/Transition.svelte";
  let datas = [
    {
      name: "Simultaneous Stimulation",
      desc: "Activates your brain through 2 simultaneous text inputs",
      img: "./SimultaneousStimulation.svg",
      border: "cyan",
      link: "/games/simultaneous-1",
    },
    {
      name: "Simultaneous Stimulation level 2",
      desc: "Coming Soon...",
      // desc: "Activates your brain through 2 simultaneous inputs (text + Audio)",
      img: "./SimultaneousStimulationlev2.svg",
      border: "red",
      // link: "/games/simultaneous-2",
    },
    {
      name: "Simultaneous Stimulation level 3",
      desc: "Coming Soon...",
      // desc: "Activates your brain through 3 simultaneous inputs (2 × text + 1 × Audio)",
      img: "./SimultaneousStimulationlev3.svg",
      border: "orange",
      // link: "/simultaneous-3",
    },
    {
      name: "Reaction Test ",
      desc: "Test your reaction time to changing colors",
      img: "./ReactionTest.svg",
      border: "blue",
      link: "/games/reaction",
    },
    {
      name: "Reaction test (Peripheral Vision)",
      desc: "Test your reaction time with peripheral vision inputs",
      img: "ReactionTestVision.svg",
      border: "cyan",
      link: "/games/peripheral",
    },
    {
      name: "Aim Trainer",
      desc: "Test and improve your hand-eye coordination",
      img: "./aimTrainer.svg",
      border: "red",
      link: "/games/aim",
    },
    {
      name: "Sequence Memory",
      desc: "Try to remember an increasing sequence",
      img: "./maze.svg",
      border: "orange",
      link: "/games/sequence",
    },
    {
      name: "Number Memory",
      desc: "Coming Soon",
      // desc: "The number keeps on increasing; try to remember all of it.",
      img: "./number.svg",
      border: "blue",
      link: "/games/number",
    },
    {
      name: "Word Retention",
      desc: "Coming Soon",
      // desc: "Try to remember an increasing number of words",
      img: "./wordRetener.svg",
      border: "cyan",
      // link: "/games/word",
    },
    {
      name: "Chimpanzee Test",
      desc: "Coming Soon",
      // desc: "Check if you are smarter than a chimpanzee",
      img: "./chimp.svg",
      border: "red",
      // link: "/chimpanzee",
    },
    {
      name: "Verbal Memory",
      desc: "Tell if the shown word is new or repeated",
      img: "./verbal.svg",
      border: "orange",
      link: "/games/word",
    },
    {
      name: "Wordle",
      desc: "Coming Soon...",
      img: "./verbal.svg",
      border: "blue",
      link: "/wordle",
    },
  ];
</script>

<SEO
  title="Games"
  description="Choose from a bunch of scientifically proven brain activation games aimed at improving your work efficiency"
/>

<Transition>
  <span class="body">
    <span class="grid-container">
      {#each datas as data}
        <span>
          <a class="card {data.border} column" href={data.link}>
            <span class="info column">
              <p class="title">{data.name}</p>
              <p class="description">{data.desc}</p>
            </span>

            <span
              class="image"
              style="background: url({data.img}); background-size: cover; background-repeat: no-repeat;"
            />
          </a>
        </span>
      {/each}
    </span>
  </span>
</Transition>

<style>
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

  .body {
    padding: 0;
    margin: 0%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  * {
    padding: 0%;
    margin: 0%;
    box-sizing: border-box;
  }

  .grid-container {
    max-width: 90%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    gap: 3rem;
    row-gap: 2.5rem;
    justify-items: center;
    padding: 1rem;
    grid-template-columns: repeat(4, 1fr);
    height: 40rem;
    border-radius: 10px;
  }
  .grid-container > * {
    flex: 1 1 100px;
  }

  .grid-container > span {
    display: flex;
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
