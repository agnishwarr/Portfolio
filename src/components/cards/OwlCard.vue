<script setup>
import { ref } from "vue";

let snackbar = ref(false);
</script>

<template>
  <form
    class="contact-form"
    action="https://formsubmit.co/agnishwar73@gmail.com"
    method="POST"
    @submit="snackbar = true"
  >
    <!-- FormSubmit hidden configs -->
    <input type="hidden" name="_subject" value="Portfolio Contact" />
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_template" value="table" />
    <!-- Honeypot -->
    <input
      type="text"
      name="_honey"
      style="display:none"
      tabindex="-1"
      autocomplete="off"
      aria-hidden="true"
    />

    <!-- Card -->
    <v-card class="mt-lg-3" variant="tonal">
      <v-card-title
        class="my-3 my-md-6 my-lg-6 text-h5 px-6"
      >
        Send me a message
        <v-icon class="ml-2">mdi-owl</v-icon>
      </v-card-title>

      <v-card-text align="center" class="px-6">
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              name="first_name"
              label="First Name"
              required
              variant="underlined"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              name="last_name"
              label="Last Name"
              required
              variant="underlined"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              name="email"
              type="email"
              label="Your Email"
              required
              variant="underlined"
            />
          </v-col>
          <v-col cols="12">
            <v-textarea
              name="message"
              label="Your Message"
              rows="6"
              required
              variant="underlined"
            />
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions class="px-6 pb-4">
        <v-btn type="submit" class="nuxt-button-sub" block color="primary">
          <v-icon start>mdi-send</v-icon>
          Send Message
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- Snackbar confirmation -->
    <v-snackbar v-model="snackbar" timeout="3000">
      <v-icon class="mr-2">mdi-book-alert</v-icon>
      Your message is flying with the owl! ✉️🦉
    </v-snackbar>
  </form>
</template>

<style scoped>
.contact-form {
  width: 100%;
}
.sent-note {
  opacity: 0.7;
  font-size: 0.9rem;
  margin-top: 8px;
}
</style>
