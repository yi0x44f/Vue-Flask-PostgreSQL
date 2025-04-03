<template>
  <div class="flex justify-center items-center h-screen">
    <div class="forgot-password-container bg-white shadow-lg lg:w-1/3 rounded-lg p-8 py-5">
      <div class="text-center mx-2 mb-5">
        <h1 class="text-3xl text-slate-900 font-bold m-2">Forgot Password</h1>
        <p class="text-sm text-gray-400 m-2">
          Enter your name and email to reset your password.
        </p>
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
        </div>

        <button class="bg-blue-400 rounded-2xl px-2 py-1" type="submit">Submit</button>
      </form>

      <!-- Back to Login Button -->
      <div class="text-center mt-4">
        <button
          class="text-blue-500 hover:underline text-sm"
          @click="handleBackToLogin"
        >
          Back to Login
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = reactive({
  name: '',
  email: '',
});

const handleSubmit = () => {
  console.log('Forgot Password form submitted:', form);
  // Add logic to handle forgot password (e.g., API call)
  alert('Password reset instructions have been sent to your email.');
};

const handleBackToLogin = () => {
  console.log('Back to Login clicked');
  router.push({ name: 'login' }); // Redirect to the login page
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>