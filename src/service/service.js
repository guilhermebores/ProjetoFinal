import axios from "axios";

const api = axios.create({
  baseURL: "http://35.196.79.227:8000/",
});

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5Iiwicm9sZSI6IkFETUlOIiwiZXhwIjoxNzQzNDgyMTc5fQ.GmGcHf_-D-Of8Rr4OPT-LevlarFVfwETd-ycLw_171k";
export async function getCategorias() {
  try {
    const resultado = await api.get("/categories/user/9", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "aplication/js.",
        "Content-Type": "aplication/json",
      },
    });
    return resultado.data;
  } catch (error) {
    console.log(error);
  }
}

export async function login(payload) {
  try {
    const response = await api.post("login", payload);
    return response;
  } catch (error) {
    console.log(error.response.data);
  }
}

export async function register(payload) {
  try {
    const response = await api.post("register", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {}
}

export async function categories() {
  try {
    const response = await api.post("/categories/user/9", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {}
}

export const getGamesByCategory = async (categoryId) => {
  try {
    const response = await api.get("/products/category/26");
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getProdutosComDesconto() {
  try {
    const response = await api.get("/produtos/desconto"); 
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos com desconto:", error);
    return [];
  }
}