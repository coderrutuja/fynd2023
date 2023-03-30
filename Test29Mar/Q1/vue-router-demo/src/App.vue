<!-- eslint-disable vue/no-unused-components -->
<script>
import Home from "./components/Home.vue";
import Contact from "./components/Contact.vue";
import About from "./components/About.vue";

export default {
  name: "App",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Home,
    Contact,
    About,
  },
};
</script>

<template>
  <div id="app">
    <router-link to="/">
      Home
    </router-link>
    <router-link to="/contact">
      Contact
    </router-link>
    <router-link to="/about">
      About
    </router-link>

    <router-view />
  </div>
</template>

