<template>
  <header class="header">
    <div class="header-container">
      <nav class="nav">
        <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
        <router-link class="nav-link" to="/register">Register</router-link>
        <router-link
          v-if="!authStore.isLoggedIn"
          class="nav-link"
          to="/login"
        >
          Login
        </router-link>
        <button
          v-if="authStore.isLoggedIn"
          class="nav-link logout-button"
          @click="handleLogout"
        >
          Log out
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const authStore = useAuthStore();

const handleLogout = async () => {
  await authStore.logout();
  // Redirect to the login page after logout
  router.push({ name: 'login' });
};
</script>

<style scoped>
.header {
  background-color: #4a90e2;
  color: #fff;
  padding: 1rem;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem; /* Ensure consistent padding */
  border-radius: 5px; /* Add rounded corners for consistency */
  transition: color 0.3s ease, background-color 0.3s ease;
  display: flex;
  align-items: center; /* Align content vertically */
  justify-content: center; /* Align content horizontally */
}

.nav-link:hover {
  color: #ffd700; /* Amber color for hover effect */
  background-color: rgba(255, 255, 255, 0.2); /* Add a subtle hover background */
}

.logout-button {
  background-color: #e74c3c;
  border: none;
  cursor: pointer;
}

.logout-button:hover {
  background-color: #c0392b;
}
</style>