<template>
    <header>
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/categoria">Categoria</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
                <li v-if="isAuthenticated">
                    <button @click="logout">Logout</button>
                </li>
                <li v-else>
                    <router-link to="/login">Login</router-link>
                </li>
                <li><router-link to="/register">Register</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>

</script>

<style scoped>
header {
    background-color: #333;
    color: white;
    padding: 10px;
}

nav ul {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    padding: 0;
}

nav a {
    color: white;
    text-decoration: none;
}

nav a:hover {
    text-decoration: underline;
}

nav button {
    background-color: #e74c3c;
    border: none;
    color: white;
    padding: 5px 10px;
    cursor: pointer;
}
</style>
