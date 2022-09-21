interface MenuItem {
  name: string;
  value: string;
  path?: string;
  icon?: string;
  children?: Array<MenuItem>;
}

const menu: Array<MenuItem> = [
  {
    name: "UI",
    value: "CssMudel",
    path: "",
    icon: "emojione-monotone:artist-palette",
    children: [
      {
        name: "antdv主题切换",
        value: "AntdvTheme",
        path: "/antdv/theme",
      },
    ],
  },
];

export default menu;
