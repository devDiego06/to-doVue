<template>
  <div class="flex flex-col justify-center items-center">
    <div class="relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
      <button
        class="!absolute right-1 top-1 z-10 select-none rounded bg-blue-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
        type="button"
        data-ripple-light="true"
        @click="sendText"
      >
        Send
      </button>
      <input
        type="text"
        class="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        placeholder=" "
        required
        v-model="text"
        @keypress.enter="sendText"
      />
      <label
        class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
      >
        Escribe tu To Do
      </label>
    </div>

    <div class="">
      <!-- ToDoList -->
      <ToDoList
        v-for="ToDo in ToDoss"
        :key="ToDo.id"
        v-bind="ToDo"
        @delete-task="deleteTask"
        @task-completed="completedTask"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ToDos } from '../interface/to-do.interface'
import ToDoList from './ToDoList.vue'

const text = ref('')

interface Props {
  ToDoss: ToDos[]
  onDelete: (id: number) => void // Recibe onDelete como prop,
  taskCompleted: (id: number) => void
}

const props = defineProps<Props>()

const emit = defineEmits<{
  sendText: [Text: string]
}>()

const sendText = () => {
  if (!text.value) return
  emit('sendText', text.value)

  console.log(text.value)
  text.value = ''
}

// Usa la función onDelete que recibimos como prop
const deleteTask = (id: number) => {
  props.onDelete(id)
}

//usa la funcion taskCompleted que recibimos como prop
const completedTask = (id: number) => {
  props.taskCompleted(id)
}
</script>
