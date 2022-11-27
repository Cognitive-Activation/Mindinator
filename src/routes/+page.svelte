<script>
  import SEO from "../components/SEO.svelte";
  import Transition from "../components/Transition.svelte";
  const words = ["mind", "active", "stimulated"];
  let content = "";
  let first = false;
  let second = false;
  let third = false;
  function writtting() {
    setTimeout(() => {
      first = true;
      third = false;
      second = false;
    }, 0);
    setTimeout(() => {
      second = true;
      first = false;
      third = false;
    }, 4000);
    setTimeout(() => {
      first = false;
      second = false;
      third = true;
    }, 8000);
  }
  writtting();
  setInterval(writtting, 12000);
</script>

<SEO
  title="Brain Games"
  description="Mindinator is your daily dose of brain activation. Work more consciously with an activated mind and excel at all your endeavors"
/>

<Transition>
  <div class="home-container">
    <section class="section section1">
      <span class="home-page-content column">
        <p class="title">Mindinator</p>

        <span class="desc">
          <span>Your pit stop for a healthy</span>
          <span class="dynamic-txt">
            {#if first}
              <p>Mind</p>
            {/if}
            {#if second}
              <p>Active</p>
            {/if}
            {#if third}
              <p>Stimulated</p>
            {/if}
          </span>
        </span>
        <a class="start-button" href="/games">Start</a>
      </span>

      <span class="img-container">
        <span class="blur-span" />
        <img src="./brain-img.png" alt="brainimg" />
      </span>
    </section>

    <section class="section section2 row">
      <span class="img-container">
        <span class="blur-span" />
        <img src="./homepage1.png" alt="brainimg" />
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
    </section>

    <section class="section section3 row">
      <span class="home-page-content column">
        <span>
          <p class="title">Brain Games</p>
        </span>

        <span class="description">
          <p>
            Our games are meant for quick brain activation aimed at improving your work efficiency. 
            These short and fun-to-play games will boost your cognition and set you up for your ventures
          </p>
        </span>
      </span>

      <span class="img-container">
        <span class="blur-span" />
        <img src="./homepage2.png" alt="brainimg" />
      </span>
    </section>

    <section class="section section4 row">
      <span class="img-container">
        <span class="blur-span" />
        <img src="./homepage3.png" alt="brainimg" />
      </span>

      <span class="home-page-content column">
        <span>
          <p class="title">Brain functioning</p>
        </span>

        <span class="description">
          <p>
            Too much monotonous work causes your brain to become sluggish and inefficient.
            Our games are designed to stimulate your brain just enough to boost your efficiency without exhausting your mind.
          </p>
        </span>
      </span>
    </section>
  </div>
</Transition>

<style>
  .home-container{
    width: 100%;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
  }
  .section {
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding:0rem 5rem;
    max-width: 75rem;
    background-color: #010101;
    display: flex;
    padding: 2rem;  
  }
  .desc {
    display: flex;
    font-size: 1.6rem;
    gap: 0.4rem;
  }
  .dynamic-txt {
    color: #f8406e;
    position: relative;
    min-width: none;
    text-align: start;
  }
  .dynamic-txt::before {
    content: "";
    position: absolute;
    width: 100%;
    left: 0%;
    top: 0%;
    border-left: 2px solid #41aaf5;
    height: 100%;
    animation: typing 4s steps(10) infinite;
    background: rgba(8, 8, 8, 255);
  }
  @keyframes typing {
    40%,
    60% {
      left: 100%;
    }
    100% {
      left: 0%;
    }
  }
  @font-face {
    font-family: "RedHat";
    font-weight: 400;
    padding: 0%;
    margin: 0%;
    src: url("fonts/RedHatDisplay-VariableFont_wght.ttf");
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
    border: 2px solid red;
    display: flex;
    border: 100px solid red;
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
  .img-container {
    position: relative;
    width: 100%;
    max-width: 32rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img-container > img {
    width: 100%;
    z-index: 5;
    height: 100%;
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
    /* .home-container {
      padding: 1rem;
      height: fit-content;
      justify-content: flex-start;
      gap: 0;
      flex-direction: column-reverse;
      max-height: none;
    } */
    .section{
      flex-direction: column;
      justify-content: center;
      gap: 3rem;
    }
    .description>p{
      text-align: center;
    }
    .section1,.section3{
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
    .home-page-content {
    }
  }
</style>
