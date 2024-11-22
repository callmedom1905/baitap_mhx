import { createApp } from 'vue'

import App from "./App.vue";
import foodItem from './components/foodItem.vue';

const app = createApp(App)
app.component('foodItem',foodItem)
app.mount('#app')

