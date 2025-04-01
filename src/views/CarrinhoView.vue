<script setup>
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore();
</script>

<template>
    <div>
        <h1>Meu Carrinho</h1>
        <div v-if="counterStore.length === 0">
            <p>Seu carrinho está vazio!</p>
        </div>
        <div v-else>
            <div v-for="item in counterStore" :key="item.id" class="cart-item">
                <h2>{{ item.nome }}</h2>
                <p>Preço: R$ {{ item.preco }}</p>
            </div>
        </div>
    </div>
</template>
