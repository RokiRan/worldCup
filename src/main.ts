import { createApp } from "vue";

import { createPinia } from "pinia";
import { faseAnimate, loadErrImg } from "./utils/directive";
// Vue Router
import index from "./router";

import { registerStore } from "./store";
import App from "~/App.vue";

import "~/styles/tailwind.css";
import "~/styles/main.scss";

const app = createApp(App);

app.use(createPinia());

app.directive("animate", faseAnimate);
app.directive("loadFail", loadErrImg);

registerStore();

app.use(index);

app.mount("#app");
