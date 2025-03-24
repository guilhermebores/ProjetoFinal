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
}, {persist: true})