<template>
  <div>
    <a-button @click="handleSwitchTheme('dark')" type="primary">
      深色主题
    </a-button>
    <a-button @click="handleSwitchTheme('light')">浅色主题</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTheme } from "@/utils/theme/useTheme";
import { ConfigProvider } from "ant-design-vue";
export default defineComponent({
  setup() {
    const handleSwitchTheme = (theme: string) => {
      const primaryColor = useTheme(theme);
      ConfigProvider.config({
        theme: {
          primaryColor,
        },
      });
    };
    return {
      handleSwitchTheme,
    };
  },
});
</script>
