<template>
  <section class="flex flex-col items-center">
    <h1 class="text-4xl mb-10 my-10">To Do</h1>
    <h3 class="text-2xl my-5">Mis To do</h3>
  </section>

  <section>
    <!-- Pasa tanto texts como onDelete como props -->
    <ToDoInput
      :ToDoss="texts"
      :onDelete="onDelete"
      :task-completed="taskCompleted"
      @send-text="onText($event)"
    />
  </section>
</template>

<script setup lang="ts">
import ToDoInput from '@/modules/todo/components/ToDoInput.vue'
import { useToDo } from '../composables/useToDo'

// Solo una instancia de useToDo en toda la aplicación
const { texts, onText, onDelete, taskCompleted } = useToDo()
</script>
