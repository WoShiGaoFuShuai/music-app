<template>
  <div
    v-if="login_show_alert"
    class="text-white text-center font-bold p-4 rounded mb-4"
    :class="login_alert_variant"
  >
    {{ login_alert_msg }}
  </div>
  <vee-form @submit="login" :validation-schema="loginSchema">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        type="email"
        name="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field :bails="false" name="password" #default="{ field, errors }">
        <input
          type="password"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Password"
          v-bind="field"
        />

        <div class="text-red-600" v-for="error in errors" :key="error">
          {{ error }}
        </div>
      </vee-field>
    </div>
    <button
      type="submit"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
      :disabled="login_in_submission"
    >
      Submit
    </button>
  </vee-form>
</template>

<script>
import { ErrorMessage } from 'vee-validate'

export default {
  name: 'LoginForm',
  components: {
    ErrorMessage
  },

  data() {
    return {
      loginSchema: {
        email: 'required|email|min:5|max:100',
        password: 'required|min:9|max:100|is_not:password'
      },
      login_in_submission: false,
      login_show_alert: false,
      login_alert_variant: 'bg-blue-500',
      login_alert_msg: 'Please wait! You are being logging in'
    }
  },
  methods: {
    login(values) {
      this.login_show_alert = true
      this.login_in_submission = true
      this.login_alert_variant = 'bg-green-500'
      console.log(values)
    }
  }
}
</script>
