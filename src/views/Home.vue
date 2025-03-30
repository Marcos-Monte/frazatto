<template>

    <b-container fluid class="p-0 m-0">
        <About />
        <Services />
        <Partners />
        <Contacts />
    </b-container>

</template>

<script>
import About from '@/components/About.vue';
import Contacts from '@/components/Contacts.vue';
import Partners from '@/components/Partners.vue';
import Services from '@/components/Services.vue';

    export default {
        name: 'teste',
        components: {About, Services, Contacts, Partners}
    }
</script>

<style scoped lang="scss">
</style>