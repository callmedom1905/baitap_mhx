<template>
  <div>
      <button @click="fetchData">Lấy dữ liệu</button>
      <div v-for="item in data" :key="item.id">
        <p>{{ item.name }}</p>
        <p>{{ item.price }}</p>
      </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: []
    }
  },
  methods: {
    async fetchData() {
     this.data = await axios.get("http://localhost:3000/products")
     .then(response => response.data)
    }
  }
}
</script>

<style>

</style>