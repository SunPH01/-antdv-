<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useTheme } from "@/utils/theme/useTheme";
import { useAppStore } from "@/store/modules/app";
import { ConfigProvider } from "ant-design-vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn");

export default defineComponent({
  setup() {
    const appStore = useAppStore();
    onMounted(() => {
      const { primaryColor } = useTheme(appStore.getThemeName);
      ConfigProvider.config({
        theme: {
          primaryColor,
        },
      });
    });
    return {
      locale: zhCN,
    };
  },
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
