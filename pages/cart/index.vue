/* eslint-disable no-console */
<template>
  <v-row justify="center">
    <v-col
      v-if="getCartItems.length==0"
      cols="12"
      sm="10"
      md="8"
      lg="6"
      align-self="center"
    >
      <div class="my-12">
        <p class="text-center">
          No item in cart
        </p>
      </div>
      <div class="d-flex justify-center">
        <v-btn color="primary" large to="/">
          Continue shopping
        </v-btn>
      </div>
    </v-col>
    <v-col
      v-else
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-stepper v-model="e1" vertical non-linear>
        <!-- <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1" editable>
            Cart
          </v-stepper-step>
          <v-divider />
          <v-stepper-step :complete="e1 > 2" step="2" editable>
            Info
          </v-stepper-step>
          <v-divider />
          <v-stepper-step step="3" editable>
            Place order
          </v-stepper-step>
        </v-stepper-header> -->
        <!-- <v-stepper-items> -->
        <v-stepper-step :complete="e1 > 1" step="1" editable>
          Check your cart items
        </v-stepper-step>
        <v-stepper-content step="1">
          <v-card v-if="getCartItems.length!==0" dark color="primary" class="d-flex flex-row">
            <v-card-text>
              <div class="text-center body-1 mb-2">Subtotal</div>
              <div class="text-center text-h6">CA ${{ getTotalPrice }}</div>
            </v-card-text>
            <v-divider
              inset
              vertical
              dark
              class="my-2"
            />
            <v-card-text>
              <div class="text-center body-1 mb-2">Tax</div>
              <div class="text-center text-h6">CA $0</div>
            </v-card-text>
            <v-divider
              inset
              vertical
              dark
              class="my-2"
            />
            <v-card-text>
              <div class="text-center body-1 mb-2">Total</div>
              <div class="text-center text-h6">CA ${{ getTotalPrice + 0 }}</div>
            </v-card-text>
          </v-card>
          <cart-items :cart-items="getCartItems" />
          <v-row>
            <v-spacer />
            <v-btn outlined class="mx-2" to="/products">
              Continue shopping
            </v-btn>
            <v-btn
              color="primary"
              @click="e1 = 2"
              class="mx-4"
            >
              Next
            </v-btn>
          </v-row>
        </v-stepper-content>

        <v-stepper-step :complete="e1 > 2" step="2" editable>
          Please fill all information
        </v-stepper-step>
        <v-stepper-content step="2">
          <contact-information-form
            v-if="isFirebaseLoaded"
            :total-price="getTotalPrice"
            :cart-items="getCartItems"
          />
        </v-stepper-content>

        <v-stepper-step step="3">
          Contact information
        </v-stepper-step>
        <v-stepper-content step="3">
          <h1>receipt</h1>
        </v-stepper-content>
        <!-- </v-stepper-items> -->
      </v-stepper>
    </v-col>
  </v-row>
</template>

<script>
import CartItems from '~/components/CartItems/CartItems.vue'
import ContactInformationForm from '~/components/ContactInformationForm.vue'

export default {
  components: {
    CartItems,
    ContactInformationForm
  },
  data () {
    return {
      e1: 1,
      isFirebaseLoaded: true
    }
  },
  computed: {
    getCartItems () {
      return this.$store.getters['cart/getCartItems']
    },
    getTotalPrice () {
      return this.$store.getters['cart/getTotalPrice']
    }
  },
  methods: {
  }
  // head () {
  //   return {
  //     script: [
  //       {
  //         src: 'https://www.gstatic.com/firebasejs/7.15.4/firebase-app.js',
  //         defer: true,
  //         async: true,
  //         callback: () => {
  //           this.isFirebaseLoaded = true
  //           console.log('Firebase loaded')
  //           const firebaseConfig = {
  //             apiKey: 'AIzaSyDP90ROVy3KquDr5_At8K3USKLhIiBJvs8',
  //             authDomain: 'medcare-d50c6.firebaseapp.com',
  //             databaseURL: 'https://medcare-d50c6.firebaseio.com',
  //             projectId: 'medcare-d50c6',
  //             storageBucket: 'medcare-d50c6.appspot.com',
  //             messagingSenderId: '320481092894',
  //             appId: '1:320481092894:web:5a033290c2678c7dbf950f',
  //             measurementId: 'G-XSGRXJ8GRS'
  //           }
  //           window.firebase.initializeApp(firebaseConfig)
  //         }
  //       }
  //     ]
  //   }
  // }
}
</script>
