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
            <Icon v-if="menu.icon" :name="menu.icon" size="20" />
          </template>
          <a>{{ menu.name }}</a>
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch, onMounted } from "vue";
import { useAppStore } from "@/store/modules/app";
import Menu, { MenuItem } from "@/assets/file/menu";
import { findNode } from "@/utils/treeHelper";
export default defineComponent({
  setup() {
    const appStore = useAppStore();
    const selectedKeys = ref([""]);
    const setCurrentMenu = () => {
      const currentMenu = findNode(
        Menu || [],
        (node: MenuItem) => node.value === selectedKeys.value[0]
      );
      appStore.setCurrentMenu(currentMenu);
    };
    onMounted(() => {
      const selectedKey = appStore.getCurrentMenu.value;
      selectedKeys.value = selectedKey ? [selectedKey] : selectedKeys.value;
    });
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
  .left {
    min-width: 164px;
    max-width: 164px;
    img {
      width: 30px;
      height: 30px;
    }
  }
  .header {
    flex: 1;
  }
  .ant-menu {
    background: transparent;
    margin-right: 5px;
    :deep(.ant-menu-item) {
      margin-right: 5px;
      &.ant-menu-item-selected,
      &.ant-menu-item-active {
        background-color: @top-menu-active-bg-color;
      }
      .ant-menu-item-icon,
      .ant-menu-title-content {
        a {
          color: #fff;
        }
      }
    }
  }
}
</style>
