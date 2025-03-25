<script setup>
import HeaderComponent from './components/HeaderComponent.vue';


</script>

<template>
  <HeaderComponent />

  <main>
    <RouterView />
  </main>

  <footer>

  </footer>
</template>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
