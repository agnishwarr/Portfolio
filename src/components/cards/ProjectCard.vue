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
        <v-card flat class="pa-4 back-card">
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
              <v-icon size="16" class="me-2" color="green">
                mdi-check-circle
              </v-icon>
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
  height: 500px; /* slightly taller */
  perspective: 1500px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s ease-in-out;
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
  border-radius: 14px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

/* Front design */
.flip-card-front {
  background: linear-gradient(135deg, #34495e, #2c3e50);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.project-title {
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  line-height: 1.4;
  font-family: "Times New Roman", Times, serif;
}

/* Back design */
.flip-card-back {
  transform: rotateY(180deg);
  overflow-y: auto;
  font-family: "Times New Roman", Times, serif;
}

.flip-card-back.light-mode {
  background: linear-gradient(to bottom, #fdfdfd, #f4f4f4);
  color: black;
}

.flip-card-back.dark-mode {
  background: linear-gradient(to bottom, #1e1e1e, #2a2a2a);
  color: white;
}

.back-card {
  background: transparent !important;
  box-shadow: none;
}

.text-wrap {
  white-space: normal !important;
  overflow-wrap: break-word;
  word-break: break-word;
}
</style>
