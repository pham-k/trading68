<template>
  <v-row>
    <v-btn @click="signIn">Sign in</v-btn>
    <v-btn @click="signOut">Sign out</v-btn>
    <v-btn to="/admin">Admin</v-btn>
    <div>{{ getUser }}</div>
  </v-row>
</template>

<script>
// import { auth } from '~/plugins/firebase.js'

export default {
  computed: {
    getUser () {
      return this.$store.getters['auth/getUser']
    }
  },
  methods: {
    signIn () {
      this.$store.dispatch('auth/signIn')
    },
    signOut () {
      this.$store.dispatch('auth/signOut')
    }
  }
}
</script>
