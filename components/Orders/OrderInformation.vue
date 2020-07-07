<template>
  <v-card>
    <v-card-title>
      Order Information
    </v-card-title>
    <v-card-text>
      {{ order.customerName }}
      {{ order.customerEmail }}
      {{ order.customerAddress }}
      {{ order.createdDate }}
      {{ order.totalPrice }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
      required: true
    }
  }
}
</script>
