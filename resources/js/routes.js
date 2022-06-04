import TaskList from './components/TaskList.vue';
import TaskCreate from './components/TaskCreate.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: "/",
        component: TaskList,
        name:'task.list',
    },
    {
        path: "/create",
        component: TaskCreate,
        name:'task.create',
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
  })

export default router;
