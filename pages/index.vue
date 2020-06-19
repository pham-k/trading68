<template>
  <v-layout
    row
    wrap
  >
    <v-flex xs12>
      <div>
        <h1 class="text-center my-4">Featured Products</h1>
      </div>
    </v-flex>
    <v-flex
      xs12
      class="mb-8"
    >
      <featured-products :featured-products="getProductsByFeature" />
    </v-flex>
    <v-flex xs6>
      <h1>About Us</h1>
      <p>CanMedDirect.ca is an online shop dedicated to providing Canadians with discount prices on Ostomy Supplies, Catheters, Incontinence Supplies, Hernia Support Products and Skin care and Wound Care Supplies. We deliver across Canada and have over 4,000 items in our inventory,all at discount prices. Why pay more? Buy your medical supplies from CanMedDirect.ca and save your hard earned money.</p>
    </v-flex>
    <v-flex xs12 sm12 md6>
      <p>sth</p>
    </v-flex>
  </v-layout>
</template>

<script>
import FeaturedProducts from '~/components/Products/FeaturedProducts.vue'

export default {
  components: {
    FeaturedProducts
  },
  computed: {
    getProductsByFeature () {
      console.log(this.$store.getters['products/getProductsByFeature'](true))
      return this.$store.getters['products/getProductsByFeature'](true)
    }
  }
}
</script>
