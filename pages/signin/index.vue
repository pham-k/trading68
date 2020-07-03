<template>
  <v-row justify="center" class="mt-12">
    <!-- <v-card>
      <v-form>
        <v-text-field
          v-model="email"
          label="Email"
          required
        />
        <v-text-field
          v-model="password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          @click:append="show1 = !show1"
        />
      </v-form>
    </v-card> -->
    <v-btn v-if="!getUser" color="primary" @click="signIn">
      Sign in with Google
    </v-btn>
    <div v-else width="100%" >
      <v-btn class="mx-4" outlined color="primary" @click="signOut">
        Sign out
      </v-btn>
      <v-btn class="mx-4" color="primary" to="/admin">
        Go to Admin Page
      </v-btn>
    </div>
  </v-row>
</template>

<script>
// import { auth } from '~/plugins/firebase.js'

export default {
  data () {
    return {
      showPassword: false,
      email: null,
      password: null
    }
  },
  // watch: {
  //   getUser: (val) => {
  //     if (val !== null) {
  //       console.log(val)
  //       this.$router.go('/admin')
  //     }
  //   }
  // },
  computed: {
    getUser () {
      return this.$store.getters['auth/getUser']
    }
  },
  methods: {
    signIn () {
      this.$store.dispatch('auth/signInWithGoogle')
    },
    signOut () {
      this.$store.dispatch('auth/signOut')
    }
  }
}
</script>
