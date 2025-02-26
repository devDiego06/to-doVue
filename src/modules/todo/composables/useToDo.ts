import { ref } from 'vue'
import type { ToDos } from '../interface/to-do.interface'

export const useToDo = () => {
  const texts = ref<ToDos[]>([])

  const onText = (text: string) => {
    texts.value.push({
      id: new Date().getTime(),
      text: text,
    })
  }

  //eliminar un elemento mediante el indice
  const onDelete = (id: number) => {
    const index = texts.value.findIndex((text) => text.id === id)
    if (index !== -1) {
      texts.value.splice(index, 1) // Eliminar 1 elemento a partir del índice encontrado
    }
  }

  return {
    texts,
    onText,
    onDelete,
  }
}
