<script setup>
</script>

<template>
  <v-footer>
    <v-row justify="center" no-gutters>
      <v-col class="text-center my-4" cols="12">
        © {{ new Date().getFullYear() }} • Built by
        <strong>Agnishwar Raychaudhuri</strong> •
        <a
          href="https://drive.google.com/file/d/1oj_wKrFnbMp6J-zLMlCgHiavwIqAzbCm/view?usp=drive_link"
          target="_blank"
          class="resume-link"
        >
          Resume
        </a>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped>
v-footer {
  background-color: #121212;
  color: #ccc;
  font-size: 0.9rem;
}

strong {
  color: #00fa95;
}

.resume-link {
  color: #ccc;
  text-decoration: none;
  margin-left: 6px;
  transition: color 0.3s;
}

.resume-link:hover {
  color: #00fa95;
}
</style>
