<template>
    <div>
        <HeaderComponent />
        <div class="content">
            <h1>Bem-vindo, {{ user?.name || "Visitante" }}</h1>
            <p v-if="isAuthenticated">Aqui estão seus dados:</p>
            <pre v-if="user">{{ user }}</pre>
            <p v-else>Você não está autenticado. Faça login para acessar seus dados.</p>
        </div>
    </div>

    <ul v-for="cat in categoria" :key="cat.id">
        <li> {{ cat.name }} </li>
    </ul>
    
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";


import { getCategorias } from "@/service/service";
import { onMounted, ref } from "vue";

const categoria = ref([])

const props = defineProps({
    name: String,
    description: String,
    id:Number,
})

async function pegandoCategoria() {
    const resultado = await getCategorias()
    categoria.value = resultado
}


onMounted(() => {
    pegandoCategoria()
})
</script>

<style scoped>
/* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

/* Cabeçalho */
header {
    background-color: #333;
    color: white;
    padding: 15px;
    text-align: center;
}

/* Centralizar o conteúdo */
.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 100px);
    /* Ajusta para a altura do cabeçalho */
    text-align: center;
    padding: 20px;
    background-color: #fff;
}

h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 15px;
}

p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 20px;
}

pre {
    font-size: 1rem;
    color: #444;
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
}

/* Estilo para lista de categorias */
.categorias-container {
    background-color: #fff;
    padding: 20px;
    text-align: center;
    margin-top: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    color: #333;
    font-size: 1.2rem;
    padding: 8px;
    border-bottom: 1px solid #ddd;
}

li:hover {
    background-color: #f0f0f0;
    cursor: pointer;
}

/* Responsividade */
@media (max-width: 768px) {
    .content {
        height: auto;
    }

    h1 {
        font-size: 1.5rem;
    }

    p,
    pre {
        font-size: 1rem;
    }

    li {
        font-size: 1rem;
    }
}
</style>
