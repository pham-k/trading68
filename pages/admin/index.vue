<template>
  <v-row>
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
      selectedChips: [],
      chips: ['Pending', 'Available', 'Delivered', 'Archived']
    }
  },
  watch: {
    selectedChips: (val) => {
      console.log(val)
    }
  },
  computed: {
    getOrdersByStatus () {
      return this.$store.getters['admin/getOrdersByStatus'](this.selectedChips)
    }
  },
  methods: {
    removeChip (item) {
      this.selectedChips.splice(this.selectedChips.indexOf(item), 1)
      this.selectedChips = [...this.selectedChips]
    }
  },
  created () {
    this.$store.dispatch('admin/fetchOrders')
  }
}
</script>
