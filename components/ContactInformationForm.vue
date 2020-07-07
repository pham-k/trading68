<template>
  <!-- <div> -->
  <form>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    />
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    />
    <v-text-field
      v-model="phoneNumber"
      :error-messages="phoneNumberErrors"
      label="Phone Number"
      required
      @input="$v.phoneNumber.$touch()"
      @blur="$v.phoneNumber.$touch()"
    />
    <v-text-field
      v-model="address"
      :error-messages="addressErrors"
      label="Address"
      required
      class="mb-8"
    />
    <v-row>
      <v-spacer />
      <v-btn class="mx-2" outlined @click="clear">
        Clear
      </v-btn>
      <v-btn
        class="mr-4 ml-2"
        color="primary"
        :disabled="isDisabled"
        @click="submitForm"
      >
        Submit
      </v-btn>
    </v-row>
  </form>
    <!-- <v-snackbar
      v-model="snackbar"
      timeout="5000"
      bottom
      app
    >
      {{ getSubmitStatus }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          to="/"
          @click="snackbar = false"
        >
          Main Page
        </v-btn>
      </template>
    </v-snackbar> -->
  <!-- </div> -->
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, numeric } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  props: {
    cartItems: {
      type: Array,
      required: true
    },
    totalPrice: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      name: '',
      email: '',
      phoneNumber: '',
      address: ''
      // snackbar: false
    }
  },
  computed: {
    // getSubmitStatus () {
    //   const foo = this.$store.getters['cart/getSubmitStatus']
    //   if (foo === 'success') {
    //     return 'Your order has been recorded'
    //   } else {
    //     return 'Error'
    //   }
    // },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) {
        return errors
      }
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) {
        return errors
      }
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    phoneNumberErrors () {
      const errors = []
      if (!this.$v.phoneNumber.$dirty) {
        return errors
      }
      !this.$v.phoneNumber.numeric && errors.push('Must be valid phone number')
      !this.$v.phoneNumber.required && errors.push('Phone number is required')
      return errors
    },
    addressErrors () {
      const errors = []
      if (!this.$v.address.$dirty) {
        return errors
      }
      !this.$v.address.required && errors.push('Address is required')
      return errors
    },
    isDisabled () {
      return this.$v.$invalid
    }
  },
  methods: {
    submitForm () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        // const orderRef = firebase.database().ref('orders')
        // create cart items
        const editedCartItems = []
        this.cartItems.forEach((item) => {
          const editedCartItem = {
            productId: '',
            title: '',
            price: 0,
            quantity: 0
          }
          editedCartItem.productId = item.productId
          editedCartItem.title = item.title
          editedCartItem.price = item.price
          editedCartItem.quantity = item.quantity
          editedCartItems.push(editedCartItem)
        })

        // create order
        const order = {
          customerName: this.name,
          customerEmail: this.email,
          customerPhone: this.phoneNumber,
          customerAddress: this.address,
          createdDate: Date.now(),
          priceTotal: this.totalPrice,
          cartItems: editedCartItems,
          status: 'Pending',
          updatedDate: Date.now()
        }
        this.$store.dispatch('cart/postCart', order)
        // this.snackbar = true
        this.$router.push('/order')
        // TODO show pending, success, error status
      }
    },
    clear () {
      this.name = ''
      this.phoneNumber = ''
      this.email = ''
      this.address = ''
    }
  },
  validations: {
    name: { required },
    email: { required, email },
    phoneNumber: { required, numeric },
    address: { required }
  }
}
</script>
