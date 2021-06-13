<template>
  <div class="crt-paper-cont paper-padd clear-mrg">
    <div class="padd-box">
      <h2 class="title-lg text-upper">contact me</h2>

      <div class="padd-box-sm">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          class="contact-form"
          @submit.prevent="handleSubmit"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div class="form-group">
            <label class="form-label" for="author">Your Name</label>

            <div class="form-item-wrap">
              <input
                id="author"
                v-model="author"
                class="form-item"
                :class="{ error: $v.author.$error }"
                name="author"
                type="text"
              />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="email">Your E-mail</label>

            <div class="form-item-wrap">
              <input
                id="email"
                v-model="email"
                class="form-item"
                :class="{ error: $v.email.$error }"
                type="email"
                name="email"
              />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="subject">Subject</label>

            <div class="form-item-wrap">
              <input
                id="subject"
                v-model="subject"
                class="form-item"
                :class="{ error: $v.subject.$error }"
                type="text"
                name="subject"
              />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="message">Your message</label>

            <div class="form-item-wrap">
              <textarea
                id="message"
                v-model="message"
                class="form-item"
                :class="{ error: $v.message.$error }"
                name="message"
              ></textarea>
            </div>
          </div>

          <div class="form-submit form-item-wrap">
            <input
              class="btn btn-primary btn-lg crtFormSubmit"
              type="submit"
              value="Send message"
            />
          </div>
        </form>
      </div>
    </div>
    <!-- .padd-box -->

    <!-- TODO: Add map component -->

    <flash-message :position="'right bottom'"></flash-message>
  </div>
</template>

<script>
import Vue from 'vue'
import { required, email } from 'vuelidate/lib/validators'

const initialState = {
  author: '',
  email: '',
  subject: '',
  message: '',
}

export default Vue.extend({
  data() {
    return { ...initialState }
  },
  validations: () => ({
    author: {
      required,
    },
    email: {
      required,
      email,
    },
    subject: {
      required,
    },
    message: {
      required,
    },
  }),
  methods: {
    async handleSubmit(event) {
      const params = new URLSearchParams([
        ...new FormData(event.target).entries(),
      ])

      params.append('form-name', 'contact')
      this.$v.$touch()
      if (!this.$v.$invalid) {
        try {
          const { status } = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params.toString(),
          })

          if (status === 200) {
            this.showSuccessMessage()
            this.resetForm()
          } else {
            throw new Error(status)
          }
        } catch (error) {
          console.error(error)
          this.showErrorMessage()
        }
      }
    },
    showSuccessMessage() {
      this.flashMessage.success({
        title: 'Your message has been successfully sent!',
        message:
          "Thanks for your message! I'll get back to you as soon as I can :)",
      })
    },
    showErrorMessage() {
      this.flashMessage.error({
        title: 'Message not sent!',
        message: 'Something went wrong! Please try again!',
      })
    },
    resetForm() {
      Object.assign(this.$data, initialState)
      this.$v.$reset()
    },
  },
})
</script>
