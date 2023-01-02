<script setup lang="ts">
import { ref } from "vue";
import LeaderBoard from "../components/LeaderBoard.vue";
import TermsOfService from "../components/TermsOfService.vue";

const tosComplete = ref(false);
const submission = ref({
  username: "",
  totalTime: 0,
});

/**
 * On Tos completion, record submitted username and time,
 * then mount LeaderBoard component
 */
function onSubmitTos(username: string, totalTime: number) {
  submission.value = {
    username,
    totalTime,
  };
  tosComplete.value = true;
}
</script>

<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-one-third">
        <TermsOfService v-if="!tosComplete" @submitTos="onSubmitTos" />
        <LeaderBoard
          v-else
          :totalTime="submission.totalTime"
          :username="submission.username"
        />
      </div>
    </div>
  </section>
</template>
