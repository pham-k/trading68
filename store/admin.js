import * as firebase from 'firebase/app'
import 'firebase/database'

export const state = () => ({
  orders: []
})

export const mutations = {
  SET_ORDERS (state, orders) {
    state.orders = orders
  }
}

export const actions = {
  async fetchOrders ({ commit, rootGetters }) {
    await firebase
      .database()
      .ref('orders')
      .once('value')
      .then((dataSnapshot) => {
        const orders = []
        const productIds = rootGetters['products/getProductIds']
        const data = dataSnapshot.val()
        for (const [key, value] of Object.entries(data)) {
          const order = {}
          productIds.forEach((id) => {
            order[id] = 0
          })
          order.orderId = key
          Object.keys(value).forEach((key) => {
            if (key === 'date') {
              order[key] = new Date(value[key]).toLocaleDateString('en-CA')
            } else if (key === 'cartItems') {
              const cartItems = value[key]
              cartItems.forEach((item) => {
                const productId = item.productId
                order[productId] = item.quantity
              })
            } else {
              order[key] = value[key]
            }
          })
          orders.push(order)
        }
        commit('SET_ORDERS', orders)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const getters = {
  getOrders (state) {
    return state.orders
  },
  getOrdersByStatus: state => (status) => {
    return state.orders.filter(order => status.includes(order.status))
  }
}
