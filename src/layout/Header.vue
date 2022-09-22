<template>
  <div class="layout-header pl">
    <div class="left">
      <img src="@/assets/img/logo.png" />
      <span class="pl">demo</span>
    </div>
    <div class="header">
      <a-menu
        v-model:selectedKeys="selectedKeys"
        mode="horizontal"
        theme="dark"
      >
        <a-menu-item v-for="menu in Menu" :key="menu.value">
          <template #icon>
            <svg-icon v-if="menu.icon" :name="menu.icon" />
          </template>
          <a>{{ menu.name }}</a>
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useAppStore } from "@/store/modules/app";
import Menu, { MenuItem } from "@/assets/file/menu";
import { findNode } from "@/utils/treeHelper";
export default defineComponent({
  setup() {
    const selectedKeys = ref([""]);
    const appStore = useAppStore();
    const setCurrentMenu = () => {
      const currentMenu = findNode(
        Menu || [],
        (node: MenuItem) => node.value === selectedKeys.value[0]
      );
      appStore.setCurrentMenu(currentMenu);
    };
    watch(selectedKeys, () => {
      setCurrentMenu();
    });
    return {
      selectedKeys,
      Menu,
    };
  },
});
</script>
<style lang="less" scoped>
.layout-header {
  height: 48px;
  background-color: @top-menu-bg;
  display: flex;
  align-items: center;
  color: @white;
  img {
    width: 30px;
    height: 30px;
  }
}
</style>
