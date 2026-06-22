<!--
=============================================================
  DAY 5 ASSIGNMENT — TodoListView.vue
  Uses useFetch() to load and display todos from JSONPlaceholder
=============================================================
-->
<script setup>
import { ref, computed, onMounted } from 'vue'
import { useTaskStoreDay5 } from '@/stores/taskStore-day5'
import { storeToRefs } from 'pinia'

const store = useTaskStoreDay5()
const { tasks, loading, error } = storeToRefs(store)

const filter = ref('all') // 'all' | 'done' | 'pending'

// TODO 1: Call useFetch with the JSONPlaceholder todos endpoint
// Now using store instead - call fetchTasks() in onMounted
onMounted(() => {
  store.fetchTasks()
})

const filteredTodos = computed(() => {
  if (!tasks.value || tasks.value.length === 0) return [] // still loading or no data
  if (filter.value === 'all') return tasks.value
  if (filter.value === 'done') return tasks.value.filter(todo => todo.completed)
  if (filter.value === 'pending') return tasks.value.filter(todo => !todo.completed)
  return []
})

// TODO 2: Create a filteredTodos computed() that:
//  - Returns [] if tasks.value is null (still loading)
//  - Filters by filter.value ('all' shows all, 'done' shows completed, 'pending' shows incomplete)
</script>

<template>
  <div class="todo-view">
    <h1>📋 Todo List</h1>

    <!-- TODO 3: Show a loading message/spinner while loading is true -->
    <div v-if="loading" class="loading">
      Loading todos...
    </div>

    <!-- TODO 4: Show an error message if error has a value -->
    <div v-else-if="error" class="error-box">
      Error: {{ error }}
    </div>

    <!-- TODO 5: Show the content block when NOT loading and NO error -->
    <div v-else>
      <!-- Filter buttons -->
      <div class="filters">
        <!-- TODO 6: Three buttons — All, Done, Pending -->
        <!-- Each sets filter.value and gets :class="{ active: filter === '...' }" -->
        <button
          @click="filter = 'all'"
          :class="{ active: filter === 'all' }"
        >
          All
        </button>
        <button
          @click="filter = 'done'"
          :class="{ active: filter === 'done' }"
        >
          Done
        </button>
        <button
          @click="filter = 'pending'"
          :class="{ active: filter === 'pending' }"
        >
          Pending
        </button>
      </div>

      <!-- TODO 7: Render filteredTodos using v-for -->
      <ul class="todo-list">
        <!-- li with checkbox (disabled, reflects todo.completed) and title -->
        <li v-for="todo in filteredTodos" :key="todo.id" :class="{ 'done-item': todo.completed }">
          <input type="checkbox" :checked="todo.completed" disabled />
          <span :class="{ 'completed-text': todo.completed }">{{ todo.title }}</span>
        </li>
      </ul>

      <!-- TODO 8: Show count of visible items -->
      <div class="count">
        Showing {{ filteredTodos.length }} of {{ tasks.length }} todos
      </div>
    </div>
  </div>
</template>

<style scoped>
.todo-view { max-width: 560px; margin: 40px auto; padding: 24px; font-family: Arial, sans-serif; }
h1 { color: #1B2A4A; margin-bottom: 4px; }
.subtitle { color: #9ca3af; font-size: 13px; margin-bottom: 20px; }
.loading { text-align: center; padding: 48px; color: #42B883; font-size: 16px; }
.error-box { background: #fef2f2; border: 1px solid #fca5a5; border-radius: 8px; padding: 16px; color: #dc2626; }
.filters { display: flex; gap: 8px; margin-bottom: 16px; }
.filters button { padding: 6px 16px; border: 1px solid #ddd; border-radius: 20px; background: white; cursor: pointer; font-size: 13px; }
.filters button.active { background: #42B883; color: white; border-color: #42B883; }
.todo-list { list-style: none; padding: 0; margin: 0; }
.todo-list li { display: flex; align-items: center; gap: 10px; padding: 10px 12px; background: white; border-radius: 6px; margin-bottom: 6px; border: 1px solid #eee; font-size: 14px; }
.todo-list li.done-item { opacity: 0.6; }
.todo-list li span { flex: 1; }
.completed-text { text-decoration: line-through; color: #9ca3af; }
.count { font-size: 13px; color: #9ca3af; margin-top: 12px; text-align: right; }
</style>
