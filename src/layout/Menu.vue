<template>
  <div class="aside-menu">
    <a-menu mode="inline" theme="light">
      <a-sub-menu v-for="menu in currentMenu.children" :key="menu.value">
        <template #icon>
          <Icon :name="menu.icon" />
        </template>
        <template #title>{{ menu.name }}</template>
        <a-menu-item
          v-for="item in menu.children"
          :key="item.value"
          @click="handleMenuClick(item)"
        >
          {{ item.name }}
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useAppStore } from "@/store/modules/app";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const appStore = useAppStore();
    const currentMenu = computed(() => appStore.getCurrentMenu || {});
    const handleMenuClick = (menu: any) => {
      menu.path && router.push(menu.path);
    };
    return {
      currentMenu,
      handleMenuClick,
    };
  },
});
</script>
<style lang="less">
.aside-menu {
  width: 180px;
  min-width: 180px;
  height: 100%;
  background-color: @aside-menu-bg;
  border-right: 1px solid @aside-menu-border-color;
  color: @white;
  .ant-menu {
    &-submenu {
      border-bottom: 1px solid @aside-submenu-border-color;
    }
    &-submenu-title {
      margin: 0 !important;
      background-color: @aside-menu-bg;
      &:hover {
        background-color: @aside-menu-hover-bg !important;
      }
    }
    &-sub {
      background-color: @aside-menu-expand-bg !important;
      .ant-menu-item {
        margin: 0 !important;
        &:hover {
          background-color: @aside-menu-hover-bg !important;
        }
      }
    }
    &-submenu-active,
    &-submenu-selected {
      .ant-menu-sub {
        .ant-menu-item-selected {
          background-color: @aside-menu-active-bg !important;
        }
      }
    }
    &-item-icon,
    &-title-content {
      color: @aside-menu-text-color;
    }
    &-submenu-arrow {
      &::after,
      &::before {
        background-color: @aside-menu-text-color !important;
      }
    }
  }
}
</style>
