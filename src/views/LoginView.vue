<template>
    <div v-if="!auth.isAuthenticated" class="auth-container">
        <h2 class="auth-title">Login</h2>
        <form @submit.prevent="enviar" class="auth-form">
            <div class="form-group">
                <label for="email" class="form-label">Email:</label>
                <input type="email" id="email" v-model="email" required class="form-input" />
                <span v-if="emailError" class="error-message">{{ emailError }}</span>
            </div>
            <div class="form-group">
                <label for="password" class="form-label">Senha:</label>
                <input type="password" id="password" v-model="senha" required class="form-input" />
                <span v-if="passwordError" class="error-message">{{ passwordError }}</span>
            </div>
            <button type="submit" :disabled="isLoading" class="submit-btn">
                {{ isLoading ? 'Carregando...' : 'Login' }}
            </button>
        </form>
    </div>

    <div v-else class="content-container">
        <h1 class="content-title">Aqui estão seus dados:</h1>
        <h2 class="welcome-message">Bem-vindo, {{auth.user.user.name}} ({{ auth.user.user.email }})</h2>
        <button @click="auth.logout" class="logout-btn">Sair</button>
    </div>
</template>

<script setup>
import { login } from '@/service/service.js';
import { useAuthStore } from '@/stores/auth.js';
import { ref } from 'vue';

const email = ref('');
const senha = ref('');
const emailError = ref('');
const passwordError = ref('');
const isLoading = ref(false);
const auth = useAuthStore();

console.log(auth.user)

async function enviar() {
    emailError.value = '';
    passwordError.value = '';

    if (!email.value || !senha.value) {
        if (!email.value) emailError.value = 'Email é obrigatório';
        if (!senha.value) passwordError.value = 'Senha é obrigatória';
        return;
    }

    isLoading.value = true;

    try {
        const result = await login({
            email: email.value,
            password: senha.value,
        });

        if (result.status >= 200 && result.status < 300) {
            alert('Login bem-sucedido');
            auth.saveUser(result.data);
        } else {
            alert('Login falhou');
        }
    } catch (error) {
        alert('Erro ao realizar login');
    } finally {
        isLoading.value = false;
    }
}
</script>

<style scoped>
/* Geral */
.auth-container,
.content-container {
    height: 64vh;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
}

.auth-title,
.content-title {
    text-align: center;
    color: #333;
}

.welcome-message {
    text-align: center;
    color: #555;
}

/* Formulário */
.auth-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-label {
    font-size: 14px;
    color: #555;
}

.form-input {
    padding: 12px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 6px;
    transition: border-color 0.3s;
}

.form-input:focus {
    border-color: #3498db;
    outline: none;
}

.error-message {
    color: red;
    font-size: 12px;
    margin-top: 5px;
}

.submit-btn {
    padding: 12px;
    font-size: 16px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.submit-btn:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

.submit-btn:hover:enabled {
    background-color: #2980b9;
}

/* Botão Sair */
.logout-btn {
    padding: 12px;
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
    margin-top: 20px;
    font-size: 16px;
}

.logout-btn:hover {
    background-color: #c0392b;
}

/* Responsividade */
@media (max-width: 500px) {

    .auth-container,
    .content-container {
        padding: 15px;
    }

    .form-input,
    .submit-btn,
    .logout-btn {
        font-size: 14px;
    }
}
</style>
