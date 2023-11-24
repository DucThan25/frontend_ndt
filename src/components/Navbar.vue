<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!--    Logo-->
    <router-link class="navbar-brand" :to="{ name: 'Home' }">
      <img id="logo" src="../assets/icon.png" />
    </router-link>

    <!--    Burger Button-->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!--      Search Bar-->
      <!-- <form class="form-inline ml-auto mr-auto">
        <div class="input-group">
          <input
            size="100"
            type="text"
            class="form-control"
            placeholder="Search Items"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <div class="input-group-prepend">
            <span class="input-group-text" id="search-button-navbar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </span>
          </div>
        </div>
      </form> -->
    </div>
    <div style="margin-right: 30px;">
      <!--      DropDowns-->
      <ul class="navbar-nav  ml-auto">
        <li class="nav-item dropdown">
          <a 
            class="nav-link dropdown-toggle" 
            href="#" 
            role="button" 
            data-bs-toggle="dropdown" 
            aria-expanded="false">
            Browse
          </a>
          <ul class="dropdown-menu">
            <li>
              <router-link class="dropdown-item" :to="{ name: 'Home' }">Home</router-link>
            </li>
            <!-- <li> 
              <router-link class="dropdown-item" :to="{ name: 'Product' }">Product</router-link>
            </li>
            <li>
              <router-link class="dropdown-item" :to="{ name: 'Category' }">Category</router-link>
            </li> -->
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link text-light dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Accounts
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <!-- <router-link
              class="dropdown-item"
              v-if="!token"
              :to="{ name: 'Signin' }"
              >Wishlist</router-link
            >
            <router-link class="dropdown-item" v-else :to="{ name: 'Wishlist' }"
              >Wishlist</router-link
            >
            <router-link class="dropdown-item" :to="{ name: 'Admin' }"
              >Admin</router-link
            > -->
            <router-link
              class="dropdown-item"
              v-if="!token"
              :to="{ name: 'Signin' }"
              >Log In</router-link
            >
            <router-link
              class="dropdown-item"
              v-if="!token"
              :to="{ name: 'Signup' }"
              >Sign Up</router-link
            >
            <a class="dropdown-item" v-if="token" href="#" @click="signout"
              >Sign Out</a
            >
          </ul>
        </li>

        <li class="nav-item">
          <router-link class="nav-link text-light" :to="{ name: 'Order' }">Orders</router-link>
        </li>
        <li class="nav-item" style="margin-left: 20px;">
          <div id="cart">
            
            <router-link class="text-light" :to="{ name: 'Cart' }">
              <span id="nav-cart-count">{{ cartCount }}</span>
              <i class="fa fa-shopping-cart" style="font-size:30px"></i>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: ["cartCount"],
  data() {
    return {
      token: null,
    };
  },
  methods: {
    signout() {
      localStorage.removeItem("token");
      this.token = null;
      this.$emit("resetCartCount");
      this.$router.push({ name: "Home" });
      swal({
        text: "Logged you out. Visit Again",
        icon: "success",
        closeOnClickOutside: false,
      });
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
  },
};
</script>

<style>
   @import '../assets/css/main.css';
</style>
