export default [
  {
    path: "files",
    name: "FilesIndex",
    children: [
      {
        path: "excel",
        name: "Excel",
        meta: { title: "excel处理" },
        component: () =>
          import(
            /* webpackChunkName: "FuncPackage" */ "@/views/plugins/files/excel/index.vue"
          ),
      },
    ],
  },
];
