<script setup lang="ts">

import { reactive, ref } from 'vue';
import type { LoginRequest, LoginResponse } from '@/types/login';
import { apiFetch } from '@/api';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const form = reactive<LoginRequest>({
  name: '',
  email: '',
  password: '',
});

const authStore = useAuthStore();

const handleSubmit = async()=>{
  try{
    await authStore.login(form);
    // Redirect to the dashboard or another page after successful login
    router.push({ name: 'dashboard' });
  }catch (error) {
    console.error('Login failed:', error);
    // Handle error (e.g., show a notification)
  }
}

// Handle Forgot Password
const handleForgotPassword = () => {
  console.log('Forgot Password clicked');
  // Redirect to a "Forgot Password" page or show a modal
  router.push({ name: 'forgot-password' }); // Example route
};

// Handle Register
const handleRegister = () => {
  console.log('Register clicked');
  router.push({ name: 'register' }); // Redirect to the register page
};

</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="login-container bg-white shadow-lg lg:w-1/3 rounded-lg p-8 py-5">
      <div class="text-center mx-2 mb-5">
        <h1 class="text-3xl text-slate-900 font-bold m-2">ようこそ。Ave Mujica の世界へ</h1>
        <p class="text-sm text-gray-400 m-2">さきこ さきこ さきこ さきこ さきこ ....</p>
      </div>

      <form class="flex justify-center items-center" @submit.prevent="handleSubmit">
        <div>
          <div>
            <input
              class="m-2"
              type="text"
              name="name"
              id="name"
              v-model="form.name"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <input
              class="m-2"
              type="password"
              name="password"
              id="password"
              v-model="form.password"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <button class="bg-blue-400 rounded-2xl px-2 py-1" type="submit">Login</button>
      </form>

      <!-- Forgot Password and Register Buttons -->
      <div class="text-center mt-4 flex justify-center gap-4">
        <button
          class="text-blue-500 hover:underline text-sm"
          @click="handleForgotPassword"
        >
          Forgot Password?
        </button>
        <button
          class="text-blue-500 hover:underline text-sm"
          @click="handleRegister"
        >
          Register
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>



</style>
