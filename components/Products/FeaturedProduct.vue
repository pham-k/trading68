<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="150px"
      :src="featuredProduct.imageUrl"
    />
    <v-card-title>{{ featuredProduct.title }}</v-card-title>
    <v-card-subtitle class="pb-0">Category</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ featuredProduct.description }}</div>
      <div>CA${{ featuredProduct.price }}</div>
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn
        color="cyan"
      >
        Add to cart
      </v-btn>
      <v-spacer />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    featuredProduct: {
      type: Object,
      required: true
    }
  }
}
</script>
