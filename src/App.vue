<template>
  <div id="nav">
    <Header />

    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  components: {
    Header,
    Footer
  },
}
// 9m40T4PJj04G5o5RidE03Ugxcc0RevQ1
</script>