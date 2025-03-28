<template>

    <b-container fluid >
        <b-alert 
            class="box"
            dismissible
            :variant="type"
            :show="show"
        >
            {{ message }}
        </b-alert>
    </b-container>

</template>

<script>

    export default {
        props: ['type', 'message', 'show'],
    }

</script>

<style scoped lang="scss">
    .box{
        width: 280px;
        top: 1%;
        right: 0;
        display: flex;
        justify-content: center;
        position: absolute;
    }
</style>