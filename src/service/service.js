import axios from "axios";

axios.defaults.withCredentials = true;

const api = axios.create({
  baseURL: "http://34.138.111.33:8000/",
});

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5Iiwicm9sZSI6IkFETUlOIiwiZXhwIjoxNzQyOTM2ODE1fQ.CumgLh3wpHJnTufKCXCtbBjotng-xpa8f9isHHOXjn8";
export async function getCategorias() {
  try {
    const resultado = await api.get("/categories/", {
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
    const response = await api.post("login", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
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
