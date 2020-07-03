<template>
  <v-app>
    <v-app-bar app elevate-on-scroll color="white">
      <v-btn icon @click="$router.go(-1)" :disabled="$route.path === '/'">
        <v-icon v-if="$route.path !== '/'" @click="foo">mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer />
      <v-toolbar-title id="brand" class="text-uppercase font-weight-bold" @click="toHome">
        Trading68
      </v-toolbar-title>
      <v-spacer />
      <v-badge
        bordered
        :content="getCartItemsQuantity"
        :value="getCartItemsQuantity"
        color="primary"
        class=""
        offset-y="20"
        offset-x="10"
        @click="toCart"
      >
        <v-btn icon to="/cart" color="primary">
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </v-badge>
    </v-app-bar>
    <v-main class="">
      <v-container>
        <nuxt />
      </v-container>
      <!-- <v-btn
        color="cyan"
        fixed
        bottom
        right
        fab
        small
      >
        <v-icon>mdi-cart</v-icon>
      </v-btn> -->
    </v-main>
    <!-- <v-bottom-navigation
      class="d-flex d-sm-none"
      app
      grow
    >
      <v-btn to="/" value="Home">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn to="/products" value="Products">
        <span>Products</span>
        <v-icon>mdi-view-list</v-icon>
      </v-btn>
      <v-btn to="/cart" value="Cart">
        <span>Cart</span>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-bottom-navigation> -->
    <!-- <v-footer
      app
      class="d-none d-sm-block"
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
// import * as firebase from 'firebase/app'

export default {
  data () {
    return {
    }
  },
  computed: {
    getCartItemsQuantity () {
      return this.$store.getters['cart/getCartItemsQuantity']
    },
    getBackButtonColor () {
      if (this.$route.path === '/') {
        return 'white'
      } else {
        return 'primary'
      }
    }
  },
  methods: {
    toHome () {
      this.$router.push('/')
    },
    toCart () {
      this.$router.push('/cart')
    },
    toProducts () {
      this.$router.push('/products')
    }
  }
  // created () {
  //   const firebaseConfig = {
  //     apiKey: 'AIzaSyDP90ROVy3KquDr5_At8K3USKLhIiBJvs8',
  //     authDomain: 'medcare-d50c6.firebaseapp.com',
  //     databaseURL: 'https://medcare-d50c6.firebaseio.com',
  //     projectId: 'medcare-d50c6',
  //     storageBucket: 'medcare-d50c6.appspot.com',
  //     messagingSenderId: '320481092894',
  //     appId: '1:320481092894:web:5a033290c2678c7dbf950f',
  //     measurementId: 'G-XSGRXJ8GRS'
  //   }
  //   firebase.initializeApp(firebaseConfig)
  //   console.log('[firebase/app] initialized')
  // }
}
</script>

<style scoped>
  .nuxt-link-active {
    color: black;
    text-decoration: none;
    outline: none;
  }
  #brand {
    letter-spacing: 0.1em;
    font-size: 24px;
    width: 160px;
  }
</style>
