<script>
  import SEO from "$lib/components/SEO.svelte";
  // import Simultaneous1 from "$lib/images/simultaneous.svg";
  // import Reaction from "$lib/images/ReactionTest.svg";
  // import Peripheral from "$lib/images/ReactionTestVision.svg";
  import Card from "$lib/components/Card.svelte";
  // import "$lib/images";

  // let datas = [
  //   {
  //     name: "Simultaneous Stimulation",
  //     desc: "Activates your brain through 2 simultaneous text inputs",
  //     img: Simultaneous1,
  //     border: "cyan",
  //     link: "/games/simultaneous-1",
  //     backgroundcolor: "background: rgba(237, 228, 224, 1);",
  //     imagestyle: "left: 50%; top: 40%;",
  //   },
  //   // {
  //   //   name: "Simultaneous Stimulation level 2",
  //   //   desc: "Coming Soon...",
  //   //   // desc: "Activates your brain through 2 simultaneous inputs (text + Audio)",
  //   //   img: "./SimultaneousStimulationlev2.svg",
  //   //   border: "red",
  //   //   // link: "/games/simultaneous-2",
  //   //   backgroundcolor: "background: rgba(255, 159, 159, 1);",
  //   //   imagestyle: "left: 5%; top: 40%;",
  //   // },
  //   // {
  //   //   name: "Simultaneous Stimulation level 3",
  //   //   desc: "Coming Soon...",
  //   //   // desc: "Activates your brain through 3 simultaneous inputs (2 × text + 1 × Audio)",
  //   //   img: "./SimultaneousStimulationlev3.svg",
  //   //   border: "orange",
  //   //   // link: "/simultaneous-3",
  //   //   backgroundcolor: "background: rgba(250, 188, 58, 1);",
  //   //   imagestyle: "left: 33%; top: 30%;",
  //   // },
  //   {
  //     name: "Reaction Test ",
  //     desc: "Test your reaction time to changing colors",
  //     img: Reaction,
  //     border: "blue",
  //     link: "/games/reaction",
  //     backgroundcolor: "background: rgba(106, 103, 206, 1);",
  //     imagestyle: "left: 33%; top: 25%;",
  //   },
  //   {
  //     name: "Reaction test (Peripheral Vision)",
  //     desc: "Test your reaction time with peripheral vision inputs",
  //     img: Peripheral,
  //     border: "cyan",
  //     link: "/games/peripheral",
  //     backgroundcolor: "background: rgba(255, 214, 236, 1);",
  //     imagestyle: "left: 55%; top: 40%;",
  //   },
  //   {
  //     name: "Aim Trainer",
  //     desc: "Test and improve your hand-eye coordination",
  //     img: "$lib/images/aimTrainer.svg",
  //     border: "red",
  //     link: "/games/aim",
  //     backgroundcolor: "background: rgba(0, 207, 149, 1);",
  //     imagestyle: "left: 35%; top: 25%;",
  //   },
  //   {
  //     name: "Sequence Memory",
  //     desc: "Try to remember an increasing sequence",
  //     img: "$lib/images/maze.svg",
  //     border: "orange",
  //     link: "/games/sequence",
  //     backgroundcolor: "background: rgba(255, 116, 177, 1);",
  //     imagestyle: "left: 35%; top: 25%;",
  //   },
  //   {
  //     name: "Number Memory",
  //     desc: "Coming Soon",
  //     desc: "The number keeps on increasing; try to remember all of it.",
  //     img: "$lib/images/number.svg",
  //     border: "blue",
  //     link: "/games/number-memory",
  //     backgroundcolor: "background: rgba(255, 171, 115, 1);",
  //     imagestyle: "left: 65%; top: 40%; transform:rotate(-45deg)",
  //   },
  //   {
  //     name: "Word Retention",
  //     desc: "Coming Soon",
  //     desc: "Try to remember an increasing number of words",
  //     img: "$lib/images/wordRetener.svg",
  //     border: "cyan",
  //     link: "/games/word-retention",
  //     backgroundcolor: "background: rgba(190, 138, 191, 1);",
  //     imagestyle: "left: 10%; top: 40%; transform:rotate(25deg)",
  //   },
  //   {
  //     name: "Chimpanzee Test",
  //     desc: "Coming Soon",
  //     desc: "Check if you are smarter than a chimpanzee",
  //     img: "$lib/images/chimp.svg",
  //     border: "red",
  //     link: "/games/chimpanzee",
  //     backgroundcolor: "background: rgba(250, 188, 58, 1);",
  //     imagestyle: "left: 0%; top: 0%; height:15rem; width:12rem;",
  //   },
  //   {
  //     name: "Verbal Memory",
  //     desc: "Tell if the shown word is new or repeated",
  //     img: "$lib/images/verbal.svg",
  //     border: "orange",
  //     link: "/games/word",
  //     backgroundcolor: "background: rgba(65, 170, 245, 1);",
  //     imagestyle: "left: 30%; top: 40%; width:12rem;",
  //   },
  //   // {
  //   //   name: "Wordle",
  //   //   desc: "Coming Soon...",
  //   //   img: "./verbal.svg",
  //   //   border: "blue",
  //   //   link: "/wordle",
  //   //   backgroundcolor: "background: rgba(217, 225, 228, 1);",
  //   //   imagestyle: "left: 30%; top: 40%; width:12rem;",
  //   // },
  // ];
</script>

<SEO
  title="Games"
  description="Choose from a bunch of scientifically proven brain activation games aimed at improving your work efficiency"
/>

<Card />

<span class="body">
  <span class="grid-container">
    <!-- {#each datas as data} -->
    <!-- <a class="card column" style=" {data.backgroundcolor};" href={data.link}>
        <span class="info column">
          <p class="title">{data.name}</p>
          <p class="description">{data.desc}</p>
        </span>

        <span
          class="image"
          style="background: url({data.img}); background-size: cover; background-repeat: no-repeat; {data.imagestyle}"
        />
      </a> -->
    <!-- <Card data /> -->
    <!-- {/each} -->
  </span>
</span>

<style>
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
