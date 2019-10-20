<template>
  <g>
    <rect
      :x="element.x"
      :y="element.y"
      width="20"
      height="20"
      :style="{ fill: 'green' }"
    />
    <circle
      @mousedown="elementOutputMouseDown(element)"
      :cx="outputPos.x"
      :cy="outputPos.y"
      :r="3"
    />
  </g>
</template>

<script>
import Element from "@/elements/Element";

export default {
  props: ["element"],
  name: "Battery",
  mixins: [Element]
};
</script>
