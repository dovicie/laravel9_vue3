import { createApp } from "vue";
import router from "./routes";
import TheHeader from "./components/TheHeader.vue";
import TaskList from "./components/TaskList.vue";

createApp({
    components: {
        TheHeader,
        TaskList,
    },
}).use(router).mount("#app");
