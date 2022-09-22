<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
  <!-- <Main /> -->
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
  // components: { Main },
  setup() {
    const appStore = useAppStore();
    onMounted(() => {
      const primaryColor = useTheme(appStore.getThemeName);
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

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
