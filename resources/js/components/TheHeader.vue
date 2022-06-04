<template>
    <div class="py-3 flex justify-between">
        <h1 class="text-3xl font-bold">ToDo App</h1>
        <router-link v-bind:to="{ name: 'task.list' }">
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                タスク一覧
            </button>
        </router-link>
    </div>
</template>
