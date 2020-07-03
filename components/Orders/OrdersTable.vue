<template>
  <v-card flat>
    <v-data-table
      v-model="selectedOrders"
      :headers="headers"
      :items="orders"
      :items-per-page="10"
      :loading="!orders"
      item-key="orderId"
      loading-text="Loading... Please wait"
      show-select
      @click:row="showDetails"
    >
      <template v-slot:item.status="{ item }">
        <v-chip small :color="getStatusColor(item.status)" dark>{{ item.status }}</v-chip>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  props: {
    orders: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      headers: [
        // { text: 'Order ID', value: 'orderId', sortable: false },
        { text: 'Status', value: 'status' },
        { text: 'Name', value: 'name' },
        { text: 'Date', value: 'date' },
        { text: 'Address', value: 'address' },
        { text: 'Email', value: 'email' },
        { text: 'Phone', value: 'phoneNumber' },
        { text: 'Total', value: 'totalPrice' },
        { text: 'a1', value: 'a1' },
        { text: 'a2', value: 'a2' },
        { text: 'a3', value: 'a3' },
        { text: 'a4', value: 'a4' },
        { text: 'a5', value: 'a5' },
        { text: 'a6', value: 'a6' },
        { text: 'a7', value: 'a7' },
        { text: 'a8', value: 'a8' }
      ],
      selectedOrders: []
    }
  },
  methods: {
    getStatusColor (status) {
      if (status === 'Pending') {
        return 'red'
      } else if (status === 'Available') {
        return 'blue'
      } else if (status === 'Delivered') {
        return 'green'
      } else {
        return 'gray'
      }
    },
    showDetails (value) {
      console.log(value.name)
    }
  }
}
</script>
