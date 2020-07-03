import * as firebase from 'firebase/app'
import 'firebase/database'

export const state = () => ({
  orders: [],
  error: null
})

export const mutations = {
  SET_ORDERS (state, orders) {
    state.orders = orders
  },
  UPDATE_ORDERS_STATUS (state, payload) {
    state.orders.map((order) => {
      const match = payload.selectedOrders.find(so => so.orderId === order.orderId)
      if (match) {
        order.status = payload.status
        order.updatedDate = new Date(payload.updatedDate).toLocaleDateString('en-CA')
      }
    })
  },
  SET_ERROR (state, payload) {
    if (payload !== null) {
      state.error = 'Permission denied'
    }
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
            if (key === 'createdDate' | key === 'updatedDate') {
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
        commit('SET_ERROR', null)
      })
      .catch((error) => {
        commit('SET_ERROR', error)
      })
  },
  async updateOrdersStatus ({ commit }, payload) {
    const updatedDate = Date.now()
    payload.updatedDate = updatedDate
    for await (const order of payload.selectedOrders) {
      const updates = {}
      updates['orders/' + order.orderId + '/status/'] = payload.status
      updates['orders/' + order.orderId + '/updatedDate/'] = updatedDate
      firebase
        .database()
        .ref()
        .update(updates, (error) => {
          if (error) {
            console.log(error)
          } else {
            console.log('[admin/updateOrderStatus] success')
            commit('UPDATE_ORDERS_STATUS', payload)
          }
        })
    }
  }
}

export const getters = {
  getOrders (state) {
    return state.orders
  },
  getOrdersByStatus: state => (status) => {
    return state.orders.filter(order => status.includes(order.status))
  },
  getError (state) {
    return state.error
  }
}
