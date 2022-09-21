const { generate } = require("@ant-design/colors");
const { getThemeVariables } = require("ant-design-vue/dist/theme");
const path = require("path");
const resolve = (dir) => {
  return path.join(__dirname, dir);
};
module.exports = {
  generateModifyVars(primaryColor) {
    const palettes = generate(primaryColor);
    const primary = palettes[5];

    const primaryColorObj = {};

    for (let index = 0; index < 10; index++) {
      primaryColorObj[`primary-${index + 1}`] = palettes[index];
    }

    const modifyVars = getThemeVariables();
    return {
      ...modifyVars,
      // Used for global import to avoid the need to import each style file separately
      // reference:  Avoid repeated references
      hack: `${modifyVars.hack} @import (reference) "${resolve(
        "../src/design/config.less"
      )}";`,
      "primary-color": primary,
      ...primaryColorObj,
      "info-color": primary,
      "processing-color": primary,
      "success-color": "#55D187", //  Success color
      "error-color": "#ED6F6F", //  False color
      "warning-color": "#EFBD47", //   Warning color
      "font-size-base": "14px", //  Main font size
      "border-radius-base": "2px", //  Component/float fillet
      "link-color": primary, //   Link color
      "app-content-background": "#EBECEE",
      "ant-prefix": "shx",
      "background-color-base": "#f8f8f9",
      "border-color-base": "#D0D5D8",
      "menu-item-height": "48px",
      "tree-node-hover-bg": "#e7f1fc",
      "tree-node-selected-bg": "#dfedfe",
      // "menu-bg": "transparent",
    };
  },
};
