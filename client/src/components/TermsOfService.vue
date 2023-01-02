<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "../config/store";
import { tosText } from "../misc/TOSText";

const store = useStore();
const emit = defineEmits<{
  (e: "submitTos", username: string, totalTime: number): void;
}>();

const startTime = performance.now();
let totalTime: number;

const termsSubmitEnabled = ref(false);
const termsSubmitted = ref(false);

/**
 * Set tosEnabled to true when the user has scrolled to the bottom of the target element
 */
function handleScroll(event: any) {
  if (termsSubmitEnabled.value) return;
  const reachedBottom =
    event.target.scrollHeight - event.target.scrollTop <=
    event.target.clientHeight + 10;
  termsSubmitEnabled.value = reachedBottom;
}

/**
 * On time submit, record time and enable username submission form
 */
function onSubmitTime() {
  totalTime = performance.now() - startTime;
  termsSubmitted.value = true;
}

/**
 * On username submit, set username in store,
 * then emit username and time to parent
 */
function onSubmitUsername(event: Event) {
  const submitter = (event.target as any)["username"].value as string;
  store.lastUsername = submitter;
  emit("submitTos", store.lastUsername, totalTime);
}
</script>

<template>
  <div>
    <div v-if="!termsSubmitted" class="content">
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
        <form @submit.prevent="onSubmitTime">
          <input
            type="submit"
            class="button is-primary is-family-secondary"
            :disabled="!termsSubmitEnabled"
            value="Submit"
          />
        </form>
      </div>
    </div>
    <div v-else>
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
    </div>
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
