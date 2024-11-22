<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="updateMessage">Cập nhật</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  beforeCreate() {
    console.log("beforeCreate: Instance đang được khởi tạo.");
  },
  created() {
    console.log("created: Instance đã được khởi tạo.");
  },
  beforeMount() {
    console.log("beforeMount: DOM chưa sẵn sàng.");
  },
  mounted() {
    console.log("mounted: DOM đã sẵn sàng.");
  },
  beforeUpdate() {
    console.log("beforeUpdate: Dữ liệu đang thay đổi.");
  },
  updated() {
    console.log("updated: Dữ liệu đã thay đổi.");
  },
  beforeDestroy() {
    console.log("beforeDestroy: Instance sắp bị phá hủy.");
  },
  destroyed() {
    console.log("destroyed: Instance đã bị phá hủy.");
  },
  methods: {
    updateMessage() {
      this.message = "Đã cập nhật!";
    },
  },
};
</script>
