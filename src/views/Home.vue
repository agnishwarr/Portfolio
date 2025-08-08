<script setup>
import HogwartsHomeParallax from "../components/parallax/HogwartsHomeParallax.vue";
import { useHomeStore } from "@/stores/store-home";
import GetInTouchButton from "../components/buttons/GetInTouchButton.vue";
import { useUiStore } from "@/stores/store-ui";

const home = useHomeStore();
const ui = useUiStore();

// Map skills to icons
const techIcons = {
  Python: "mdi-language-python",
  Java: "mdi-language-java",
  SQL: "mdi-database",
  JavaScript: "mdi-language-javascript",
  "Scikit-learn": "mdi-brain",
  Pandas: "mdi-database-outline",
  NumPy: "mdi-matrix",
  Flask: "mdi-flask",
  Hadoop: "mdi-elephant",
  OpenCV: "mdi-camera-iris",
  MySQL: "mdi-database",
  Docker: "mdi-docker",
  Jenkins: "mdi-hammer-wrench",
  "Power BI": "mdi-chart-bar",
  MongoDB: "mdi-leaf",
  HDFS: "mdi-server",
  Canva: "mdi-palette",
  "VS Code": "mdi-microsoft-visual-studio-code",
  GitHub: "mdi-github",
  Kaggle: "mdi-trophy",
  "Google Colab": "mdi-google",
  "Microsoft Office": "mdi-microsoft-office",
  Asana: "mdi-clipboard-list",
  Jira: "mdi-clipboard-text"
};

// Function for category title formatting
const formatCategoryTitle = (key) => {
  return key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ');
};
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

        <!-- Dynamic rendering of skills -->
        <div
          v-for="(category, catKey) in home.content.skills"
          :key="catKey"
          class="mb-4"
        >
          <h4 class="text-subtitle-1 mb-2">{{ formatCategoryTitle(catKey) }}</h4>
          <v-chip-group column>
            <v-chip
              v-for="item in category"
              :key="item"
              color="primary"
              variant="outlined"
              class="ma-1 skill-chip"
            >
              <v-icon left small>{{ techIcons[item] || "mdi-code-tags" }}</v-icon>
              {{ item }}
            </v-chip>
          </v-chip-group>
        </div>
      </div>

      <!-- Get In Touch Button -->
      <v-col class="text-center mt-8">
        <get-in-touch-button />
      </v-col>
    </v-container>
  </v-main>
</template>

<style scoped>
/* Apply Times New Roman to all body text, except headings */
.custom-font *:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6) {
  font-family: "Times New Roman", Times, serif !important;
}

/* Chips also in Times New Roman */
.skill-chip {
  font-family: "Times New Roman", Times, serif !important;
  font-weight: 500;
}
</style>
