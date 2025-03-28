<template>
  <div v-if="loaded">
    <h2>Hello, {{ name }}</h2>
  </div>
</template>

<script setup lang="ts">
import { apiFetch } from '@/api';
import { useRoute, useRouter } from 'vue-router';
import type { DashboardResponse } from '@/types/Login';
import { onMounted, ref } from 'vue';

const name = ref('')
const loaded = ref(false)
const router = useRouter()

onMounted( async()=>{
    try{
        const data = await apiFetch<DashboardResponse>('dashboard',{
            method: 'GET'
        });
        name.value = data.name;
        loaded.value = true;
        console.log(data);
    }
    catch(err){
        console.log(err);
        router.push('/login');
    }
});



</script>

<style lang="scss" scoped>

</style>