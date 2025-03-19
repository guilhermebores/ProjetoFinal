import axios from "axios";

axios.defaults.withCredentials = true;

const api = axios.create({
    baseURL: 'http://34.138.111.33:8000'
})

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5Iiwicm9sZSI6IkFETUlOIiwiZXhwIjoxNzQyNDE0NDc2fQ.XG0iwGjS0YwB-i9jdEFzzWAPuKZ1UfxGg79NqWMfWug'
export async function  getCategorias() {
    try {
        const resultado = await api.get('/categories/', {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept:'aplication/js.', 'Content-Type':'aplication/json'
            }
        })
        return resultado.data
    } catch (error) {
        console.log(error)
    }
}