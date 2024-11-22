<template>
    <!-- <div>
        <h2>{{name}}</h2>
        <h2>{{message}}</h2>

    </div> -->
    <div>
        <h2>{{foodName}}</h2>
    </div>
</template>

<script>
    export default {
        data(){
        return {
            name: 'Apples',
            message: 'I like it'
        }
    },
    props: [
        'foodName'
    ]
    }
</script>

<style>

</style>