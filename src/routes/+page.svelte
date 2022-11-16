<span class="home-container row">
  <span class="home-page-content column">
    <p class="title">Mindinator</p>

    <p class="desc">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>

    <a class="start-button" href="/games">Start</a>
  </span>

  <span class="img-container">
    <span class="blur-span">
    </span>
    <img class="brain-img" src="brain-img.png" alt="" />
  </span>
</span>

<style>
  @font-face{
    font-family: 'RedHat';
    font-weight: 400;
    padding: 0%;
    margin: 0%;
    src: url('fonts/RedHatDisplay-VariableFont_wght.ttf');
  }
  :global(body) {
    display: flex;
    font-family:'RedHat';
    flex-direction: column;
    min-height: 100vh;
    /* background-color: #222222; */
    color: white;
    background: radial-gradient(50% 50% at 50% 50%, #1e1d1d 0%, #010101 100%);
  }
  :global(*) {
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }
  :global(a) {
    text-decoration: none;
    color: white;
  }
  :global(a:link(#exclude), a:visited(#exclude)) {
    text-decoration: none;
    color: blue;
  }
  :global(.row) {
    display: flex;
    align-items: center;
  }
  :global(.column) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .home-container {
    padding: 5rem 6rem;
    align-items: center;
    max-height: 40rem;
    justify-content: space-between;
    gap: 1rem;
  }
  .home-page-content {
    max-width: 650px;
    width: 100%;
    height: 20rem;
    margin-left: 2rem;
    justify-content: space-evenly;
    align-items: flex-start;
  }
  .title {
    font-size: 5rem;
    font-weight: bold;
    padding: 0%;
    margin: 0%;
  }
  .start-button {
    display: flex;
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
  .img-container{
    position: relative;
  }
  .blur-span{
    width: 50%;
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
    background: linear-gradient(138.53deg, #F56387 6.31%, #41AAF5 90.61%);
    border: 1px solid #000000;
    filter: blur(85px);
    z-index: -10;
  }
</style>
