<script setup>
import TaskCard from './TaskCard.vue'

const props = defineProps({ tasks: Array })
const emit = defineEmits(['toggle', 'delete'])
</script>

<template>
  <div class="task-list-view">
    <h1>My Tasks</h1>

    <div v-if="props.tasks.length === 0" class="no-tasks">
      No tasks left
    </div>
    
    <div v-else>
      <TaskCard
        v-for="task in props.tasks"
        :key="task.id"
        :task="task"
        @toggle="emit('toggle', $event)"
        @delete="emit('delete', $event)"
      >
        <template #meta>
          Due: {{ task.dueDate }}
        </template>
      </TaskCard>
    </div>
  </div>
</template>

<style scoped>
.task-list-view {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  font-family: Arial, sans-serif;
}
h1 { color: #1B2A4A; margin-bottom: 24px; }
.no-tasks {
  text-align: center;
  color: #9ca3af;
  padding: 40px 20px;
  font-size: 16px;
}
</style>
