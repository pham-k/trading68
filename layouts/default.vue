<template>
  <v-app>
    <v-app-bar app flat color="white">
      <v-app-bar-nav-icon />
      <v-toolbar-title>Medcare</v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-badge
        bordered
        :content="getCartItemsQuantity"
        :value="getCartItemsQuantity"
        overlap
        color="primary"
        class="mx-4"
      >
        <v-btn icon>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </v-badge>
    </v-app-bar>
    <v-main>
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
    <v-footer
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    getCartItemsQuantity () {
      return 1
    }
  }
}
</script>
