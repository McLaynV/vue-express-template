<script setup lang="ts">
import { useStore } from "../config/store";

interface Props {
  totalTime: number;
}
const props = defineProps<Props>();

const store = useStore();
const emit = defineEmits<{
  (e: "submitTos", username: string, totalTime: number): void;
}>();

/**
 * On username submit, set username in store,
 * then emit username and time to parent
 */
function onSubmitUsername(event: Event) {
  store.lastUsername = (event.target as any)["username"].value as string;
  emit("submitTos", store.lastUsername, props.totalTime);
}
</script>

<template>
  <div class="content has-text-centered">
    <div class="title">
      <h2>Complete!</h2>
    </div>
    <form @submit.prevent="onSubmitUsername($event)">
      <div class="field has-addons is-justify-content-center">
        <div class="control">
          <input
            class="input"
            type="text"
            pattern="[A-Za-z0-9]+"
            name="username"
            placeholder="Enter your username "
            :value="store.lastUsername"
            autoComplete="off"
            autoFocus
            required
          />
        </div>
        <div class="control">
          <input type="submit" class="button is-primary" />
        </div>
      </div>
    </form>
  </div>
</template>
