<template>
    <div v-if="!auth.isAuthenticated" class="auth-container">
        <h2 class="auth-title">Registrar</h2>
        <form @submit.prevent="enviar" class="auth-form">
            <div class="form-group">
                <label for="name" class="form-label">Nome:</label>
                <input type="text" id="name" v-model="name" required class="form-input" />
            </div>
            <div class="form-group">
                <label for="email" class="form-label">Email:</label>
                <input type="email" id="email" v-model="email" required class="form-input" />
            </div>
            <div class="form-group">
                <label for="password" class="form-label">Senha:</label>
                <input type="password" id="password" v-model="password" required class="form-input" />
            </div>
            <div class="form-group">
                <label for="confirmPassword" class="form-label">Confirmar Senha:</label>
                <input type="password" id="confirmPassword" v-model="confirmPassword" required class="form-input" />
            </div>
            <button type="submit"  class="submit-btn">
        enviar
            </button>
        </form>
    </div>

    <div v-else class="content-container">
        <h2 class="welcome-message">Bem-vindo {{ auth.user.name }} {{ auth.user.email }}</h2>
        <button @click="auth.logout" class="logout-btn">Sair</button>
    </div>
</template>

<script setup>
import { register } from '@/service/service.js';
import { useAuthStore } from '@/stores/auth.js';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const isLoading = ref(false);
const auth = useAuthStore();
const router = useRouter();

console.log(auth.user.name)

async function enviar() {
    isLoading.value = true;



        const result = await register({
            name: name.value,
            email: email.value,
            password: password.value
        });

        if (result.status == 201 ) {
            alert('Registro bem-sucedido');
            auth.saveUser(result.data);
        } else {
            alert('Falha no registro');
        }
    
    if (password.value !== confirmPassword.value) {
        alert('As senhas não coincidem');
        isLoading.value = false;
        return;
    }

    isLoading.value = false;

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
