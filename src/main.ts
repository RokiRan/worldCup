import { createApp } from "vue";

import { createPinia } from "pinia";
import { faseAnimate, lazy, lazyLoad, loadErrImg } from "./utils/directive";
// Vue Router
import index from "./router";
// import Toast from "./components/Toast";
import { registerStore } from "./store";
import App from "~/App.vue";

import "~/styles/tailwind.css";
import "~/styles/main.scss";

const app = createApp(App);

app.use(createPinia());
// app.use(Toast); // 插件的方式引用Toast
app.directive("animate", faseAnimate);
app.directive("loadFail", loadErrImg);
app.directive("lazyShow", lazy);
// app.directive("lazyLoad", lazyLoad);

registerStore();

app.use(index);

app.mount("#app");
