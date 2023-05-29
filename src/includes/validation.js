import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate'
import {
  required,
  max,
  min,
  alpha_spaces as AlphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  is_not as excluded
} from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('max', max)
    defineRule('min', min)
    defineRule('alpha_spaces', AlphaSpaces)
    defineRule('email', email)
    defineRule('min_value', minVal)
    defineRule('max_value', maxVal)
    defineRule('confirmed', confirmed)
    defineRule('is_not', excluded)

    defineRule('excluded_country', excluded)
    defineRule('passwords_dismatch', confirmed)
    defineRule('tos', required)

    configure({
      generateMessage: (context) => {
        const messages = {
          required: `The field ${context.field} is required.`,
          min: `The field ${context.field} is too short.`,
          max: `The field ${context.field} is too long.`,
          alpha_spaces: `The field ${context.field} may only contain alphabetical characters and spaces.`,
          email: `The field ${context.field} must be a valid email.`,
          min_value: `The field ${context.field} is too low.`,
          max_value: `The field ${context.field} is too high.`,
          excluded: `You are not allowed to use this value for the field ${context.field}.`,
          excluded_country: `Due to restrictions, we do not accept users from this location.`,
          passwords_dismatch: "The passwords don't match.",
          tos: 'You must accept the Terms of Service'
        }

        const message = messages[context.rule.name]
          ? messages[context.rule.name]
          : `The field ${context.field} is invalid.`

        return message
      }

      // validateOnBlur: true,
      // validateOnChange: true,
      // validateOnInput: false,
      // validateOnModelUpdate: true,
    })
  }
}
