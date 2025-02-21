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

  const onDelete = (id: number) => {
    texts.value.splice(texts.value.findIndex((text) => text.id === id))
  }

  return {
    texts,
    onText,
    onDelete,
  }
}
