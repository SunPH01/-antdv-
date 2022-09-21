import { defineStore } from "pinia";

interface AppState {
  themeName: string;
}
export const useAppStore = defineStore("app", {
  state: (): AppState => {
    return {
      // 主题 dark light
      themeName: localStorage.getItem("theme") || "dark",
    };
  },
  getters: {
    getThemeName(): string {
      return this.themeName;
    },
  },
  actions: {
    setThemeName(name: string) {
      this.themeName = name;
      localStorage.setItem("theme", name);
    },
  },
});
