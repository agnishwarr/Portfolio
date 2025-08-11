<script setup>
import HogwartsProjectParallax from "../components/parallax/HogwartsProjectParallax.vue";
import { useProjectStore } from "@/stores/store-projects";
import { useUiStore } from "@/stores/store-ui";
import ProjectCard from "../components/cards/ProjectCard.vue";

const project = useProjectStore();
const ui = useUiStore();
</script>

<template>
  <v-main>
    <HogwartsProjectParallax />
    <v-container class="mt-md-5">
      <!-- Page Title -->
      <h2 class="my-6 text-h5 text-sm-h5 text-md-h4 text-lg-h4">
        {{ project.content.title }}
      </h2>

      <!-- Intro Paragraphs -->
      <p
        class="my-5 text-body-1 text-sm-h6 text-md-h6 text-lg-h6"
        v-for="(description, index) in project.content.description"
        :key="index"
        :class="{
          'text-grey-lighten-1': ui.getTheme === 'dark',
          'text-grey-darken-1': ui.getTheme === 'light'
        }"
      >
        {{ description }}
      </p>

      <!-- Project Cards -->
      <v-row dense>
        <v-col
          v-for="(item, index) in project.content.list"
          :key="index"
          cols="12"
          sm="12"
          md="6"
          lg="4"
        >
          <ProjectCard :project="item" />
        </v-col>
      </v-row>

      <!-- Experience Section -->
      <div class="experience-section mt-12">
        <h2 class="my-6 text-h5 text-sm-h5 text-md-h4 text-lg-h4">
          {{ project.content.experience.title }}
        </h2>

        <v-card
          flat
          class="pa-6 mb-6 experience-card"
          :class="ui.getTheme === 'dark' ? 'dark-mode' : 'light-mode'"
        >
          <h3 class="mb-2">{{ project.content.experience.roles[0].position }}</h3>
          <p class="text-subtitle-1 font-italic mb-1">
            {{ project.content.experience.roles[0].organization }}
          </p>
          <p class="mb-4">{{ project.content.experience.roles[0].period }}</p>

          <ul>
            <li
              v-for="(resp, i) in project.content.experience.roles[0].responsibilities"
              :key="i"
              class="mb-2"
            >
              {{ resp }}
            </li>
          </ul>
        </v-card>
      </div>
    </v-container>
  </v-main>
</template>

<style scoped>
/* Times New Roman for all body text */
:deep(*:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6)) {
  font-family: "Times New Roman", Times, serif !important;
}

/* Experience section styles */
.experience-section {
  border-top: 2px solid rgba(255, 215, 0, 0.3);
  padding-top: 20px;
}

.experience-card {
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-5px);
}

.dark-mode {
  background-color: #1e1e1e;
  color: white;
}

.light-mode {
  background-color: #ffffff;
  color: black;
}

ul {
  padding-left: 20px;
}

li {
  line-height: 1.6;
}
</style>
