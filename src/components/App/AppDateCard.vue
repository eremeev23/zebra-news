<script setup lang="ts">
import { computed } from "vue";
import moment from 'moment';

const props = defineProps<{
  date: number
}>()

// Layout
const day = computed(() => moment.unix(props.date).date())
const weekDay = computed(() => moment.unix(props.date).format('dddd'))
const year = computed(() => moment.unix(props.date).year())
</script>

<template>
  <div class="flex items-center space-x-1 text-black-30">
    <div class="text-4xl">
      {{ day }}
    </div>

    <div class="justify-between flex flex-col text-xs">
      <span>
        {{ weekDay }}
      </span>

      <span>
        {{ year }}
      </span>
    </div>
  </div>
</template>
