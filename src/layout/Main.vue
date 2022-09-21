<template>
  <div class="main-wrapper">
    <Header />
    <div class="main-body">
      <Menu />
      <div class="main-content"><router-view /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./Header.vue";
import Menu from "./Menu.vue";
export default defineComponent({
  components: { Header, Menu },
});
</script>
