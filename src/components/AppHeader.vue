<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <RouterLink
        :to="{ name: 'home' }"
        class="text-white font-bold uppercase text-2xl mr-4"
        exact-active-class="no-active"
        >Music</RouterLink
      >

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li>
            <RouterLink :to="{ name: 'about' }" class="px-2 text-white">About</RouterLink>
          </li>

          <li v-if="!userStore.isLoggedIn">
            <a class="px-2 text-white" @click.prevent="toggleAuthModal" href="#"
              >Login / Register</a
            >
          </li>
          <template v-else>
            <li>
              <RouterLink :to="{ name: 'manage' }" class="px-2 text-white">Manage</RouterLink>
            </li>
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="signOut">Logout</a>
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapStores } from 'pinia'
import useModalStore from '@/stores/modal'
import useUserStore from '@/stores/user'

export default {
  name: 'AppHeader',
  computed: {
    ...mapStores(useModalStore, useUserStore)
  },
  methods: {
    toggleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen
    },
    signOut() {
      this.userStore.signOut()

      if (this.$route.meta.requireAuth) {
        this.$router.push({ name: 'home' })
      }
    }
  }
}
</script>
