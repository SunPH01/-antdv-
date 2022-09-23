import { defineStore } from "pinia";
import { Menu } from "@/router/types";

interface AppState {
  themeName: string;
  menus: Menu[];
  currentMenu: Menu;
}
export const useAppStore = defineStore("app", {
  state: (): AppState => {
    return {
      // 主题 dark light
      themeName: localStorage.getItem("theme") || "dark",
      menus: null as unknown as Menu[],
      currentMenu: null as unknown as Menu,
    };
  },
  getters: {
    getThemeName(): string {
      return this.themeName;
    },
    getMenus(): Menu[] {
      return this.menus || [];
    },
    getCurrentMenu(): Menu {
      const locaMenu = localStorage.getItem("currentMenu");
      return this.currentMenu || JSON.parse(locaMenu || "{}");
    },
  },
  actions: {
    setThemeName(name: string) {
      this.themeName = name;
      localStorage.setItem("theme", name);
    },
    setMenus(payload: Menu[]) {
      this.menus = payload;
    },
    setCurrentMenu(payload: Menu) {
      this.currentMenu = payload;
      localStorage.setItem("currentMenu", JSON.stringify(payload));
    },
  },
});
