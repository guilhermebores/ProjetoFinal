<template>
    <div class="categorias-view">
        <h1>Categorias</h1>
        <div class="categorias-list">
            <div v-for="categoria in categorias" :key="categoria.id" class="categoria-card">
                <img :src="getImg(categoria.image_path)" alt="Imagem da categoria" class="categoria-image" />
                <div class="categoria-info">
                    <h2>{{ categoria.name }}</h2>
                    <p>{{ categoria.description }}</p>
                    <router-link :to="{ name: 'GamesView', params: { id: categoria.id } }">
                        <button>🎮</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

    <ul v-for="cat in categoria" :key="cat.id">
        <li> {{ cat.name }} </li>
    </ul>
</template>

<script setup>
import { getCategorias } from "@/service/service";
import { onMounted, ref } from "vue";
import { useAuthStore } from "@/stores/auth";



const auth = useAuthStore()
const categorias = ref([])

const props = defineProps({
    name: String,
    description: String,
    id: Number,
})

async function pegandoCategoria() {
    const resultado = await getCategorias()
    categorias.value = resultado
}

onMounted(() => {
    pegandoCategoria()
})

function getImg(imagePath) {
    const baseUrl = "http://35.196.79.227:8000";
    console.log(imagePath)
    return `${baseUrl}${imagePath}`;
}


</script>

<style scoped>
.categorias-view {
    text-align: center;
    padding: 20px;
}

h1 {
    font-size: 2rem;
    margin-bottom: 20px;
}

.categorias-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 0;
}

.categoria-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.categoria-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.categoria-image {
    width: 135px;
    height: 125px;
    border-radius: 8px;
    margin-bottom: 15px;
}

.categoria-info h2 {
    font-size: 1.5rem;
    color: #333;
}

.categoria-info p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 15px;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 20px;
}

button:hover {
    background-color: #0056b3;
}

header {
    background-color: #333;
    color: white;
    padding: 15px;
    text-align: center;
}


.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 100px);

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
