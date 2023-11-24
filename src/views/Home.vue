<template>
  <Navbar/>
  <div style="min-height: 60vh">
    <router-view @fetchData="fetchData"> </router-view>
  </div>
  <Footer/>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import BodyHome from './BodyHome.vue';
export default {
  name: 'Home',
  data() {
    return {
      //baseURL: 'https://limitless-lake-55070.herokuapp.com/',
      baseURL: "http://127.0.0.1:8000/api/",
      products: null,
      categories: null,
      key: 0,
      token: null,
      cartCount: 0,
    };
  },
  components: { Footer, Navbar, BodyHome },
  methods: {
    async fetchData() {

    }
    
  },
  mounted() {
    this.fetchData();
  }
};
</script>

