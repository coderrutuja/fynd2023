<script>
import './App.css';

export default {
  name: 'App',
};
</script>


<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/login">Login</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

