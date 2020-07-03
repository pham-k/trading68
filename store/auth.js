import { auth, provider } from '~/plugins/firebase.js'

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
  async signInWithGoogle ({ commit }) {
    await auth
      .signInWithPopup(provider)
      .then((result) => {
      // var token = result.credential.accessToken
        const userId = result.user.uid
        console.log(userId)
        commit('SET_USER', userId)
      })
      .catch((error) => {
        if (error) {
          console.log(error.code)
          console.log(error.message)
          console.log(error.email)
          console.log(error.credential)
        }
      })
  },
  async signInWithEmailAndPassword ({ commit }) {
    await auth.signInWithEmailAndPassword('', '')
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
