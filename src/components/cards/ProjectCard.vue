<template>
  <v-card elevation="4" class="pa-4" style="height: auto;">
    <v-card-title class="text-h6 mb-2 text-wrap">
      {{ project.title }}
    </v-card-title>

    <v-card-subtitle class="mb-2 text-wrap" style="white-space: normal;">
      {{ project.summary }}
    </v-card-subtitle>

    <v-chip-group column class="mb-3">
      <v-chip
        v-for="(tech, i) in project.tech"
        :key="i"
        variant="outlined"
        size="small"
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
        <v-icon size="14" class="me-2" color="primary">mdi-check-circle</v-icon>
        <v-list-item-title class="text-body-2 text-wrap">
          {{ point }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
defineProps({
  project: Object
});
</script>

<style scoped>
.text-wrap {
  white-space: normal !important;
  overflow-wrap: break-word;
  word-break: break-word;
}
</style>
