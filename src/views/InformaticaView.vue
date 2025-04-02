<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getInformaticaByCategory } from "@/service/service";
import { useCartStore } from "@/stores/counter";
import router from "@/router";

const cartStore = useCartStore();
const route = useRoute();
const informatica = ref([]);
const loading = ref(true);
const error = ref(false);
const categoriaNome = ref("");

const categoryId = route.params.id;

const carregarEletronico = async () => {
    try {
        const response = await getInformaticaByCategory(categoryId);
        console.log("Dados Recebidos", response);
        informatica.value = response;
        categoriaNome.value = response.categoryName;
    } catch (err) {
        console.error("Erro ao carregar eletrônicos", err);
        error.value = true;
    } finally {
        loading.value = false;
    }
};

onMounted(async () => {
    await carregarEletronico();
});

const adicionarAoCarrinho = (produto) => {
    cartStore.addToCart(produto);
    router.push('/CarrinhoView');
};

function getImg(imagePath) {
    const baseUrl = "http://35.196.79.227:8000";
    return `${baseUrl}${imagePath}`;
}
</script>

<template>
    <div class="informatica-view">
        <h1>Informática - {{ categoriaNome }}</h1>

        <div v-if="loading" class="loading">Carregando produtos...</div>

        <div v-if="error" class="error">
            Ocorreu um erro ao carregar os produtos. Tente novamente mais tarde.
        </div>

        <div v-if="!loading && !error" class="informatica-gallery">
            <div v-for="produto in informatica" :key="produto.id" class="product-card">
                <img :src="getImg(produto.image_path)" :alt="produto.title" class="product-image" />
                <div class="product-info">
                    <h3>{{ produto.name }}</h3>
                    <p>{{ produto.description }}</p>
                    <p>R$ {{ produto.price.toFixed(2) }}</p>
                    <button @click="adicionarAoCarrinho(produto)">Adicionar ao carrinho 🛒</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.informatica-view {
    padding: 20px;
    text-align: center;
}

h1 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
}

.informatica-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 0;
}

.product-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.product-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 15px;
}

.product-info h3 {
    font-size: 1.5rem;
    color: #333;
}

.product-info p {
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
    background-color: #b30000;
}

.loading, .error {
    font-size: 1.2rem;
    margin-top: 20px;
}

.error {
    color: red;
}
</style>
