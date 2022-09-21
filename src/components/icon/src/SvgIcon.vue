<template>
  <svg
    :class="[$attrs.class, spin && 'svg-icon-spin']"
    :style="getStyle"
    aria-hidden="true"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "SvgIcon",
  props: {
    prefix: {
      type: String,
      default: "icon",
    },
    name: {
      type: String,
      required: true,
    },
    size: {
      type: [Number, String],
      default: 16,
    },
    spin: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const symbolId = computed(() => {
      return props.prefix ? `#${props.prefix}-${props.name}` : `#${props.name}`;
    });

    const getStyle = computed(() => {
      const { size } = props;
      let s = `${size}`;
      s = `${s.replace("px", "")}px`;
      return {
        width: s,
        height: s,
      };
    });
    return { symbolId, getStyle };
  },
});
</script>
<style lang="less">
@prefix-cls: ~"@{ant-prefix}-comp-svg-icon";

.@{prefix-cls} {
  display: inline-block;
  overflow: hidden;
  vertical-align: -0.15em;
  fill: currentColor;
}

.svg-icon-spin {
  animation: loadingCircle 1s infinite linear;
}
</style>
