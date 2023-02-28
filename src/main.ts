import { createApp } from "vue";
import { initPrimeVue } from "@/plugins/primevue";
import { VueFormGeneratorPlugin } from "@tony-nz/vue-form-generator";
import App from "./App.vue";
import "./assets/tailwind.css";
import "@tony-nz/vue-form-generator/dist/style.css";

const app = createApp(App);

/**
 * Initialize PrimeVue
 */
initPrimeVue(app);

/**
 * Initialize VueFormGenerator
 */
app.use(VueFormGeneratorPlugin, {});

app.mount("#app");

export default app;
