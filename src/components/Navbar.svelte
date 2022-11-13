<script>
    const menuSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                  className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>`;

    const cancel = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      `;

    let menuSelected = false;

    function menuClicked() {
        menuSelected = !menuSelected;
    }
</script>

<span class=" body body-filter column">
    <!-- navbar -->
    <span class="navbar-container row">
        <span class="row">
            <p>logo</p>
        </span>

        <span>
            <p class="title">MINDINATOR</p>
        </span>

        <span
            on:click={menuClicked}
            class=" hamburger-menu row"
            style=" background: url({menuSelected == true
                ? './cancel.svg'
                : './menu.svg'});
            background-repeat: no-repeat;
            background-size: cover;"
        />

        <span
            class="menu-options row {menuSelected === true
                ? 'menu-selected'
                : 'menu-unselected'}"
        >
            <p>Dashboard</p>

            <p>Blogs</p>

            <p>Riddles</p>

            <p>Sign In</p>
        </span>
    </span>
    <slot />
</span>

<style>
    .title {
        font-weight: bold;
        letter-spacing: 0.4rem;
    }

    :global(body) {
        padding: 0;
        margin: 0;
    }

    :root {
        --background-clr: #f8f5f2;
        --navbar-clr: #1b1a1a;
    }

    * {
        padding: 0%;
        margin: 0%;
        box-sizing: border-box;
    }
    .row {
        display: flex;
        align-items: center;
    }
    .column {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .body {
        box-sizing: border-box;
        font-family: 'Jura';
        margin: 0%;
        display: flex;
        padding: 0%;
        overflow-x: hidden;
        background-color: var(--background-clr);
    }
    .navbar-container {
        background-color: var(--navbar-clr);
        width: 100%;
        gap: 1rem;
        color: #f8f5f2;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        justify-content: space-between;
        padding: 0rem 2rem;
        font-size: 1.1rem;
        height: 3.5rem;
    }
    .menu-options {
        gap: 1rem;
        max-width: 30rem;
        width: 100%;
        cursor: pointer;
        justify-content: space-evenly;
    }
    .hamburger-menu {
        width: 2rem;
        height: 2rem;
        cursor: pointer;
        z-index: 11;
        background-size: cover;
        display: none;
        transition: 0.2s all;
    }
    @media screen and (max-width: 498px) {
        .hamburger-menu {
            display: block;
        }
        .menu-selected {
            clip-path: circle(100%);
        }
        .menu-unselected {
            clip-path: circle(0.1rem at 100% 0rem);
        }
        .menu-options {
            position: absolute;
            flex-direction: column;
            max-width: 60%;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            height: 100%;
            gap: 2.5rem;
            top: 50%;
            left: 75%;
            z-index: 10;
            transform: translate(-50%, -50%);
            background-color: #232323;
            transition: 0.8s all;
            border-bottom-left-radius: 10px;
            border-top-left-radius: 10px;
        }
        .menu-options > p:first-child {
            margin-top: 5rem;
        }
    }
</style>
