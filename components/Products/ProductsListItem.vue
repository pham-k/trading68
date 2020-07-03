<template>
  <v-card
    class="mx-auto"
    width="280"
    rounded
  >
    <v-layout align-center justify-center @click="toProduct">
      <v-img
        class="white--text align-end"
        max-height="150"
        max-width="150"
        :src="product.imageUrl"
      />
    </v-layout>
    <v-card-actions class="justify-center mb-n12">
      <v-btn
        id="bordered-button"
        color="primary"
        large
        min-width="28"
        rounded
        @click="addToCart"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card-actions>
    <div id="lower-background" class="py-4 mt-4" @click="toProduct">
      <v-card-title class="justify-center">
        <span id="product-title" class="text-uppercase">
          {{ product.title }}
        </span>
      </v-card-title>
      <!-- <v-card-subtitle class="pb-0">
        Category
      </v-card-subtitle> -->
      <v-card-text class="text-center">
        <span id="product-price">CA ${{ product.price }}</span>
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCart () {
      const order = {
        item: Object.assign({}, this.product),
        quantity: 1,
        isAdd: true
      }
      this.$store.commit('cart/updateCart', order)
    },
    toProduct () {
      this.$router.push('products/' + this.product.productId)
    }
  }
}
</script>

<style scoped>
  .v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: none;
  }
  #lower-background {
    background: #E0E0E0;
  }
  #bordered-button {
    border: 6px solid white !important;
    box-shadow: none;
    z-index: 4;
  }
  .v-btn:not(.v-btn--round).v-size--large {
    height: 52px !important;
  }
  #product-title {
    letter-spacing: 0.1em;
  }
  #product-price {
    letter-spacing: 0.08em;
    font-size: 1rem;
    font-weight: 800;
  }
</style>
