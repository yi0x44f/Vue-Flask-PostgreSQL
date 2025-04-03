<template>

  

  <div v-if="isLoggedIn" class="dashboard-container">
    <header class="dashboard-header">
      <h1>Welcome to Your Dashboard</h1>
    </header>
    <section class="dashboard-content">
      <div class="user-info">
        <p><strong>Name:</strong> {{ name }}</p>
        <p><strong>Email:</strong> {{ email }}</p>
      </div>
    </section>
  </div>

</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';

const authStore = useAuthStore();

const isLoggedIn = ref(authStore.isLoggedIn);
const name = ref(authStore.user?.name as String);
const email = ref(authStore.user?.email as String);

</script>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f9f9f9;
  min-height: 100vh;
}

.dashboard-header {
  background-color: #4a90e2;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 2rem;
}

.dashboard-header h1 {
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
}

.dashboard-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
}

.user-info {
  font-size: 1.2rem;
  line-height: 1.8;
}

.user-info p {
  margin: 0.5rem 0;
}

.user-info strong {
  color: #333;
}
</style>