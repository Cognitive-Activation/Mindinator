<script>
  import SEO from "$lib/components/SEO.svelte";
  import Brain from "$lib/images/brain.svg";
  import Homepage1 from "$lib/images/homepage1.png";
  import Homepage2 from "$lib/images/homepage2.png";
  import Homepage3 from "$lib/images/homepage3.png";
  import plus from "$lib/images/plus.svg";
  import minus from "$lib/images/minus.svg";
  import question from "$lib/images/question.svg";

  const words = ["Healthy Mind", "Active Brain", "Boosted Cognition"];
  let dynamic = "Healthy Mind";
  let currIndex = 0;
  let dirRev = false;
  let animationInterval;
  let darkmode = true;
  let answerToBeShown = -1;

  function showAnswer(n) {
    if (answerToBeShown == n) {
      answerToBeShown = -1;
    } else {
      answerToBeShown = n;
    }
  }

  function changeText() {
    if (!dirRev) {
      dynamic = dynamic.slice(0, dynamic.length - 1);
      if (dynamic.length == 0) {
        dirRev = !dirRev;
        currIndex = (currIndex + 1) % words.length;
      }
    } else {
      dynamic = words[currIndex].slice(0, dynamic.length + 1);
      if (dynamic.length == words[currIndex].length) {
        dirRev = !dirRev;

        clearAnimInterval();
        setTimeout(setAnimInterval, 1000);
      }
    }
  }

  function setAnimInterval() {
    animationInterval = setInterval(changeText, 100);
  }

  function clearAnimInterval() {
    clearInterval(animationInterval);
  }
  setTimeout(setAnimInterval, 1000);
</script>

<SEO
  title="Brain Games"
  description="Mindinator is your daily dose of brain activation. Work more consciously with an activated mind and excel at all your endeavors"
/>

<div class="home-container">
  <section class="section section1">
    <div class="column">
      <span class="row first-page-container" style="width: 100%;">
        <span class="home-page-content column">
          <p class="title">Mindinator</p>

          <span class="desc">
            <span style="white-space: nowrap">Your pit stop for a</span>
            <span class="dynamic-txt">
              {dynamic}
            </span>
            <!-- <span class="white-box" /> -->
          </span>
          <a class="start-button" href="/games">Start</a>
        </span>

        <span class="img-container">
          <span class="blur-span" />
          <img src={Brain} alt="brainimg" class="image0" />
        </span>
      </span>
    </div>
  </section>

  <section id="section" class="section section2">
    <div>
      <span class="img-container image1">
        <!-- <span class="blur-span" /> -->
        <img src={Homepage1} alt="brainimg" />
      </span>

      <span class="home-page-content column">
        <span>
          <p class="title">Brain Stimulation</p>
        </span>

        <span class="description">
          <p>
            Can`t concentrate on the work at hand? Feeling dull and can`t
            complete your assignments? Our carefully curated games are proven to
            increase brain activity and refresh your brain in a short amount of
            time.
          </p>
        </span>
      </span>
    </div>
  </section>

  <section class="section section3 row">
    <div>
      <span class="home-page-content column">
        <span>
          <p class="title">Brain Games</p>
        </span>

        <span class="description">
          <p>
            Our games are meant for quick brain activation aimed at improving
            your work efficiency. These short and fun-to-play games will boost
            your cognition and set you up for your ventures
          </p>
        </span>
      </span>

      <span class="img-container">
        <!-- <span class="blur-span" /> -->
        <img src={Homepage2} alt="brainimg" />
      </span>
    </div>
  </section>

  <section class="section section4 row">
    <div>
      <span class="img-container">
        <!-- <span class="blur-span" /> -->
        <img src={Homepage3} alt="brainimg" />
      </span>

      <span class="home-page-content column">
        <span>
          <p class="title">Brain functioning</p>
        </span>

        <span class="description">
          <p>
            Too much monotonous work causes your brain to become sluggish and
            inefficient. Our games are designed to stimulate your brain just
            enough to boost your efficiency without exhausting your mind.
          </p>
        </span>
      </span>
    </div>
  </section>

  <section class="section section4 row">
    <div class="faq-container">
      <span>
        <span style="display: flex; flex-direction:column; gap:0.5rem;">
          <img src={question} alt="img" style="width: 3rem; margin:auto;" />
          <p>Have questions? We are here to help!</p>
        </span>

        <span class="faq-title">Frequently asked questions</span>
      </span>

      <span>
        <span>
          <span>
            <p>What is brain activation?</p>
            <img
              src={answerToBeShown == 1 ? minus : plus}
              alt="img"
              on:click={() => showAnswer(1)}
            />
          </span>
          <p>
            {answerToBeShown == 1
              ? "Brain activation refers to the increased activity or engagement of specific regions or networks in the brain in response to a given stimulus, task, or experience. When a particular area or network of the brain is activated, it typically results in increased blood flow, oxygen consumption, and metabolic activity in that region. Brain activation can occur in response to a wide variety of stimuli, ranging from sensory input such as visual or auditory information to cognitive tasks such as problem-solving or decision-making to emotional experiences such as pleasure or pain. Our plans have been specifically designed to boost your brain and help you excel at your task."
              : ""}
          </p>
        </span>

        <span>
          <span>
            <p>Why do I need to boost my cognition?</p>
            <img
              src={answerToBeShown == 2 ? minus : plus}
              alt="img"
              on:click={() => showAnswer(2)}
            />
          </span>

          <p>
            {answerToBeShown == 2
              ? "Boosting cognition, which encompasses mental abilities like learning, memory, attention, problem-solving, and decision-making, can offer several benefits. These include improved academic or work performance, maintaining mental sharpness as we age, managing or preventing cognitive deficits related to medical conditions, enhancing the quality of life, and fostering personal growth. To improve cognition, focus on adequate sleep, regular exercise, a healthy diet, mentally stimulating activities, mindfulness, and brain training exercises or cognitive enhancement techniques."
              : ""}
          </p>
        </span>

        <span>
          <span>
            <p>
              What are the benefits of stimulating your brain before any task?
            </p>
            <img
              src={answerToBeShown == 3 ? minus : plus}
              alt="img"
              on:click={() => showAnswer(3)}
            />
          </span>

          <p>
            {answerToBeShown == 3
              ? "Brain stimulation before a task can improve focus, increase creativity, enhance memory retention, boost problem-solving abilities, and reduce stress and anxiety. Methods to stimulate the brain include solving crossword puzzles, listening to music, meditating, and exercising, which can all contribute to better overall task performance."
              : ""}
          </p>
        </span>

        <span>
          <span>
            <p>Is not having an activated brain an issue?</p>
            <img
              src={answerToBeShown == 4 ? minus : plus}
              alt="img"
              on:click={() => showAnswer(4)}
            />
          </span>

          <p>
            {answerToBeShown == 4
              ? "A non-activated brain may hinder learning, negatively impact performance, contribute to negative moods, and potentially lead to cognitive decline or health issues. Engaging and stimulating the brain during learning tasks, performance, and daily activities is crucial for maintaining cognitive abilities and overall well-being."
              : ""}
          </p>
        </span>

        <span>
          <span>
            <p>How can I increase my Brain activity?</p>
            <img
              src={answerToBeShown == 5 ? minus : plus}
              alt="img"
              on:click={() => showAnswer(5)}
            />
          </span>

          <p>
            {answerToBeShown == 5
              ? "To increase brain activity, engage in regular exercise, mental stimulation, and social interaction. Prioritize a healthy diet, adequate sleep, and mindfulness practices. Use the brain training exercises and games available on our website. Remember, boosting brain activity is a long-term process and may not yield immediate results."
              : ""}
          </p>
        </span>
      </span>
    </div>
  </section>
</div>

<style>
  .faq-title {
    font-weight: bold;
    font-size: 3.5rem;
  }
  .faq-container {
    display: flex;
    flex-direction: column;
  }
  .faq-container > span:first-child {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  .faq-container > span:last-child {
    display: flex;
    flex-direction: column;
    max-width: 60rem;
    width: 100%;
  }
  .faq-container > span:last-child > span:not(:last-child) {
    border-bottom: 1.5px solid rgba(124, 124, 124, 1);
  }
  .faq-container > span:last-child > span > span:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1.5rem;
    width: 100%;
  }
  .faq-container > span:last-child > span > p {
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-top: 0.5rem;
    padding-right: 1rem;
    font-size: 15px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.8);
  }
  .section > div {
    height: 89vh;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
  }
  .home-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 89vh;
    position: relative;
  }
  .section {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    height: 89vh;
    max-width: 75rem;
    scroll-snap-align: center;
  }
  .first-page-container {
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
  }
  .img-container {
    width: 100%;
    max-width: 35rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .img-container > img {
    z-index: 5;
    width: 80%;
  }
  .image1 > img {
    width: 65%;
  }
  .image0 {
    width: 60%;
    padding: 2rem;
  }
  .first-page-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .dynamic-txt::after {
    content: " ";
    height: 1.5rem;
    width: 0.7rem;
    display: inline-block;
    background: var(--text-color);
    animation: blinking alternate infinite 0.5s;
  }

  @keyframes blinking {
    0% {
      background-color: transparent;
    }
    100% {
      background-color: var(--text-color);
    }
  }

  .dynamic-txt {
    display: flex;
  }

  .downarrow-span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    cursor: pointer;
    height: 4rem;
  }
  .downarrow {
    display: flex;
    width: 2.5rem;
    border-radius: 50%;
    border: 1px solid var(--text-color);
    background-size: cover;
    height: 2.5em;
    animation: arrow alternate infinite 0.5s ease;
  }
  @keyframes arrow {
    100% {
      margin-top: 1rem;
    }
  }
  .desc {
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 0.4rem;
    font-size: 1.3rem;
  }

  .dynamic-txt {
    color: #f8406e;
    position: relative;
    height: 1.3rem;
  }
  @font-face {
    font-family: "RedHat";
    font-weight: 400;
    padding: 0%;
    margin: 0%;
    src: url("$lib/fonts/RedHatDisplay-VariableFont_wght.ttf");
  }
  .home-page-content {
    max-width: 650px;
    width: 100%;
    align-items: flex-start;
    gap: 2rem;
  }
  .title {
    font-size: 5rem;
    font-weight: bold;
    padding: 0%;
    margin: 0%;
  }
  .start-button {
    display: flex;
    color: white;
    border: none;
    height: 2rem;
    background: linear-gradient(
      97.77deg,
      #2aa1f7 -5.92%,
      #f8406e 49.06%,
      #2aa1f7 98%,
      #f8406e 150%
    );
    align-items: center;
    justify-content: center;
    font-weight: bold;
    padding: 1.5rem 2.5rem;
    font-size: 1.5rem;
    font-weight: 200;
    border-radius: 15px;
    cursor: pointer;
    background-size: 300% 100%;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
  .start-button:hover {
    background-position: 100% 0;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  .blur-span {
    width: 45%;
    display: flex;
    height: 45%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    background: linear-gradient(138.53deg, #f56387 6.31%, #41aaf5 90.61%);
    border: 1px solid #000000;
    filter: blur(85px);
    z-index: 1;
  }
  @media screen and (max-width: 950px) {
    .section1 {
      flex-direction: column;
      display: flex;
    }
    .home-container{
      height: max-content;
    }
    .desc > * {
      text-align: center;
    }
    .first-page-container {
      display: flex;
      flex-direction: column-reverse;
    }
    .section div {
      flex-direction: column;
      justify-content: start;
      gap: 3rem;
    }
    .description > p {
      text-align: center;
    }
    .section3 div {
      flex-direction: column-reverse;
    }
    .home-page-content {
      margin-left: 0%;
      align-items: center;
    }
    .title {
      display: none;
    }
    .desc {
      font-size: 1.15rem;
      text-align: start;
      padding: 1rem;
    }
    .faq-title {
      font-size: 8vw;
    }
  }
</style>
