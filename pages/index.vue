<template>
  <v-row>
    <!-- <v-col cols="10" offset="1">
      <div>
        <h1 class="text-center mt-xs-0 mt-sm-4 mt-md-8 mb-4">
          Products
        </h1>
      </div>
    </v-col> -->
    <v-col cols="12">
      <!-- <featured-products-list
        :featured-products="getProducts"
      /> -->
      <products-list
        :products="getProducts"
      />
    </v-col>
    <v-col
      cols="12"
      md="6"
      class="px-6 my-4 mt-sm-8"
    >
      <div class="text-center mb-4 mb-sm-6">
        <h1>About Us</h1>
      </div>
      <p class="text-justify">CanMedDirect.ca is an online shop dedicated to providing Canadians with discount prices on Ostomy Supplies, Catheters, Incontinence Supplies, Hernia Support Products and Skin care and Wound Care Supplies. We deliver across Canada and have over 4,000 items in our inventory,all at discount prices. Why pay more? Buy your medical supplies from CanMedDirect.ca and save your hard earned money.</p>
    </v-col>
    <v-col
      cols="12"
      md="6"
      class="px-6 my-4 mt-sm-8"
    >
      <div class="text-center mb-4 mb-sm-6">
        <h1>Contact Us</h1>
      </div>
      <p class="text-justify">
        <v-icon color="primary" class="mr-4">mdi-map</v-icon>
        123 Winter Street, Ontario, Toronto, Canada
      </p>
      <p class="text-justify">
        <v-icon color="primary" class="mr-4">mdi-phone</v-icon>
        555 151 515
      </p>
      <p class="text-justify">
        <v-icon color="primary" class="mr-4">mdi-email</v-icon>
        68tradingco@gmail.com
      </p>
    </v-col>
  </v-row>
</template>

<script>
// import * as firebase from 'firebase/app'
// import FeaturedProductsList from '~/components/Products/FeaturedProductsList.vue'
import ProductsList from '~/components/Products/ProductsList.vue'

export default {
  components: {
    // FeaturedProductsList,
    ProductsList
  },
  computed: {
    // getProductsByFeature () {
    //   // console.log(this.$store.getters['products/getProductsByFeature'](true))
    //   return this.$store.getters['products/getProductsByFeature'](true)
    // },
    getProducts () {
      return this.$store.getters['products/getProducts']
    }
  }
}
</script>
