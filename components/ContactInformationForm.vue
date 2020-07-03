<template>
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
        class="mx-4"
        color="primary"
        :disabled="isDisabled"
        @click="submitForm"
      >
        Submit
      </v-btn>
    </v-row>
  </form>
</template>

<script>
// import * as firebase from 'firebase/app'
// import 'firebase/database'
import { validationMixin } from 'vuelidate'
import { required, maxLength, email, numeric, minLength } from 'vuelidate/lib/validators'

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
    }
  },
  computed: {
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
          name: this.name,
          email: this.email,
          phoneNumber: this.phoneNumber,
          address: this.address,
          date: Date.now(),
          totalPrice: this.totalPrice,
          cartItems: editedCartItems,
          status: 'Pending'
        }
        this.$store.dispatch('cart/postCart', order)
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
    phoneNumber: { required, numeric, maxLength: maxLength(10), minLength: minLength(10) },
    address: { required }
  }
  // beforeMounted () {
  //   const firebaseConfig = {
  //     apiKey: 'AIzaSyDP90ROVy3KquDr5_At8K3USKLhIiBJvs8',
  //     authDomain: 'medcare-d50c6.firebaseapp.com',
  //     databaseURL: 'https://medcare-d50c6.firebaseio.com',
  //     projectId: 'medcare-d50c6',
  //     storageBucket: 'medcare-d50c6.appspot.com',
  //     messagingSenderId: '320481092894',
  //     appId: '1:320481092894:web:5a033290c2678c7dbf950f',
  //     measurementId: 'G-XSGRXJ8GRS'
  //   }
  //   firebase.initializeApp(firebaseConfig)
  //   console.log('[firebase/app] initialized')
  // }
}
</script>
