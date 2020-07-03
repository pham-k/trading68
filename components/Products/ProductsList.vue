<template>
  <v-row>
    <v-col
      v-for="product in products"
      :key="product.productId"
      cols="12"
      sm="6"
      md="3"
    >
      <products-list-item :product="product"/>
    </v-col>
  </v-row>
</template>

<script>
import ProductsListItem from '~/components/Products/ProductsListItem.vue'

export default {
  components: {
    ProductsListItem
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>
