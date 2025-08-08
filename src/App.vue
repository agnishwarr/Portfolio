<script setup>
import { onMounted } from "vue";
import TopBar from "./components/navbars/TopBar.vue";
import SideBar from "./components/navbars/SideBar.vue";
import Footer from "./components/footer/Footer.vue";

onMounted(() => {
  window.addEventListener("mousemove", (e) => {
    const swish = document.createElement("div");
    swish.className = "cursor-swish";
    swish.style.left = `${e.clientX}px`;
    swish.style.top = `${e.clientY}px`;
    document.body.appendChild(swish);

    setTimeout(() => swish.remove(), 600);
  });
});
</script>

<template>
  <v-app>
    <TopBar />
    <SideBar />
    <RouterView />
    <Footer />
  </v-app>
</template>

<style>
/* Magic Wand Cursor */
body {
  cursor: url("/images/wand.png") 4 12, auto;
}

a,
button,
.v-btn,
.v-chip {
  cursor: url("/images/wand.png") 4 12, pointer;
}

/* Swish Trail */
.cursor-swish {
  position: fixed;
  width: 14px;
  height: 14px;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.9), rgba(255, 215, 0, 0));
  border-radius: 50%;
  pointer-events: none;
  mix-blend-mode: screen;
  filter: blur(2px);
  animation: swish-fade 0.6s forwards;
  transform: translate(-50%, -50%);
}

@keyframes swish-fade {
  to {
    opacity: 0;
    transform: scale(2);
  }
}
</style>
