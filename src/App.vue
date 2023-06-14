<template>
  <AppHeader />

  <RouterView v-slot="{ Component }">
    <Transition name="fade">
      <component :is="Component"></component>
    </Transition>
  </RouterView>

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

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
