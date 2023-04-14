<script>
    import Login from "../../components/Login.svelte";
    let isOpenModal = false;
    function openModal() {
        isOpenModal = true;
    }

    function closeModal() {
        isOpenModal = false;
    }
</script>

<button on:click={openModal}>Open Modal</button>
<div class="login-box">
    <Login isOpenModal:isOpenModal on:closeModal={closeModal} />
</div>
