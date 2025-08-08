<script setup>
import HogwartsProjectParallax from "../components/parallax/HogwartsProjectParallax.vue";
import { useProjectStore } from "@/stores/store-projects";
import { useUiStore } from "@/stores/store-ui";
import ProjectCard from "../components/cards/ProjectCard.vue"; // ✅ Use a new card component for each project

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
    </v-container>
  </v-main>
</template>

<style scoped>
/* ✅ Make all non-heading text Times New Roman, even inside child components */
:deep(*:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6)) {
  font-family: "Times New Roman", Times, serif !important;
}
</style>
