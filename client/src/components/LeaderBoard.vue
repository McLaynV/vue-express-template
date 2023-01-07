<script setup lang="ts">
import { onMounted } from "vue";
import { getSpeedruns, submitSpeedrun } from "../api/speedruns";
import { useStore } from "../config/store";
import LeaderBoardTable from "./LeaderBoardTable.vue";
import { msToElapsedString } from "../misc/StringUtils";

const store = useStore();
const props = defineProps<{ totalTime: number; username: string }>();

onMounted(() => {
  // Submit current run to API
  submitSpeedrun({
    username: props.username,
    totalTimeMilliseconds: Math.round(props.totalTime),
  }).then(async (response) => {
    store.submittedRun = response;

    // Get the latest top times & user times from API
    [store.topResults, store.userResults] = await Promise.all([
      getSpeedruns(),
      getSpeedruns(store.submittedRun.userId),
    ]);
  });
});
</script>

<template>
  <div class="content has-text-centered">
    <div class="block">
      <h2 class="title">{{ username }}&apos;s time:</h2>
      <p class="subtitle" v-if="store.submittedRun">
        {{ msToElapsedString(store.submittedRun?.totalTimeMilliseconds) }}
      </p>
    </div>
    <LeaderBoardTable
      :results="store.topResults"
      title="Global top times"
      :current-user-id="store.submittedRun?.id"
    />
    <LeaderBoardTable
      :results="store.userResults"
      title="Your top times"
      :current-user-id="store.submittedRun?.id"
    />
  </div>
</template>
