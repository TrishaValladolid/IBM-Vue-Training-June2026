import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref([
    { id: 1, name: 'Buy groceries', done: false, dueDate: '2026-06-20' },
    { id: 2, name: 'Finish project', done: true, dueDate: '2026-06-21' },
    { id: 3, name: 'Read Vue docs', done: false, dueDate: '2026-06-22' },
  ])

  return { tasks }
})
