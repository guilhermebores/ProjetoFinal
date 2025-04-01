<template>
    <div>
        <img src="/src/assets/img/pngwing.com (3).png" alt="/src/assets/img/pngwing.com (3).png">

        <div class="text">
            <h2>GamesKing - A Loja Definitiva para os Amantes de Jogos!</h2>
            <p>
                Bem-vindo à GamesKing, a sua loja online e física dedicada a oferecer uma experiência única para todos
                os
                apaixonados por jogos! Se você é fã de videogames, seja para console ou PC, temos tudo o que você
                precisa
                para se divertir sem limites.

                Na GamesKing, oferecemos uma vasta seleção de jogos das mais diversas plataformas: PlayStation, Xbox,
                Nintendo, PC e muito mais. Se você está em busca dos lançamentos mais esperados ou de clássicos que
                nunca
                saem de moda, aqui você encontra os títulos mais procurados, com as melhores ofertas e condições de
                pagamento.

                Além de jogos, também contamos com acessórios, como controles, headsets, cadeiras gamer e tudo que você
                precisa para elevar sua experiência de jogo a um novo nível. Trabalhamos com as principais marcas do
                mercado
                e garantimos qualidade e desempenho para os seus momentos de diversão.

                Nosso compromisso é com a satisfação dos nossos clientes, por isso, oferecemos um atendimento
                personalizado,
                entrega rápida e segura, e promoções incríveis para você aproveitar. Nossa missão é ser a GamesKing do
                seu
                universo gamer, trazendo sempre as novidades mais quentes, com preços acessíveis e atendimento de
                primeira.

                Seja você um gamer casual ou hardcore, temos tudo o que você precisa para viver suas aventuras no mundo
                dos
                jogos. Visite nossa loja e descubra o que é ser parte da GamesKing, a realeza dos gamers!

                GamesKing – Aqui, o jogo nunca acaba!
            </p>
        </div>
        <div class="desconto-container" v-if="produtosComDesconto.length">
            <h2>🔥 Ofertas Especiais 🔥</h2>
            <div class="produtos-desconto">
                <div v-for="produto in produtosComDesconto" :key="produto.id" class="produto-card">
                    <img :src="produto.image" :alt="produto.nome" class="produto-imagem">
                    <h3>{{ produto.nome }}</h3>
                    <p class="preco-original">De: R$ {{ produto(2) }}</p>
                    <p class="preco-desconto">Por: R$ {{ produto(2) }}</p>
                    <button @click="adicionarAoCarrinho(produto)">Comprar</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>

import { getCategorias, getProdutosComDesconto } from "@/service/service";
import { onMounted, ref } from "vue";

import { useAuthStore } from "@/stores/auth";

const auth = useAuthStore()
const categoria = ref([])
const produtosComDesconto = ref([]);

const props = defineProps({
    name: String,
    description: String,
    id: Number,
})

async function pegandoCategoria() {
    const resultado = await getCategorias()
    categoria.value = resultado
}

async function carregarProdutosComDesconto() {
    try {
        const resultado = await getProdutosComDesconto();
        produtosComDesconto.value = resultado;
        console.log("Produtos com desconto:", resultado);
    } catch (error) {
        console.error("Erro ao carregar produtos com desconto:", error);
    }
}

onMounted(() => {
    pegandoCategoria()
    carregarProdutosComDesconto()
})
</script>

<style scoped>
div {
    vertical-align: top;
    flex-direction: row;
    display: flex;
}

.text {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
}   
    

img {
    height: 537px;
    vertical-align: top;
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
    color: #181717;
    margin-bottom: 20px;
    width: 70%;
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

.desconto-container {
    text-align: center;
    padding: 20px;
    background-color: #f8f9fa;
    margin-top: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.produtos-desconto {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

.produto-card {
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 200px;
    transition: transform 0.3s ease;
}

.produto-card:hover {
    transform: translateY(-5px);
}

.produto-imagem {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
}

h3 {
    font-size: 1.2rem;
    color: #333;
}

.preco-original {
    text-decoration: line-through;
    color: red;
    font-size: 0.9rem;
}

.preco-desconto {
    font-size: 1.2rem;
    color: #28a745;
    font-weight: bold;
}

button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

</style>
