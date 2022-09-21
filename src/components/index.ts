import type { App } from "vue";

export function installGlobComp(app: App) {
  const modules = require.context("./", true, /index\.ts(x?)$/);
  modules.keys().forEach((key: string) => {
    const fn = modules(key).install;
    if (typeof fn === "function") {
      fn(app);
    }
  });
}
