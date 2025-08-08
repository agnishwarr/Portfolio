<script setup>
import HogwartsHomeParallax from "../components/parallax/HogwartsHomeParallax.vue";
import { useHomeStore } from "@/stores/store-home";
import GetInTouchButton from "../components/buttons/GetInTouchButton.vue";
import { useUiStore } from "@/stores/store-ui";

const home = useHomeStore();
const ui = useUiStore();
</script>

<template>
  <v-main>
    <HogwartsHomeParallax />

    <v-container class="mt-md-5 custom-font">
      <!-- About Me Section -->
      <h2 class="my-6 text-h5 text-sm-h5 text-md-h4 text-lg-h4">
        {{ home.content.title }}
      </h2>

      <p
        class="my-5 text-body-1 text-sm-h6 text-md-h6 text-lg-h6"
        v-for="description in home.content.description"
        :key="description"
        :class="{
          'text-grey-lighten-1': ui.getTheme === 'dark',
          'text-grey-darken-1': ui.getTheme === 'light'
        }"
      >
        {{ description }}
      </p>

      <!-- Skills Section -->
      <div class="mt-8">
        <h3 class="text-h6 text-md-h5 mb-4">Skills</h3>

        <!-- Languages -->
        <h4 class="text-subtitle-1 mb-2">Languages</h4>
        <v-chip-group column>
          <v-chip
            v-for="lang in home.content.skills.languages"
            :key="lang"
            color="primary"
            variant="outlined"
            class="ma-1"
          >
            {{ lang }}
          </v-chip>
        </v-chip-group>

        <!-- Frameworks & Libraries -->
        <h4 class="text-subtitle-1 mt-4 mb-2">Frameworks & Libraries</h4>
        <v-chip-group column>
          <v-chip
            v-for="fw in home.content.skills.frameworks_libraries"
            :key="fw"
            color="deep-purple"
            variant="outlined"
            class="ma-1"
          >
            {{ fw }}
          </v-chip>
        </v-chip-group>

        <!-- Tools -->
        <h4 class="text-subtitle-1 mt-4 mb-2">Tools</h4>
        <v-chip-group column>
          <v-chip
            v-for="tool in home.content.skills.tools"
            :key="tool"
            color="cyan"
            variant="outlined"
            class="ma-1"
          >
            {{ tool }}
          </v-chip>
        </v-chip-group>

        <!-- Platforms -->
        <h4 class="text-subtitle-1 mt-4 mb-2">Platforms</h4>
        <v-chip-group column>
          <v-chip
            v-for="platform in home.content.skills.platforms"
            :key="platform"
            color="teal"
            variant="outlined"
            class="ma-1"
          >
            {{ platform }}
          </v-chip>
        </v-chip-group>
      </div>

      <!-- Get In Touch Button -->
      <v-col class="text-center mt-8">
        <get-in-touch-button />
      </v-col>
    </v-container>
  </v-main>
</template>

<style scoped>
/* Force Times New Roman for all body text but keep headings default */
.custom-font *:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6) {
  font-family: "Times New Roman", Times, serif !important;
}

/* Optional: make chips’ text also Times New Roman */
.v-chip {
  font-family: "Times New Roman", Times, serif !important;
  font-weight: 500;
}
</style>
