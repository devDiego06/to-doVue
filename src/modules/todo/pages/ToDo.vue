<template>
  <section>
    <h1>To Do</h1>
    <h3>Mis To do</h3>
  </section>

  <section>
    <!-- Pasa tanto texts como onDelete como props -->
    <ToDoInput :ToDoss="texts" :onDelete="onDelete" @send-text="onText($event)" />
  </section>
</template>

<script setup lang="ts">
import ToDoInput from '@/modules/todo/components/ToDoInput.vue'
import { useToDo } from '../composables/useToDo'

// Solo una instancia de useToDo en toda la aplicación
const { texts, onText, onDelete } = useToDo()
</script>
