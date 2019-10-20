<template>
  <g>
    <rect
      :x="element.x"
      :y="element.y"
      width="20"
      height="20"
      :style="{ fill: element.output ? 'red' : 'white', stroke: 'red' }"
      @click="selectElement(element)"
    />
    <circle
      @mouseup="elementInputMouseUp({ element, index: 0 })"
      :cx="inputAPos.x"
      :cy="inputAPos.y"
      :r="3"
    />
  </g>
</template>

<script>
import Element from "@/elements/Element";

export default {
  props: ["element"],
  name: "LED",
  mixins: [Element]
};
</script>
