<template>
  <div class="layout-header pl">
    <img src="@/assets/img/logo.png" />
    <span class="pl">demo</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
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
