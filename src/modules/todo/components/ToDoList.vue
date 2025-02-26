<template>
  <div class="flex flex-row justify-center border-b border-gray-200 py-2 tex">
    {{ text }}
    <div class="w-full justify-end items-end flex">
      <button class="mx-1.5" @click="$emit('delete-task', id)">
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
      <button @click="$emit('task-completed', id)">
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
  </div>
</template>

<script setup lang="ts">
interface Props {
  text: string
  id: number
}

defineProps<Props>()

// Definimos los eventos que este componente puede emitir
defineEmits<{
  'delete-task': [id: number]
  'task-completed': [id: number]
}>()
</script>
