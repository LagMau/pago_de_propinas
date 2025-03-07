<script setup>
import { ref } from "vue";
import Navbar from './components/AppNavbar.vue';
import AppTop from './components/AppTop.vue';

</script>

<template>
  <main class="main-app">

    <nav>
      <Navbar />
    </nav>

    <div class="content">
      <AppTop />
    </div>

  </main>
</template>

<style scoped>
  .main-app {
    display: flex;
    height: 100vh;
  }

  nav {
    flex-shrink: 0;
  }

  .content {
    flex-grow: 1;
  }
</style>

