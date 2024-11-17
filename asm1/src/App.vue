<template>
<div id="app">
  <Header></Header>
  <Todo></Todo>
</div>
</template>

<script>
import Header from "./components/Header.vue";
import Todo from "./components/Todo.vue";
export default {
  name: "app",
  components: {
    Header,
    Todo,
  }
}
</script>

<style>
#app{
  font-family: Arial, Helvetica, sans-serif;
}
</style>