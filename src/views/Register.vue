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
              type="email"
              name="email"
              id="email"
              v-model="form.email"
              placeholder="Enter your email"
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

        <button class="bg-blue-400 rounded-2xl px-2 py-1" type="submit">Register</button>
      </form>

      <!-- Already have an account? Login Button -->
      <div class="text-center mt-4">
        <button
          class="text-blue-500 hover:underline text-sm"
          @click="handleLogin"
        >
          Already have an account?  Login
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import type { RegisterRequest } from '@/types/login';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const form = reactive<RegisterRequest>({
  name: '',
  email: '',
  password: '',
});

const handleSubmit = async () => {
  try {
    await authStore.register(form);
    // Redirect to the dashboard or another page after successful registration
    router.push({ name: 'login' });
  } catch (error) {
    console.error('Register failed:', error);
    // Handle error (e.g., show a notification)
  }
};

// Handle Login Button Click
const handleLogin = () => {
  console.log('Login button clicked');
  router.push({ name: 'login' }); // Redirect to the login page
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>