<script setup>
import { ref } from 'vue'
import TaskListView from './views/Day2/TaskListView.vue'

// App.vue holds ALL state
const tasks = ref([
  { id: 1, name: 'Learn Vue Props', done: false, dueDate: '2026-06-17' },
  { id: 2, name: 'Build TaskCard Component', done: false, dueDate: '2026-06-18' },
  { id: 3, name: 'Handle Events with Emits', done: true, dueDate: '2026-06-16' }
])

function handleToggle(id) {
  const task = tasks.value.find(t => t.id === id)
  if (task) task.done = !task.done
}

function handleDelete(id) {
  tasks.value = tasks.value.filter(t => t.id !== id)
}
</script>

<template>
  <RouterView />
</template>