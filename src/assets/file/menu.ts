export interface MenuItem {
  name: string;
  value: string;
  path?: string;
  icon?: string;
  children?: Array<MenuItem>;
}

const menu: Array<MenuItem> = [
  {
    name: "CSS",
    value: "CssModule",
    path: "",
    icon: "fluent:document-css-20-regular",
    children: [
      {
        name: "Antdv",
        value: "Antdv",
        path: "",
        icon: "logos:ant-design",
        children: [
          {
            name: "动态主题切换",
            value: "AntdvTheme",
            path: "/css/antdv/theme",
          },
        ],
      },
    ],
  },
  {
    name: "插件",
    value: "Plugins",
    path: "",
    icon: "arcticons:game-plugins",
    children: [
      {
        name: "文件处理",
        value: "files",
        path: "",
        icon: "arcticons:files",
        children: [
          {
            name: "excel处理",
            value: "excel",
            path: "/plugins/files/excel",
          },
        ],
      },
    ],
  },
];

export default menu;
