<template>
  <Main />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Main from "./layout/Main.vue";
import { useTheme } from "@/utils/theme/useTheme";
import { useAppStore } from "@/store/modules/app";

export default defineComponent({
  components: { Main },
  setup() {
    const appStore = useAppStore();
    onMounted(() => {
      useTheme(appStore.getThemeName);
    });
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
