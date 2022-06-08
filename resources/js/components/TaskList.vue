<script setup>
import { ref } from "vue";
import TaskItem from "./TaskItem.vue";

const isOpenEditForm = ref(false);

const toggleEditForm = () => {
    isOpenEditForm.value = !isOpenEditForm.value;
};
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
                    <TaskItem :content="task.content" :id="task.id" />
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            tasks: [],
        };
    },
    methods: {
        getTasks() {
            axios.get("/api/tasks").then((res) => {
                this.tasks = res.data;
            });
        },
        deleteTask(id) {
            axios.delete("./api/tasks/" + id).then((res) => {
                this.getTasks();
            });
        },
    },
    mounted() {
        this.getTasks();
    },
};
</script>
