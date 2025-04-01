import { defineStore } from "pinia"
import { ref } from "vue"


export const useCounterStore = defineStore('counter', () => {
    
    const contador = ref(0)
    
    function incrementar() {
        contador.value++
    }
    
    function decrementar() {
        contador.value--
    }
    

    return { contador, incrementar, decrementar }
}, { persist: true })

export const useCartStore = defineStore("cart", () => {
    const cart = ref([]);

    const addToCart = (product) => {
    cart.value.push(product);
    };

    const removeFromCart = (productId) => {
    cart.value = cart.value.filter((item) => item.id !== productId);
    };

    return { cart, addToCart, removeFromCart };
});