<template>
    <div class="games-view">
        <h1>Games {{ categoriaNome }}</h1>

        <div class="games-gallery">
            <div v-for="game in games" :key="game.id" class="game-card">
                <img :src="getImg(game.image_path)" :alt="game.title" class="game-image" />
                <div class="game-info">
                    <h3>{{ game.name }}</h3>
                    <p>{{ game.description }}</p>
                    <p>{{ game.price }}</p>
                    <button @click="verDetalhes(game.id)">Adicionar ao carrinho 🛒 </button>
                </div>
            </div>
        </div>

        <div v-if="loading" class="loading">
            Carregando jogos...
        </div>

        <div v-if="error" class="error">
            Ocorreu um erro ao carregar os jogos. Tente novamente mais tarde.
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getGamesByCategory } from "@/service/service";

const route = useRoute();
const games = ref([]);
const loading = ref(true);
const error = ref(false);
const categoriaNome = ref("");

const categoryId = route.params.id;

const verDetalhes = (gameId) => {
    router.push({ name: "GameDetails", params: { id: gameId } });
};

const carregarJogos = async () => {
    try {
        const response = await getGamesByCategory(categoryId);
        console.log("Dados Recebidos", response);
        games.value = response;
        categoriaNome.value = response.categoryName;
        loading.value = false;
    } catch (err) {
        console.er / ror("Erro ao carregar jogos", err);
        error.value = true;
        loading.value = false;
    }
};

onMounted(() => {
    carregarJogos();
});


function getImg(imagePath) {
    const baseUrl = "http://35.196.79.227:8000";
    console.log(imagePath)
    return `${baseUrl}${imagePath}`;
}

</script>

<style scoped>
.games-view {
    padding: 20px;
    text-align: center;
}

h1 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
}

.games-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 0;
}

.game-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.game-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.game-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 15px;
}

.game-info h3 {
    font-size: 1.5rem;
    color: #333;
}

.game-info p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 15px;
}

button {
    padding: 10px 20px;
    background-color: #ff0000;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

.loading {
    font-size: 1.2rem;
    color: #333;
    margin-top: 20px;
}

.error {
    color: red;
    font-size: 1.2rem;
    margin-top: 20px;
}
</style>
