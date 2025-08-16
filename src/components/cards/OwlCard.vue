<script setup>
import { ref } from "vue";

let snackbar = ref(false);
</script>

<template>
  <form 
    name="contact" 
    method="POST" 
    data-netlify="true" 
    netlify-honeypot="bot-field"
    @submit="snackbar = true"
  >
    <!-- Hidden input required for Netlify -->
    <input type="hidden" name="form-name" value="contact" />
    <p style="display:none">
      <label>Don’t fill this out: <input name="bot-field" /></label>
    </p>

    <v-card class="mt-lg-3" variant="tonal">
      <v-card-title class="my-3 my-md-6 my-lg-6 text-h5 px-6">
        Send me a message
        <v-icon>mdi-owl</v-icon>
      </v-card-title>

      <v-card-text align="center" class="px-6">
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field label="First Name" name="first_name" required variant="underlined" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field label="Last Name" name="last_name" required variant="underlined" />
          </v-col>
          <v-col cols="12">
            <v-text-field label="Email" name="email" type="email" required variant="underlined" />
          </v-col>
          <v-col cols="12">
            <v-textarea label="Message" name="message" required variant="underlined" />
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions class="px-6 pb-4">
        <v-btn type="submit" class="nuxt-button-sub" block>
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-snackbar v-model="snackbar" timeout="3000">
      <v-icon>mdi-book-alert</v-icon>
      Your message is flying with the owl! ✉️🦉
    </v-snackbar>
  </form>
</template>
