<template>
    <Header></Header>
    <main>
        <router-view></router-view>
    </main>
    <Footer></Footer>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>

</style>