<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import AboutYou from './components/AboutYou.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <br>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/test">Test</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/aboutyou">AboutYou</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
      </nav>
      <br>
    </div>
  </header>

  <RouterView/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
