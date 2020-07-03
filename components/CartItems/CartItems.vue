<template>
  <transition-group
    name="my-anim"
    tag="v-row"
    row
    wrap
    justify-center
    align-center
  >
    <!-- <v-layout row wrap justify-center align-center> -->
    <v-col
      v-for="cartItem in cartItems"
      :key="cartItem.productId"
      cols="12"
      class="my-anim-item"
    >
      <cart-item :cart-item="cartItem" />
    </v-col>
  <!-- </v-layout> -->
  </transition-group>
</template>

<script>
import CartItem from '~/components/CartItems/CartItem.vue'
export default {
  components: {
    CartItem
  },
  props: {
    cartItems: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
  .my-anim-item {
    transition: all 1.5s;
    display: inline-block;
  }
  .my-anim-enter, .my-anim-leave-to {
    opacity: 0;
    transform: translateX(300px);
  }
  .my-anim-leave-active {
    position: absolute;
  }
</style>
