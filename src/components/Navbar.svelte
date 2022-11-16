<span class="navbar-container row gap1">
  <span class="name row gap1">
    <span>logo</span>
    <span> Mindinator </span>
  </span>

  <span class="menu-options row  gap1">
    <p>Dashboard</p>

    <p>Blog</p>

    <p>Riddles</p>

    <p style="color: #41aaf5;">Sign in</p>
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
    justify-content: space-around;
    width: 100%;
    max-width: 45rem;
  }
  .menu-options > p {
    cursor: pointer;
  }
</style>
