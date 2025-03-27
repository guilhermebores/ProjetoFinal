<script setup>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';


</script>

<template>
  <HeaderComponent />
  <main>
    <RouterView />
    <FooterComponent />

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
