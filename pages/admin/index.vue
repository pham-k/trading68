<template>
  <v-row v-if="getError === null">
    <v-col cols="12">
      <v-combobox
        v-model="selectedChips"
        :items="chips"
        chips
        clearable
        multiple
        prepend-icon="mdi-filter"
        solo
      >
        <template v-slot:selection="{ attrs, item, select, selected }">
          <v-chip
            v-bind="attrs"
            :input-value="selected"
            close
            @click="select"
            @click:close="removeChip(item)"
          >
            <strong>{{ item }}</strong>&nbsp;
            <span>(interest)</span>
          </v-chip>
        </template>
      </v-combobox>
    </v-col>
    <v-col cols="12">
      <orders-table :orders="getOrdersByStatus" />
    </v-col>
  </v-row>
  <v-card v-else color="error" dark class="pa-4 my-6">
    <v-card-text class="text-center text-h6">
      {{ getError }}
    </v-card-text>
  </v-card>
</template>

<script>
import OrdersTable from '~/components/Orders/OrdersTable.vue'
export default {
  middleware: 'auth-guard',
  components: {
    OrdersTable
  },
  data () {
    return {
      selectedChips: ['Pending', 'Available'],
      chips: ['Pending', 'Available', 'Delivered', 'Archived']
    }
  },
  computed: {
    getOrdersByStatus () {
      return this.$store.getters['admin/getOrdersByStatus'](this.selectedChips)
    },
    getError () {
      return this.$store.getters['admin/getError']
    }
  },
  // watch: {
  //   selectedChips: (val) => {
  //     console.log(val)
  //   }
  // },
  created () {
    this.$store.dispatch('admin/fetchOrders')
  },
  methods: {
    removeChip (item) {
      this.selectedChips.splice(this.selectedChips.indexOf(item), 1)
      this.selectedChips = [...this.selectedChips]
    }
  }
}
</script>
