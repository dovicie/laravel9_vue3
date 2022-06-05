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
                    <td class="border px-4 py-2">
                        <button
                            class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Done
                        </button>
                    </td>
                    <td v-if="isOpenEditForm" class="border px-4 py-2">
                        <input
                            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text"
                            id="content"
                            v-model="task.content"
                        />
                    </td>
                    <td v-else class="border px-4 py-2">{{ task.content }}</td>
                    <td v-if="isOpenEditForm" class="border px-4 py-2">
                        <button
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            @click="toggleEditForm"
                        >
                            更新
                        </button>
                    </td>
                    <td v-else class="border px-4 py-2">
                        <button
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            @click="toggleEditForm"
                        >
                            編集
                        </button>
                    </td>
                    <td class="border px-4 py-2">
                        <button
                            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            @click="deleteTask(task.id)"
                        >
                            削除
                        </button>
                    </td>
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

<script setup>
import { ref } from "vue";
const isOpenEditForm = ref(false);

const toggleEditForm = () => {
    isOpenEditForm.value = !isOpenEditForm.value;
};
</script>
