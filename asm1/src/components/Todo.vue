<template>
    <div>
    <add-todo  @add-todo="addItem">

    </add-todo>
    <todo-item v-for="item in todo" 
    :key="item.id" 
    :todoProps="item" 
    @item-completed="markComplete"
    @delete-item="deleteTodo">

    </todo-item>
</div>
    
</template>

<script>
import { ref } from "vue";
import TodoItem from "./TodoItem.vue";
import AddTodo from './AddTodo.vue';
import { v4 as uuidv4 } from 'uuid';

export default {
    name:'Todo',
    components: {
         TodoItem, 
         AddTodo
        },

    setup(){
        const todo = ref([ 
            {
                id: uuidv4(),
                title:'Việc 1',
                completed: false
            },
            {
                id: uuidv4(),
                title:'Việc 2',
                completed: false
            },
            {
                id: uuidv4(),
                title:'Việc 3',
                completed: false
            },
        ])
        const markComplete = id => {
            todo.value = todo.value.map(item => {
                if(item.id === id ) item.completed = !item.completed;
                return item;
            })
        }
        const deleteTodo = id => {
            todo.value = todo.value.filter(item => item.id !== id)
        }
        const addItem = newItem => {
            console.log(newItem.id);
            todo.value.push(newItem)
        }

        return {
            todo: todo,
            markComplete: markComplete,
            deleteTodo: deleteTodo,
            addItem: addItem,
        }
    }
}
</script>

<style>

</style>