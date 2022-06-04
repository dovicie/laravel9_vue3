require("./bootstrap");
import { createApp } from "vue";
import HeaderComponent from './components/HeaderComponent.vue'
import ExampleComponent from './components/ExampleComponent.vue'

// createApp(App).mount("#app");
createApp({
  components: {
    HeaderComponent,
    ExampleComponent
  }
}).mount("#app");

