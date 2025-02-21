<template>
  <div class="flex flex-row justify-center">
    {{ text }}
  </div>
  <div class="w-80">
    <button class="mx-1.5" @click="$emit('delete-task')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#5f6368"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
      </svg>
    </button>
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#5f6368"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { ToDos } from '../interface/to-do.interface'

interface Props {
  text: string
  id: number
}

defineProps<Props>()
</script>
