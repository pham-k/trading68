<template>
  <v-card flat>
    <v-row>
      <v-col cols="12" sm="6" class="d-flex justify-center" align-self="center">
        <v-img
          :src="product.imageUrl"
          max-height="280"
          max-width="280"
        />
      </v-col>
      <v-col cols="12" sm="6" align-self="center">
        <v-card-title class="justify-center text-h5">
          {{ product.title }}
        </v-card-title>
        <v-card-text>
          <p class="text-center text-body-1">
            {{ product.description }}
          </p>
          <p class="text-center font-weight-bold text-body-1">
            CA ${{ product.price }}
          </p>
        </v-card-text>
        <v-card-actions class="justify-center align-start">
          <!-- <v-row> -->
          <v-btn
            outlined
            small
            color="primary"
            height="40"
            class="mr-4"
            @click="quantityMinus"
          >
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <v-text-field
            v-model="quantity"
            :error-messages="quantityErrors"
            required
            outlined
            dense
            class="foo"
            @input="$v.quantity.$touch()"
            @blur="$v.quantity.$touch()"
          />
          <v-btn
            outlined
            small
            color="primary"
            height="40"
            class="ml-4"
            @click="quantityPlus"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <!-- </v-row>
          <v-row> -->
          <v-btn color="primary" height="40" class="ml-6 px-4" @click="addToCart">
            <v-icon small>
              mdi-cart-plus
            </v-icon>
            Add {{ quantity }}
          </v-btn>
          <!-- </v-row> -->
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
  <!-- <v-row>
    <v-col
      cols="12"
      sm="10"
      offset-sm="1"
      md="8"
      offset-md="2"
      lg="8"
      offset-lg="2"
    >
      <v-card rounded class="px-4">
        <v-row>
          <v-col
            cols="10"
            offset="1"
            sm="8"
            offset-sm="2"
            lg="6"
            offset-lg="3"
            align-self="center"
            class="d-flex justify-center"
          >
            <v-img
              :src="product.imageUrl"
              max-height="200"
              max-width="200"
            />
          </v-col>
          <v-col
            cols="12"
            md="8"
            offset-md="2"
            lg="6"
            offset-lg="3"
          >
            <v-card-title class="justify-center text-h5">
              {{ product.title }}
            </v-card-title>
            <v-card-text>
              <p class="text-center text-body-1">
                {{ product.description }}
              </p>
              <p class="text-center font-weight-bold text-body-1">
                CA ${{ product.price }}
              </p>
            </v-card-text>
            <v-row class="" justify="center">
              <v-col cols="3" align-self="center">
                <v-row>
                  <v-spacer />
                  <v-btn outlined small color="primary" class="mr-4" @click="quantityMinus">
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                </v-row>
              </v-col>
              <v-col cols="3">
                <v-text-field
                  v-model="quantity"
                  :error-messages="quantityErrors"
                  label="Quantity"
                  required
                  @input="$v.quantity.$touch()"
                  @blur="$v.quantity.$touch()"
                />
              </v-col>
              <V-col cols="3" align-self="center">
                <v-btn outlined small color="primary" @click="quantityPlus">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row class="">
              <v-spacer />
              <v-btn color="primary" @click="addToCart">
                Add {{ quantity }} to cart
              </v-btn>
              <v-spacer />
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row> -->
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, numeric } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      quantity: 1
    }
  },
  computed: {
    quantityErrors () {
      const errors = []
      if (!this.$v.quantity.$dirty) {
        return errors
      }
      !this.$v.quantity.numeric && errors.push('Must be a number')
      !this.$v.quantity.required && errors.push('Required')
      return errors
    }
  },
  methods: {
    quantityPlus () {
      this.quantity += 1
    },
    quantityMinus () {
      this.quantity -= 1
    },
    addToCart () {
      const order = {
        item: Object.assign({}, this.product),
        quantity: this.quantity,
        isAdd: true
      }
      this.$store.commit('cart/updateCart', order)
    }
  },
  validations: {
    quantity: { required, numeric }
  }
}
</script>

<style scoped>
  .foo {
    max-width: 64px;
  }
  .v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: none;
  }
  .v-container {
    box-shadow: none;
  }
  /* #image-background {
    background: #E0E0E0;
  } */
  .v-text-field.v-text-field--enclosed .v-text-field__details {
    display: none;
  }
</style>
