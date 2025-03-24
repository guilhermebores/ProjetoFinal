<template>
    <div v-if="!auth.isAuthenticated">
        <h2>Registrar</h2>
        <form @submit.prevent="enviar">
            <div>
                <label for="name">Nome:</label>
                <input type="text" id="name" v-model="name" required />
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required />
            </div>
            <div>
                <label for="password">Senha:</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <div>
                <label for="confirmPassword">Confirmar Senha:</label>
                <input type="password" id="confirmPassword" v-model="confirmPassword" required />
            </div>
            <button type="submit">Registrar</button>
        </form>
    </div>

    <div v-else>
        <div class="content">
            <p>Aqui estão seus dados:</p>
            <h1>Bem-vindo, {{ auth.user.name }} {{auth.user.email}}</h1>
        </div>    
        <div>
            <button @click="auth.logout">Sair</button>
        </div>
    </div>
</template>

<script setup>
import { register } from '@/service/service.js';
import { useAuthStore } from '@/stores/auth.js';
import { ref } from 'vue';

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const auth = useAuthStore()

async function enviar() {
    if (password.value !== confirmPassword.value) {
        alert('As senhas não coincidem');
        return;
    }

    const result = await register({ 
        name: name.value,
        email: email.value, 
        password: password.value
    })

    if (result.status >= 200 && result.status < 300) {
        alert('Registro bem-sucedido');
        auth.saveUser(result.data);
    } else {
        alert('Falha no registro');
    }
}
</script>

<style scoped>
form {
    max-width: 300px;
    margin: 0 auto;
}

input {
    width: 100%;
    padding: 8px;
    margin: 10px 0;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #3498db;
    color: white;
    border: none;
    cursor: pointer;
}
</style>
