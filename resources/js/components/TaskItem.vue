<script setup>
import { reactive, ref } from "vue";
import axios from "axios";

const props = defineProps({
    id: Number,
    content: String,
    getTasks: Function,
});

const task = reactive({
    content: props.content,
});

const isOpenEditForm = ref(false);

const toggleEditForm = () => {
    isOpenEditForm.value = !isOpenEditForm.value;
};

const deleteTask = (id) => {
    axios.delete("./api/tasks/" + id).then((res) => {
        props.getTasks();
    });
};

const updataTask = (id, task) => {
    axios.put("./api/tasks/" + id, task).then((res) => {
        props.getTasks();
    });
    toggleEditForm();
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
            v-model="task.content"
        />
    </td>
    <td v-else class="border px-4 py-2">{{ task.content }}</td>
    <td v-if="isOpenEditForm" class="border px-4 py-2">
        <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click="updataTask(props.id, task)"
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
            @click="deleteTask(props.id)"
        >
            削除
        </button>
    </td>
</template>
