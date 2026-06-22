import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStoreDay5 = defineStore('taskDay5', () => {
  // State: tasks list
  const tasks = ref([])

  // State: loading indicator
  const loading = ref(false)

  // State: error message
  const error = ref(null)

  // Action: Fetch tasks from JSONPlaceholder
  async function fetchTasks() {
    loading.value = true
    error.value = null
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
      const data = await response.json()
      tasks.value = data
    } catch (e) {
      error.value = e.message || 'Failed to fetch tasks'
      tasks.value = []
    } finally {
      loading.value = false
    }
  }

  return { tasks, loading, error, fetchTasks }
})
