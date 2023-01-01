<template>
  <div class="block">
    <h4 class="title">{{ title }}</h4>
    <table class="table is-bordered is-striped is-fullwidth">
      <thead>
        <tr>
          <th class="rank">#</th>
          <th class="username">Name</th>
          <th class="time">Time</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(result, index) in results"
          :key="index"
          :class="
            (currentUserId === result.id ? 'is-selected' : '') +
            ' row-' +
            (index + 1)
          "
        >
          <td class="rank">{{ index + 1 }}</td>
          <td class="username">{{ result.username }}</td>
          <td class="time">
            {{ msToElapsedString(result.totalTimeMilliseconds) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import { msToElapsedString } from "../misc/StringUtils";
import { SpeedrunData } from "../../../shared/models/speedrun-data";

interface Props {
  title: string;
  results: SpeedrunData[];
  currentUserId: number;
}

defineProps<Props>();
</script>
<script lang="ts">
export default {
  name: "LeaderBoardTable",
};
</script>
