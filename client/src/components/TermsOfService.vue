<script setup lang="ts">
import { ref } from "vue";
import SubmitResults from "./SubmitResults.vue";
import TosGame from "./TosGame.vue";

let totalTime: number;

const termsSubmitted = ref(false);

/**
 * On time submit, record time and enable username submission form
 */
function onSubmitTime(startTime: number) {
  totalTime = performance.now() - startTime;
  termsSubmitted.value = true;
}

const emit = defineEmits<{
  (e: "submitTos", username: string, totalTime: number): void;
}>();

/**
 * Just pass the value from child to parent.
 */
function onSubmitTos(username: string, totalTime: number) {
  emit("submitTos", username, totalTime);
}
</script>

<template>
  <div>
    <div v-if="!termsSubmitted" class="content">
      <TosGame @submitTime="onSubmitTime" />
    </div>
    <div v-else>
      <SubmitResults :total-time="totalTime" @submitTos="onSubmitTos" />
    </div>
  </div>
</template>
