import { apiFetch } from "@/api";
import type { User } from "@/types/user";
import { defineStore } from "pinia";
import { ref, watch } from "vue";
import type { DashboardResponse, LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from "@/types/login";

export const useAuthStore = defineStore('auth', () => {
    // State
    const user = ref<User | null>(JSON.parse(localStorage.getItem('user') || 'null'));
    const isLoggedIn = ref(localStorage.getItem('isLoggedIn') === 'true');
    const loading = ref(false);

    // Watchers to persist state to localStorage
    watch(user, (newUser) => {
        localStorage.setItem('user', JSON.stringify(newUser));
    }, { deep: true });

    watch(isLoggedIn, (newState) => {
        localStorage.setItem('isLoggedIn', newState.toString());
    });

    // Actions

    /**
     * Initialize authentication state by fetching the current user from the backend.
     */
    const initializeAuth = async (): Promise<void> => {
        try {
            const result = await apiFetch<DashboardResponse>('api/dashboard',
                {
                    method: 'GET',
                    headers:{ 
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            user.value = result.user;
            isLoggedIn.value = true;
            console.log("Auth initialized:", result.message);
        } catch (error: any) {
            console.error("Failed to initialize auth:", error);
            user.value = null;
            isLoggedIn.value = false;
        }
    };

    /**
     * Log in the user with the provided credentials.
     * @param form - The login request payload.
     */
    const login = async (form: LoginRequest): Promise<void> => {
        loading.value = true;
        try {
            const result = await apiFetch<LoginResponse>('auth/login', {
                method: 'POST',
                body: JSON.stringify(form),
            });
            user.value = result.user;
            isLoggedIn.value = true;
            console.log('Login successful:', result.message);
        } catch (error: any) {
            console.error('Login failed:', error);
            throw new Error(error.message || 'Login failed');
        } finally {
            loading.value = false;
        }
    };

    /**
     * Log out the current user and reset the authentication state.
     */
    const logout = async (): Promise<void> => {
        try {
            await apiFetch('auth/logout', { method: 'POST' });
            user.value = null;
            isLoggedIn.value = false;
            console.log('Logout successful');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    /**
     * Register a new user with the provided details.
     * @param form - The registration request payload.
     */
    const register = async (form: RegisterRequest): Promise<void> => {
        try {
            const result = await apiFetch<RegisterResponse>('auth/register', {
                method: 'POST',
                body: JSON.stringify(form),
            });
            user.value = result.user;
            isLoggedIn.value = true;
            console.log('Register successful:', result);
        } catch (error: any) {
            console.error('Register failed:', error.message);
            throw new Error(error.message);
        }
    };

    // Return state and actions
    return {
        user,
        isLoggedIn,
        loading,
        initializeAuth,
        login,
        logout,
        register,
    };
}, {
    persist: true, // Enable persistence for the store
});