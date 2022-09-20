<template>
  <excel-import
    :set-export-data="setExportData"
    :get-import-data="getImportData"
  >
    <template v-slot:export>
      <a-button type="default" plain size="mini">导出</a-button>
    </template>
    <template v-slot:import>
      <a-button type="primary" plain size="mini">导入</a-button>
    </template>
  </excel-import>
</template>
<script>
import ExcelImport from "@/components/ExcelImport.vue";
export default {
  components: { ExcelImport },
  methods: {
    setExportData() {
      return {
        excelTitle: {
          code: "编号",
          name: "名称",
        },
        excelData: [],
        excelName: "导出",
      };
    },
    getImportData(data) {
      console.log(data);
    },
  },
};
</script>
