import { themeConfig } from "./model";
import { useAppStore } from "@/store/modules/app";
// import { ConfigProvider } from "ant-design-vue";

// 修改样式变量值
const changeStyle = (obj: Object) => {
  for (const key in obj) {
    document
      .getElementsByTagName("body")[0]
      .style.setProperty(`--${key}`, obj[key]);
  }
};
// 改变主题的方法
export const useTheme = (themeName: string) => {
  const appStore = useAppStore();
  appStore.setThemeName(themeName);
  const theme = themeConfig[themeName];
  changeStyle(theme);
  return theme?.primaryColor;
};
