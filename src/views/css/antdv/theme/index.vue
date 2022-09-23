<template>
  <div>
    <a-space>
      <a-button @click="handleSwitchTheme('dark')" type="primary">
        深色主题
      </a-button>
      <a-button @click="handleSwitchTheme('light')">浅色主题</a-button>
    </a-space>
    <a-divider />
    <a-space>
      <a-alert message="Success Text" type="success" />
      <a-alert message="Info Text" type="info" />
      <a-alert message="Warning Text" type="warning" />
      <a-alert message="Error Text" type="error" />
    </a-space>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTheme } from "@/utils/theme/useTheme";
import { ConfigProvider } from "ant-design-vue";
export default defineComponent({
  setup() {
    const handleSwitchTheme = (theme: string) => {
      const {
        primaryColor,
        errorColor,
        warningColor,
        successColor,
        infoColor,
      } = useTheme(theme);
      console.log(primaryColor);
      ConfigProvider.config({
        theme: {
          primaryColor,
          errorColor,
          warningColor,
          successColor,
          infoColor,
        },
      });
    };
    return {
      handleSwitchTheme,
    };
  },
});
</script>
