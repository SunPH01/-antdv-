export default [
  {
    path: "antdv",
    name: "AntdvIndex",
    children: [
      {
        path: "theme",
        name: "AntdvTheme",
        meta: { title: "动态主题切换" },
        component: () =>
          import(
            /* webpackChunkName: "FuncPackage" */ "@/views/css/antdv/theme/index.vue"
          ),
      },
    ],
  },
];
