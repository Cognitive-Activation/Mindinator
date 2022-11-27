<script>
  import { fly } from "svelte/transition";
  let menuSelected = false;
</script>

<span class="navbar-container row gap1">
  <span class="name row gap1">
    <span>logo</span>
    <span>Mindinator </span>
  </span>

  <span class="menu-options row  gap1">

    <p>Dashboard</p>

    <p>Blog</p>
  
    <p>Riddles</p>

    <p style="color: #41aaf5;">Sign in</p>
  </span>
  {#if menuSelected == true}
    <span
      class="mobile-menu-options menu-options row  gap1"
      in:fly={{ delay: 0, duration: 500, x: 50 }}
      out:fly={{ delay: 0, duration: 500, x: 50 }}
    >
      <span class="class1">
        <span class="menu-heading">
          <span>
            <span on:click={() => (menuSelected = true)} class="menu-bars">
              <span />
              <span />
              <span />
            </span>

            <span> Menu </span>
          </span>

          <span class="cancel-btn" on:click={() => (menuSelected = false)}>
            <img src="./cancel.svg" alt="cancel" />
          </span>
        </span>

        <span class="mobile-options">
          <p>Dashboard</p>

          <p>Blog</p>

          <p>Riddles</p>

          <p style="color: #41aaf5;">Sign in</p>
        </span>
      </span>

      <span class="bottom-name"> Mindinator </span>
    </span>

    <span on:click={() => (menuSelected = false)} class="blur-screen" />
  {/if}

  <span on:click={() => (menuSelected = true)} class="menu-bars">
    <span />
    <span />
    <span />
  </span>
</span>

<style>
  .row {
    display: flex;
    align-items: center;
  }
  .column {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .gap1 {
    gap: 1rem;
  }
  .navbar-container {
    padding: 2rem;
    justify-content: space-between;
  }
  .menu-options {
    justify-content: space-between;
    width: 100%;
    font-size: 1.15 rem;
    max-width: 45rem;
  }
  .menu-options > p {
    cursor: pointer;
  }
  .blur-screen {
    width: 100%;
    height: 100%;
    display: flex;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
  }
  .menu-bars {
    display: none;
    height: 1.8rem;
    cursor: pointer;
    width: 1.8rem;
    flex-direction: column;
    justify-content: space-around;
    gap: 0.1rem;
  }
  .menu-bars > span:first-child,
  .menu-bars > span:last-child {
    width: 1rem;
    display: flex;
    height: 0.15rem;
    background-color: white;
  }
  .menu-bars > span:nth-child(2) {
    width: 100%;
    height: 0.15rem;
    background-color: white;
  }
  .menu-bars > span:last-child {
    margin-left: auto;
  }
  .class1 {
    display: flex;
    width: 100%;
    font-size: 1.05rem;
    font-weight: bold;
    gap: 3rem;
    flex-direction: column;
  }
  .menu-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .menu-heading > span:first-child {
    display: flex;
    gap: 1rem;
  }
  .mobile-options {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .mobile-options > p {
    height: 4.5rem;
    display: flex;
    cursor: pointer;
    padding: 1rem;
    transition: 0.5s all;
    align-items: center;
    border-bottom: 1px solid white;
  }
  .mobile-options > p:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
  }
  .cancel-btn {
    display: flex;
    width: 1.8rem;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    height: 1.8rem;
  }
  .cancel-btn > img {
    width: 90%;
    height: 90%;
  }
  .bottom-name {
    font-size: 1.2rem;
    margin-left: auto;
    font-weight: bold;
  }
  @media screen and (max-width: 950px) {
    .menu-options {
      display: none;
    }
    .menu-bars {
      display: flex;
    }
    .mobile-menu-options {
      display: flex;
      position: absolute;
      background: linear-gradient(
        172.21deg,
        rgba(65, 170, 245, 0.7) 0%,
        rgba(245, 99, 135, 0.7) 97.84%
      );
      backdrop-filter: blur(5px);
      height: 100%;
      top: 50%;
      left: 100%;
      max-width: 18rem;
      padding: 1.5rem;
      transform: translate(-100%, -50%);
      z-index: 100;
      flex-direction: column;
    }
  }
</style>
