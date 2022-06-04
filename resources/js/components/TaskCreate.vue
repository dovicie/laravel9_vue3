<template>
    <form class="w-full">
        <div class="flex items-center border-b border-green-500 py-2">
            <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                id="content"
                placeholder="追加タスク"
            />
            <button
                class="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white font-bold py-1 px-2 rounded"
                type="submit"
            >
                追加
            </button>
            <button
                class="flex-shrink-0 border-transparent border-4 text-green-500 hover:text-green-800 text-sm font-bold py-1 px-2 rounded"
                type="button"
            >
                キャンセル
            </button>
        </div>
    </form>
</template>
