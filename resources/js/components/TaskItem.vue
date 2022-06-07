<script setup>
import { ref } from "vue";
import axios from "axios";

const props = defineProps({
    id: Number,
    content: String,
});

const emit = defineEmits(["getTasks"]);

const isOpenEditForm = ref(false);

const toggleEditForm = () => {
    isOpenEditForm.value = !isOpenEditForm.value;
};

const deleteTask = (id) => {
    axios.delete("./api/tasks/" + id).then((res) => {
        // this.getTasks();
        // emit('getTasks')
    });
};
</script>

<template>
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
            v-model="content"
        />
    </td>
    <td v-else class="border px-4 py-2">{{ content }}</td>
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
            @click="deleteTask(id)"
        >
            削除
        </button>
    </td>
</template>
