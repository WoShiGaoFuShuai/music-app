import { defineStore } from 'pinia'
import { auth, usersCollection } from '@/includes/firebase'

export default defineStore('user', {
  state: () => ({
    isLoggedIn: false
  }),
  actions: {
    async register(values) {
      const userCred = await auth.createUserWithEmailAndPassword(values.email, values.password)

      await usersCollection.doc(userCred.user.uid).set({
        name: values.name,
        email: values.email,
        country: values.country,
        age: values.age
      })

      await userCred.user.updateProfile({
        displayName: values.name
      })

      this.isLoggedIn = true
    },
    async authentication(values) {
      await auth.signInWithEmailAndPassword(values.email, values.password)

      this.isLoggedIn = true
    }
  }
})