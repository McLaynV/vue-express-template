<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div>
    <NavBar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
