<template>
  <product :product="getProductById" />
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
