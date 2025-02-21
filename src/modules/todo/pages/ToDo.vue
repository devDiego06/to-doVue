<template>
  <section>
    <h1>To Do</h1>
    <h3>Mis To do</h3>
  </section>

  <section>
    <!-- ToDo input -->
    <ToDoInput :ToDoss="texts" @send-text="onText($event)" />
  </section>
</template>

<script setup lang="ts">
import ToDoInput from '@/modules/todo/components/ToDoInput.vue'
import { useToDo } from '../composables/useToDo'

const { texts, onText } = useToDo()
</script>
