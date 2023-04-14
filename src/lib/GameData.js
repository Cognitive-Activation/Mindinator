import Aim from "$lib/images/game-images/aim-trainer.svg"
import Chimp from "$lib/images/game-images/chimp.svg"
import NumberMemory from "$lib/images/game-images/number-memory.svg"
import Peripheral from "$lib/images/game-images/peripheral.svg"
import Reaction from "$lib/images/game-images/reaction.svg"
import Sequence from "$lib/images/game-images/sequence-memory.svg"
import Simultaneous1 from "$lib/images/game-images/simultaneous.svg"
import VerbalMemory from "$lib/images/game-images/verbal-memory.svg"
import WordRetention from "$lib/images/game-images/word-retention.svg"

const gamesData = [
    {
        name: "Simultaneous Stimulation",
        desc: "Activates your brain through 2 simultaneous text inputs",
        img: Simultaneous1,
        border: "cyan",
        link: "/games/simultaneous-1",
        backgroundcolor: "background: rgba(237, 228, 224, 1);",
        imagestyle: "left: 50%; top: 40%;",
    },
    // {
    //   name: "Simultaneous Stimulation level 2",
    //   desc: "Coming Soon...",
    //   // desc: "Activates your brain through 2 simultaneous inputs (text + Audio)",
    //   img: "./SimultaneousStimulationlev2.svg",
    //   border: "red",
    //   // link: "/games/simultaneous-2",
    //   backgroundcolor: "background: rgba(255, 159, 159, 1);",
    //   imagestyle: "left: 5%; top: 40%;",
    // },
    // {
    //   name: "Simultaneous Stimulation level 3",
    //   desc: "Coming Soon...",
    //   // desc: "Activates your brain through 3 simultaneous inputs (2 × text + 1 × Audio)",
    //   img: "./SimultaneousStimulationlev3.svg",
    //   border: "orange",
    //   // link: "/simultaneous-3",
    //   backgroundcolor: "background: rgba(250, 188, 58, 1);",
    //   imagestyle: "left: 33%; top: 30%;",
    // },
    {
        name: "Reaction Test ",
        desc: "Test your reaction time to changing colors",
        img: Reaction,
        border: "blue",
        link: "/games/reaction",
        backgroundcolor: "background: rgba(106, 103, 206, 1);",
        imagestyle: "left: 33%; top: 25%;",
    },
    {
        name: "Reaction test (Peripheral Vision)",
        desc: "Test your reaction time with peripheral vision inputs",
        img: Peripheral,
        border: "cyan",
        link: "/games/peripheral",
        backgroundcolor: "background: rgba(255, 214, 236, 1);",
        imagestyle: "left: 55%; top: 40%;",
    },
    {
        name: "Aim Trainer",
        desc: "Test and improve your hand-eye coordination",
        img: Aim,
        border: "red",
        link: "/games/aim",
        backgroundcolor: "background: rgba(0, 207, 149, 1);",
        imagestyle: "left: 35%; top: 25%;",
    },
    {
        name: "Sequence Memory",
        desc: "Try to remember an increasing sequence",
        img: Sequence,
        border: "orange",
        link: "/games/sequence",
        backgroundcolor: "background: rgba(255, 116, 177, 1);",
        imagestyle: "left: 35%; top: 25%;",
    },
    {
        name: "Number Memory",
        desc: "Coming Soon",
        desc: "The number keeps on increasing; try to remember all of it.",
        img: NumberMemory,
        border: "blue",
        link: "/games/number-memory",
        backgroundcolor: "background: rgba(255, 171, 115, 1);",
        imagestyle: "left: 65%; top: 40%; transform:rotate(-45deg)",
    },
    {
        name: "Word Retention",
        desc: "Coming Soon",
        desc: "Try to remember an increasing number of words",
        img: WordRetention,
        border: "cyan",
        link: "/games/word-retention",
        backgroundcolor: "background: rgba(190, 138, 191, 1);",
        imagestyle: "left: 10%; top: 40%; transform:rotate(25deg)",
    },
    {
        name: "Chimpanzee Test",
        desc: "Coming Soon",
        desc: "Check if you are smarter than a chimpanzee",
        img: Chimp,
        border: "red",
        link: "/games/chimpanzee",
        backgroundcolor: "background: rgba(250, 188, 58, 1);",
        imagestyle: "left: 0%; top: 0%; height:15rem; width:12rem;",
    },
    {
        name: "Verbal Memory",
        desc: "Tell if the shown word is new or repeated",
        img: VerbalMemory,
        border: "orange",
        link: "/games/word",
        backgroundcolor: "background: rgba(65, 170, 245, 1);",
        imagestyle: "left: 30%; top: 40%; width:12rem;",
    },
    // {
    //   name: "Wordle",
    //   desc: "Coming Soon...",
    //   img: "./verbal.svg",
    //   border: "blue",
    //   link: "/wordle",
    //   backgroundcolor: "background: rgba(217, 225, 228, 1);",
    //   imagestyle: "left: 30%; top: 40%; width:12rem;",
    // },
]

export default gamesData

export const gamesSEO = [
    {
        game: "abcd"
    }
]
