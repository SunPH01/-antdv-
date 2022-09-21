import type { App } from "vue";
import SvgIcon from "./src/SvgIcon.vue";
import Icon from "./src/Icon.vue";
// import { createFromIconfontCN } from "@ant-design/icons-vue";

// createFromIconfontCN({
//   // scriptUrl: "//at.alicdn.com/t/c/font_3622931_9w8t4m2bkpl.js", // 在 iconfont.cn 上生成
//   scriptUrl: "/font/iconfont.js",
// });

export function install(app: App) {
  app.component("SvgIcon", SvgIcon);
  app.component("Icon", Icon);
}
