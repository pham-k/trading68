<template>
  <div class="mt-6 d-flex flex-column align-center">
    <v-card outlined class="my-6">
      <v-card-text class="text-center text-button font-weight-bold mb-6">
        <div class="mb-4">Your order has been submitted</div>
        <div>We will contact you soon</div>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn block color="primary" tile>Continue shopping</v-btn>
      </v-card-actions>
    </v-card>
    <!-- <order-information :order="getOrder" /> -->
  </div>
</template>

<script>
// import OrderInformation from '~/components/Orders/OrderInformation.vue'

export default {
  // components: {
  //   OrderInformation
  // },
  computed: {
    getOrderSubmitStatus () {
      return this.$store.getters['cart/getOrderSubmitStatus']
    },
    getOrder () {
      return this.$store.getters['cart/getOrder']
    }
  }
}
</script>
