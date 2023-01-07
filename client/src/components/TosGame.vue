<script setup lang="ts">
import { ref } from "vue";
import { tosText } from "../misc/TOSText";

const startTime = performance.now();
const termsSubmitEnabled = ref(false);

/**
 * Set tosEnabled to true when the user has scrolled to the bottom of the target element
 */
function handleScroll(event: any) {
  if (termsSubmitEnabled.value) return;
  const scrollDepth = event.target.scrollHeight - event.target.scrollTop;
  termsSubmitEnabled.value = scrollDepth <= event.target.clientHeight + 10;
}

const emit = defineEmits<{
  (e: "submitTime", startTime: number): void;
}>();
</script>

<template>
  <div class="block">
    <h2 class="has-text-centered">Welcome!</h2>
  </div>
  <div class="block">
    Please read all the terms and conditions, then press accept when you are
    done.
  </div>
  <div class="has-text-centered">
    <div
      class="content tos is-family-secondary has-text-justified"
      @scroll.passive="handleScroll"
    >
      <div v-for="(text, index) in tosText" class="block" :key="index">
        {{ text }}
      </div>
    </div>
    <form @submit.prevent="emit('submitTime', startTime)">
      <input
        type="submit"
        class="button is-primary is-family-secondary"
        :disabled="!termsSubmitEnabled"
        value="Submit"
      />
    </form>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/styles/_imports.scss" as v;

.tos {
  border: 1px solid v.$grey-light;
  padding: 25px;
  max-height: 400px;
  overflow-y: scroll;
}
</style>
