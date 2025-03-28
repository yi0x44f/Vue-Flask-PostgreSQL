<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { LoginRequest, LoginResponse } from '@/types/Login';
import { apiFetch } from '@/api';
const form = reactive<LoginRequest>({
  name: ''
});

const handleSubmit = async()=>{
  try{
    const result = await apiFetch<LoginResponse>('login', {
      method: 'POST',
      body: JSON.stringify(form)
    });
    console.log(result.message);
  }
  catch(err){
    console.log(err);
  }
}


</script>

<template>

<div class="login-container">

  <div class="text-center mx-2 mb-5">
    <h1 class="text-3xl text-slate-900  font-bold  m-2 ">ようこそ。Ave Mujica の世界へ</h1>
    <p class="text-sm text-gray-400  m-2 ">さきこ さきこ さきこ さきこ さきこ ....</p>
  </div>


  <form class="flex justify-center items-center" @submit.prevent="handleSubmit">
    <input class="m-2" type="text" 
      name="name" id="name" v-model="form.name"  
      placeholder="Enter your name"
      >
    <button class=" bg-blue-400 rounded-2xl px-2 py-1" type="submit">Enter</button>
  </form>
</div>


</template>

<style scoped>

</style>
