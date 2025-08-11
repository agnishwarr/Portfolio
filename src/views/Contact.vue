<script setup>
import HogwartsContactParallax from "../components/parallax/HogwartsContactParallax.vue";
import { useContactStore } from "@/stores/store-contact";
import { useUiStore } from "@/stores/store-ui";
import OwlCard from "@/components/cards/OwlCard.vue";

const contact = useContactStore();
const ui = useUiStore();
</script>

<template>
  <v-main>
    <HogwartsContactParallax />
    <v-container class="mt-md-5">
      <v-row class="my-6" align="center">
        <v-col cols="12" sm="6" md="6" lg="6">
          <h2 class="mb-6 text-h5 text-sm-h5 text-md-h4 text-lg-h4">
            {{ contact.content.title }}
          </h2>

          <!-- Description Paragraphs -->
          <p
            class="my-5 text-body-1 text-sm-h6 text-md-h6 text-lg-h6 contact-text"
            v-for="description in contact.content.description"
            :key="description"
            :class="{
              'text-grey-lighten-1': ui.getTheme === 'dark',
              'text-grey-darken-1': ui.getTheme === 'light'
            }"
          >
            {{ description }}
          </p>

          <!-- Contact Info Box -->
          <v-card
            class="pa-4 mt-6 contact-box"
            :color="ui.getTheme === 'dark' ? '#1e1e1e' : '#f9f9f9'"
            flat
          >
            <v-list dense>
              <v-list-item>
                <v-icon class="me-2" color="green">mdi-map-marker</v-icon>
                <v-list-item-title>{{ contact.content.contact_info.location }}</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-icon class="me-2" color="blue">mdi-phone</v-icon>
                <v-list-item-title>{{ contact.content.contact_info.phone }}</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-icon class="me-2" color="red">mdi-email</v-icon>
                <v-list-item-title>{{ contact.content.contact_info.email }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>

        <!-- Owl Card -->
        <v-col cols="12" sm="6" md="6" lg="6">
          <OwlCard :contact="contact" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style scoped>
.contact-text {
  font-family: "Times New Roman", Times, serif !important;
}

.contact-box {
  border-radius: 10px;
  font-family: "Times New Roman", Times, serif;
}
</style>
