<template>
  <div>
    <v-row class="mb-2 px-3">
      <v-menu top close-on-click>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            :disabled="selectedOrders.length < 1"
            v-on="on"
            outlined
          >
            <v-icon left small>mdi-pencil</v-icon>
            {{ selectedStatus ? selectedStatus : 'Edit status' }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in statusListItem"
            :key="index"
            @click="selectedStatus = item.title"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer />
      <v-btn color="primary" @click="changeOrdersStatus">
        Update
      </v-btn>
    </v-row>
    <!-- <v-card flat> -->
    <v-data-table
      v-model="selectedOrders"
      :headers="headers"
      :items="orders"
      :items-per-page="10"
      :loading="!orders"
      item-key="orderId"
      loading-text="Loading... Please wait"
      show-select
    >
      <template v-slot:item.status="{ item }">
        <v-chip small :color="getStatusColor(item.status)" dark>
          {{ item.status }}
        </v-chip>
      </template>
    </v-data-table>
    <!-- </v-card> -->
  </div>
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
        { text: 'Customer', value: 'customerName' },
        { text: 'Created', value: 'createdDate' },
        { text: 'Address', value: 'customerAddress' },
        { text: 'Email', value: 'customerEmail' },
        { text: 'Phone', value: 'customerPhone' },
        { text: 'Total', value: 'priceTotal' },
        { text: 'AA01', value: 'AA01' },
        { text: 'AA02', value: 'AA02' },
        { text: 'AA03', value: 'AA03' },
        { text: 'AA04', value: 'AA04' },
        { text: 'Updated', value: 'updatedDate' }
      ],
      selectedOrders: [],
      statusListItem: [
        { title: 'Pending' },
        { title: 'Available' },
        { title: 'Delivered' },
        { title: 'Archived' }
      ],
      selectedStatus: null
    }
  },
  // watch: {
  //   selectedOrders: (val) => {
  //     console.log(val)
  //   }
  // },
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
    // showDetails (value) {
    //   console.log(value.name)
    // },
    changeOrdersStatus () {
      const payload = {
        selectedOrders: this.selectedOrders,
        status: this.selectedStatus
      }
      this.$store.dispatch('admin/updateOrdersStatus', payload)
      this.selectedOrders = []
    }
  }
}
</script>
