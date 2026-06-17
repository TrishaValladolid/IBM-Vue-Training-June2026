import { createRouter, createWebHistory } from 'vue-router'
import { useTaskStore } from '@/stores/taskStore'
import HomeView from '@/views/Day3/HomeView.vue'
import TaskDetailView from '@/views/Day3/TaskDetailView.vue'
import AboutView from '@/views/Day3/AboutView.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomeView },
  { path: '/task/:id', component: TaskDetailView, meta: { requiresTask: true } },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresTask) {
    const taskStore = useTaskStore()
    const taskId = Number(to.params.id)
    const taskExists = taskStore.tasks.some(task => task.id === taskId)
    if (!taskExists) {
      return next({ path: '/home', query: { error: 'notfound' } })
    }
  }
  next()
})

export default router
