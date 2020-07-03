<template>
  <v-row>
    <v-col cols="12">
      <products-list :products="getProducts" />
    </v-col>
  </v-row>
</template>

<script>
import ProductsList from '~/components/Products/ProductsList.vue'

export default {
  components: {
    ProductsList
  },
  computed: {
    getProducts () {
      return this.$store.getters['products/getProducts']
    }
  }
}
</script>
