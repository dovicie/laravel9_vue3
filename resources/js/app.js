import { createApp } from "vue";
import router from "./routes";
import TheHeader from "./components/TheHeader.vue";
import TaskList from "./components/TaskList.vue";
import TaskCreate from "./components/TaskCreate.vue";

createApp({
    components: {
        TheHeader,
        TaskList,
        TaskCreate,
    },
}).use(router).mount("#app");
