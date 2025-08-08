<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      
      <!-- Front -->
      <div class="flip-card-front">
        <h3 class="project-title">{{ project.title }}</h3>
      </div>

      <!-- Back -->
      <div
        class="flip-card-back"
        :class="ui.getTheme === 'dark' ? 'dark-mode' : 'light-mode'"
      >
        <v-card
          flat
          class="pa-4"
          :color="ui.getTheme === 'dark' ? '#1e1e1e' : '#ffffff'"
        >
          <v-card-subtitle class="mb-3 text-wrap">
            {{ project.summary }}
          </v-card-subtitle>

          <v-chip-group column class="mb-4">
            <v-chip
              v-for="(tech, i) in project.tech"
              :key="i"
              variant="outlined"
              size="small"
              color="cyan"
              class="me-1"
            >
              {{ tech }}
            </v-chip>
          </v-chip-group>

          <v-list dense>
            <v-list-item
              v-for="(point, i) in project.highlights"
              :key="i"
              class="py-1"
            >
              <v-icon size="16" class="me-2" color="green">mdi-check-circle</v-icon>
              <v-list-item-title class="text-body-2 text-wrap">
                {{ point }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useUiStore } from "@/stores/store-ui";
defineProps({
  project: Object
});
const ui = useUiStore();
</script>

<style scoped>
.flip-card {
  background-color: transparent;
  width: 100%;
  height: 480px;
  perspective: 1200px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
  background: linear-gradient(135deg, #2c3e50, #1a252f);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 12px;
}

.project-title {
  font-size: 1.4rem;
  text-align: center;
  font-weight: bold;
  line-height: 1.4;
  font-family: "Times New Roman", Times, serif;
}

.flip-card-back {
  transform: rotateY(180deg);
  border-radius: 12px;
  overflow-y: auto;
  padding: 0;
  font-family: "Times New Roman", Times, serif;
}

/* Light and Dark mode styles */
.flip-card-back.light-mode {
  background-color: #ffffff;
  color: black;
}

.flip-card-back.dark-mode {
  background-color: #1e1e1e;
  color: white;
}

.text-wrap {
  white-space: normal !important;
  overflow-wrap: break-word;
  word-break: break-word;
}
</style>
