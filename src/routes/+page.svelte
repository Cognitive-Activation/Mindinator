<span class="home-container row">
  <span class="home-page-content column">
    <p class="title">Mindinator</p>

    <p class="desc">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>

    <p class="start-button">Start</p>
  </span>

  <span>
    <img class="brain-img" src="brain-img.png" alt="">
  </span>
</span>

<style>
  :global(body) {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    /* background-color: #222222; */
    color: white;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(44, 44, 44, 0.78) 0%,
      #2c2c2c 100%
    );
  }
  :global(*) {
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }
  :global(a){
    text-decoration: none;
    color:white;
  }
  :global(a:link(#exclude), a:visited(#exclude) ){
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
    padding:5rem 5rem;
    align-items: center;
    max-height: 40rem;
    justify-content: space-between;
    gap: 1rem;
  }
  .home-page-content {
    max-width: 650px;
    width: 100%;
    height: 25rem;
    justify-content: space-evenly;
    align-items: flex-start;
  }
  .title {
    font-size: 2.5rem;
    font-weight: bold;
  }
  .start-button {
    display: flex;
    height: 2rem;
    background: linear-gradient(
      97.77deg,
      #41aaf5 -5.92%,
      #f56387 49.06%,
      #41aaf5 98%
    );
    align-items: center;
    justify-content: center;
    padding: 1.5rem 2.5rem;
    font-size: 1.5rem;
    font-weight: 200;
    border-radius: 15px;
    cursor: pointer;
    background-size: 300% 100%;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  .start-button:hover {
    background-position: 100% 0;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
</style>
