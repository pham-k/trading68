export const state = () => ({
  products: [
    {
      productId: 'AA01',
      title: 'Product 1',
      price: 0.99,
      description: 'Awesome Product 1!',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FN95-Respirator-Mask-PNG-Picture-180x180.png&f=1&nofb=1',
      featured: true
    },
    {
      productId: 'AA02',
      title: 'Product 2',
      price: 2.49,
      description: 'Awesome Product 2!',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FSurgical-Mask-180x180.png&f=1&nofb=1',
      featured: true
    },
    {
      productId: 'AA03',
      title: 'Product 3',
      price: 1.5,
      description: 'Awesome Product 3!',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FSurgical-Mask-180x180.png&f=1&nofb=1',
      featured: true
    },
    {
      productId: 'AA04',
      title: 'Product 4',
      price: 3.99,
      description: 'Awesome Product 4!',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FN95-Respirator-Mask-PNG-Picture-180x180.png&f=1&nofb=1',
      featured: true
    }
    // {
    //   productId: 'a5',
    //   title: 'Product 5',
    //   price: 8,
    //   description: 'Awesome Product 5!',
    //   imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FSurgical-Mask-180x180.png&f=1&nofb=1',
    //   featured: true
    // },
    // {
    //   productId: 'a6',
    //   title: 'Product 6',
    //   price: 8,
    //   description: 'Awesome Product 6!',
    //   imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FN95-Respirator-Mask-PNG-Picture-180x180.png&f=1&nofb=1',
    //   featured: true
    // },
    // {
    //   productId: 'a7',
    //   title: 'Product 7',
    //   price: 8,
    //   description: 'Awesome Product 7!',
    //   imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FSurgical-Mask-180x180.png&f=1&nofb=1',
    //   featured: false
    // },
    // {
    //   productId: 'a8',
    //   title: 'Product 8',
    //   price: 8,
    //   description: 'Awesome Product 8!',
    //   imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FN95-Respirator-Mask-PNG-Picture-180x180.png&f=1&nofb=1',
    //   featured: false
    // }
  ],
  loading: true
})

export const mutations = {
  setProducts (state, products) {
    state.products = products
  },
  setLoading (state, payload) {
    state.loading = payload
  }
}

// export const actions = {
//   setProducts (vuexContext, fetchedProducts) {
//     // flatten data structure
//     let flattenedProducts = []
//     fetchedProducts.map(product => {
//       let flattenedProduct = {}
//       flattenedProduct.title = product.title
//       flattenedProduct.description = product.description
//       flattenedProduct.price = product.price
//       flattenedProduct.name = product.name
//       flattenedProduct.feature = product.feature
//       flattenedProduct.category = product.category
//       // create new imageURL_sizexsize properties
//       // bug in the future
//       product.image.map(img => {
//         let propertyName = 'imageURL_' + img.width.toString() + 'x' + img.width.toString()
//         // console.log('[store/product.js] ' + propertyName)
//         flattenedProduct[propertyName] = img.url
//       })
//       // console.log('[store/product.js] ' + flattenedProduct)
//       flattenedProducts.push(flattenedProduct)
//     })

//     vuexContext.commit('setProducts', flattenedProducts)
//     vuexContext.commit('setLoading', false)
//   }
// }

export const getters = {
  getProducts (state) {
    return state.products
  },
  getProductByName: state => (name) => {
    return state.products.find(product => product.name === name)
  },
  getProductsByFeature: state => (featured) => {
    return state.products.filter(product => product.featured === featured)
  },
  getProductById: state => (id) => {
    return state.products.filter(product => product.productId === id)
  },
  getProductIds (state) {
    const productIds = []
    state.products.forEach((product) => {
      productIds.push(product.productId)
    })
    return productIds
  }
}
