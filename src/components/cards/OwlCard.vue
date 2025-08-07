<script setup>
import { ref } from "vue";

let snackbar = ref(false);

defineProps({
  contact: {
    type: Object
  }
});
</script>

<template>
  <form
    action="https://formsubmit.co/agnishwar73@gmail.com"
    method="POST"
    @submit.prevent="
      snackbar = true;
      $el.submit();
    "
  >
    <v-card class="mt-lg-3" variant="tonal">
      <v-card-title class="my-3 my-md-6 my-lg-6 text-h5 text-sm-h5 text-md-h4 text-lg-h4 px-6">
        {{ contact.content.card_title }}
        <v-icon>mdi-owl</v-icon>
      </v-card-title>

      <v-card-text align="center" class="px-6">
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              variant="underlined"
              label="First Name"
              name="first_name"
              required
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              variant="underlined"
              label="Last Name"
              name="last_name"
              required
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              variant="underlined"
              label="Email"
              name="email"
              type="email"
              required
            />
          </v-col>
          <v-col cols="12">
            <v-textarea
              variant="underlined"
              label="Message"
              name="message"
              required
            />
          </v-col>

          <!-- Optional Hidden Fields -->
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://yourdomain.com/thank-you"
          />
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
