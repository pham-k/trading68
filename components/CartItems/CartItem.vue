<template>
  <v-card
    class="pa-4"
    max-width=""
    outlined
  >
    <v-row>
      <v-col
        cols="5"
        sm="4"
        align-self="center"
        class="py-0"
      >
        <v-img
          class="white--text align-end"
          max-height="100"
          max-width="100"
          :src="cartItem.imageUrl"
        />
      </v-col>
      <v-col
        cols="7"
        sm="8"
        align-self="center"
        class="py-0"
      >
        <p id="cart-item-title" class="mb-0 text-uppercase font-weight-medium">
          {{ cartItem.title }}
        </p>
        <div>
          <span class="font-weight-bold">CA ${{ cartItem.price }}</span>
          <span> x {{ cartItem.quantity }}</span>
        </div>
        <v-card-actions>
          <v-spacer />
          <v-btn text small @click="removeCartItem">
            Remove
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    cartItem: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeCartItem () {
      this.$store.commit('cart/removeCartItem', this.cartItem)
    }
  }
}
</script>

<style lang="css" scoped>
  #cart-item-title p {
    font-weight: 800;
    letter-spacing: 1em;
  }
</style>
