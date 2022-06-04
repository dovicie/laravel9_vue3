import TaskList from './components/TaskList.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: "/",
        component: TaskList,
        name:'task.list',
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
  })

export default router;
