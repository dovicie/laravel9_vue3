<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const toggleAddTaskForm = () => {
    isOpen.value = !isOpen.value;
};
</script>

<template>
    <div class="py-3 flex justify-between">
        <h1 class="text-3xl font-bold">ToDo App</h1>
        <div class="flex gap-2">
            <router-link v-bind:to="{ name: 'task.create' }">
                <button
                    class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    タスク追加
                </button>
            </router-link>
            <router-link v-bind:to="{ name: 'task.list' }">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    タスク一覧
                </button>
            </router-link>
        </div>
    </div>
</template>
