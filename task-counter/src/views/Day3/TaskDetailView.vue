<!--
=============================================================
  DAY 3 ASSIGNMENT — TaskDetailView.vue
  Displays full details for a single task
=============================================================
-->
<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTaskStore } from '@/stores/taskStore-day3'

// TODO 1: Get the current route and router instances
const route  = useRoute()
const router = useRouter()

const taskStore = useTaskStore()

// TODO 2: Find the task matching the route param
// Remember: route.params.id is a STRING — cast to Number before comparing
const task = computed(() => taskStore.tasks.find(t => t.id === Number(route.params.id)))

// TODO 3: Write goBack() using router.push() to navigate to '/home'
function goBack() {
  router.push('/home')
}
</script>

<template>
  <div class="detail-view">

    <!-- TODO 4: Show this only if task is found (v-if="task") -->
    <div v-if="task">
      <button class="back-btn" @click="goBack">← Back</button>

      <!-- TODO 5: Display task.name, task.dueDate, and task.done status -->
      <h1>{{ task.name }}</h1>
      <p>Status: {{ task.done ? 'Done' : 'Pending' }}</p>
      <p>Due: {{ task.dueDate }}</p>
    </div>

    <!-- This case is handled by the router guard, but good to have a fallback -->
    <div v-if="false">
      <p>Task not found.</p>
      <button @click="goBack">Go Back</button>
    </div>
  </div>
</template>

<style scoped>
.detail-view { max-width: 520px; margin: 40px auto; padding: 24px; font-family: Arial, sans-serif; }
.back-btn { background: none; border: 1px solid #ddd; border-radius: 6px; padding: 6px 14px; cursor: pointer; margin-bottom: 20px; }
.back-btn:hover { background: #f3f4f6; }
h1 { color: #1B2A4A; font-size: 24px; margin-bottom: 12px; }
p { color: #4A5568; font-size: 15px; margin: 6px 0; }
</style>
