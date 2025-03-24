<template>
    <div v-if="!auth.isAuthenticated">
        <h2>Login</h2>
        <form @submit.prevent="enviar">
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required />
            </div>
            <div>
                <label for="password">Senha:</label>
                <input type="password" id="password" v-model="senha" required />
            </div>
            <button type="submit">Login</button>
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
import { login } from '@/service/service.js';
import { useAuthStore } from '@/stores/auth.js';
import { ref } from 'vue';

const email = ref('')
const senha = ref('')

const auth = useAuthStore()

async function enviar() {
    const result = await login({ 
        email: email.value, 
        password: senha.value
    })

    if (result.status >= 200 && result.status < 300) {
        alert('Login sucessso')
        auth.saveUser(result.data)
    } else {
        alert('Login falhou')
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
