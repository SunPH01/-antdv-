import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { installGlobComp } from "@/components";
import { setupStore } from "@/store/index";
import Antd from "ant-design-vue";
import "@purge-icons/generated";
import "ant-design-vue/dist/antd.css";
import "@/design/index.less";

async function bootstrap() {
  const app = createApp(App);
  app.use(Antd);
  setupStore(app);
  installGlobComp(app);
  app.use(router);
  app.mount("#app");
}
bootstrap();
