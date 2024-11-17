<template>
  <form @submit.prevent="addItem">
    <input type="text" placeholder="Việc mới ..." v-model="task">
    <input type="submit" value="Thêm nhiệm vụ" class="add-btn">
  </form>
</template>

<script>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
export default {
    name: 'AddTodo',
    setup(props, context) {
        const task = ref('')
        const addItem = () => {
            const newItem = {
                id: uuidv4(),
                title: task.value,
                completed: false
            }

            context.emit('add-todo', newItem)

            task.value = '' 
        }
        return {
            task,
            addItem
        }
    }
}
</script>

<style scoped>
    form{
        display: flex;
    }
    input[type="text"]{
        flex: 10;
        padding: 10px;
    }
    input[type="submit"]{
        flex: 2;
    }
</style>