<script setup>
import { onMounted, ref } from "vue";
import TaskItem from "./TaskItem.vue";
import axios from "axios";

const tasks = ref([]);
// const isOpenEditForm = ref(false);

const getTasks = () => {
    console.log("getTasks");
    axios.get("/api/tasks").then((res) => {
        tasks.value = res.data;
    });
};

// const toggleEditForm = () => {
//     isOpenEditForm.value = !isOpenEditForm.value;
// };

onMounted(() => {
    getTasks();
});
</script>

<template>
    <div class="py-3">
        <table class="table-fixed w-full text-center">
            <thead>
                <tr>
                    <th class="w-1/6 px-4 py-2"></th>
                    <th class="w-1/2 px-4 py-2">内容</th>
                    <th class="w-1/6 px-4 py-2"></th>
                    <th class="w-1/6 px-4 py-2"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in tasks" :key="index">
                    <TaskItem
                        :content="task.content"
                        :id="task.id"
                        :getTasks="getTasks"
                    />
                </tr>
            </tbody>
        </table>
    </div>
</template>
