import * as firebase from 'firebase/app'
import 'firebase/database'

export const state = () => ({
  cartItems: [
    // {
    //   productId: 'a1',
    //   title: 'Product 1',
    //   price: 8,
    //   description: 'Awesome Product 1!',
    //   imageUrl: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
    //   feature: true,
    //   quantity: 3
    // },
    // {
    //   productId: 'a2',
    //   title: 'Product 2',
    //   price: 8,
    //   description: 'Awesome Product 2!',
    //   imageUrl: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
    //   feature: true,
    //   quantity: 4
    // },
    // {
    //   productId: 'a3',
    //   title: 'Product 3',
    //   price: 8,
    //   description: 'Awesome Product 3!',
    //   imageUrl: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
    //   feature: true,
    //   quantity: 1
    // }
  ]
})

export const mutations = {
  updateCart (state, { item, quantity, isAdd }) {
    const record = state.cartItems.find(element => element.productId === item.productId)
    if (record) {
      if (isAdd) {
        record.quantity += quantity
      } else {
        record.quantity = quantity
      }
    } else {
      state.cartItems.push({
        ...item,
        quantity
      })
    }
    // console.log('cart/updateCart', state.cartItems)
  },
  setCart (state, products) {
    if (products) {
      state.cartItems = products
    }
  },
  removeCartItem (state, item) {
    const record = state.cartItems.find(element => element.productId === item.productId)
    state.cartItems.splice(state.cartItems.indexOf(record), 1)
  }
}

export const actions = {
  async postCart ({ commit }, order) {
    // TODO show pending, success, error status
    const orderRef = firebase.database().ref('orders')
    await orderRef
      .push(order)
      .then((result) => {
        commit('setCart', [])
        // console.log('[firebase/database] Write successfully')
        // console.log(result)
        // TODO return order information
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const getters = {
  getCartItems (state) {
    return state.cartItems
  },
  getCartItemsQuantity (state) {
    let quantity = 0
    state.cartItems.forEach((item) => {
      quantity += item.quantity
    })
    return quantity
  },
  getTotalPrice (state) {
    let totalPrice = 0
    state.cartItems.forEach((item) => {
      totalPrice += item.quantity * item.price
    })
    return totalPrice.toFixed(2)
  }
}
