<template>
    <b-container fluid="xl" class="p-0">
        <b-navbar toggleable="sm" sticky style="background-color: var(--primary);">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

            <b-navbar-brand>Ícone</b-navbar-brand>

            <b-collapse id="nav-text-collapse" is-nav>

                <b-navbar-nav style="width: 100%; display: flex; justify-content: flex-end" >
                    <b-nav-item href="#sobre">Sobre</b-nav-item>
                    <b-nav-item href="#servicos" >Serviços</b-nav-item>
                    <b-nav-item href="#parceiros" >Parceiros</b-nav-item>
                    <b-nav-item href="#contatos">Contatos</b-nav-item>
                </b-navbar-nav>

            </b-collapse>

        </b-navbar>

        <main class="main">
            <router-view></router-view>
        </main>

        <footer class="d-flex justify-content-center align-items-center py-3">
            <p class="m-0">© 2025 por Frazatto Logística. Criação e desenvolvimento com Yan Vieira e Marcos Monte.</p>
        </footer>

    </b-container>
</template>

<script>

    export default {
        name: 'teste',

    }
</script>

<style scoped lang="scss">

</style>