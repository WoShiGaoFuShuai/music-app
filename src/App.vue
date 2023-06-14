<template>
  <AppHeader />

  <RouterView></RouterView>

  <Auth />

  <AppPlayer />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import Auth from '@/components/Auth.vue'
import AppPlayer from '@/components/AppPlayer.vue'
import { auth } from './includes/firebase'
import { mapWritableState } from 'pinia'
import useUserStore from '@/stores/user'

export default {
  name: 'App',
  components: {
    AppHeader,
    Auth,
    AppPlayer
  },
  computed: {
    ...mapWritableState(useUserStore, ['isLoggedIn'])
  },

  created() {
    if (auth.currentUser) {
      this.isLoggedIn = true
    }
  }
}
</script>
