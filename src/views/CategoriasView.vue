<template>
    <div class="categorias-view">
        <h1>Categorias</h1>
        <div class="categorias-list">
            <div v-for="categoria in categorias" :key="categoria.id" class="categoria-card">
                <img :src="categoria.imagem" alt="Imagem da categoria" class="categoria-image" />
                <div class="categoria-info">
                    <h2>{{ categoria.nome }}</h2>
                    <p>{{ categoria.descricao }}</p>
                    <button @click="selecionarCategoria(categoria.id)">Ver mais</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CategoriasView",

    methods: {
        selecionarCategoria(id) {
            // Aqui pode-se adicionar lógica para redirecionar ou mostrar mais informações sobre a categoria
            console.log("Categoria selecionada:", id );
        }
    }
};
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
    width: 100%;
    height: auto;
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
}

button:hover {
    background-color: #0056b3;
}
</style>
