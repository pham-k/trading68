import { auth } from '~/plugins/firebase.js'

export const state = () => ({
  user: null
})

export const mutations = {
  SET_USER (state, user) {
    state.user = user
  }
}

export const actions = {
  foo () {
    console.log('foo')
  },
  async signOut ({ commit }) {
    await auth.signOut()
    commit('SET_USER', null)
  },
  async signIn ({ commit }) {
    await auth.signInWithEmailAndPassword('a@a.com', '123456')
      .then((result) => {
        const user = {
          uid: result.user.uid,
          displayName: result.displayName
        }
        return user
      })
      .then((user) => {
        commit('SET_USER', user)
      })
      .catch(function (error) {
        // Handle Errors here.
        console.log(error)
      })
  }
}

export const getters = {
  getUser (state) {
    return state.user
  }
}
