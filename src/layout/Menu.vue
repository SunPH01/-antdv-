<template>
  <div class="aside-menu">
    <a-menu mode="inline" theme="dark">
      <a-sub-menu v-for="menu in Menu" :key="menu.value">
        <template #icon>
          <Icon :name="menu.icon" />
        </template>
        <template #title>{{ menu.name }}</template>
        <a-menu-item v-for="item in menu.children" :key="item.value">
          {{ item.name }}
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Menu from "@/assets/file/menu";

export default defineComponent({
  setup() {
    return {
      Menu,
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
  }
}
</style>
