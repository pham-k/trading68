<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8">
      <product :product="getProductById" />
    </v-col>
  </v-row>
</template>

<script>
import Product from '~/components/Products/Product.vue'
export default {
  components: {
    Product
  },
  computed: {
    getProductById () {
      const productId = this.$route.params.productId
      return this.$store.getters['products/getProductById'](productId)[0]
    }
  }
}
</script>
