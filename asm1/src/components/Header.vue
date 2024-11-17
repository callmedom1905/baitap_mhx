<template>
<div class="header">
    <h1>{{ title }}</h1>

</div>

</template>

<script>
export default {
    name: 'Header',
    data(){
        return {
            title: 'Việc cần làm'
        }
    }
}
</script>

<style scoped>
    .header{
        background: #333;
        padding: 20px;
        text-align: center;
        color: #fff;
    }
</style>