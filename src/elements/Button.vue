<template>
  <g>
    <rect
      :x="element.x"
      :y="element.y"
      width="20"
      height="20"
      @click="
        () => {
          element.click();
          selectElement(element);
        }
      "
      :style="{
        fill: element.output ? 'blue' : 'white',
        stroke: 'blue',
        cursor: 'pointer'
      }"
    />
    <circle
      @mousedown="elementOutputMouseDown(element)"
      :cx="outputPos.x"
      :cy="outputPos.y"
      :r="3"
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
  name: "Button",
  mixins: [Element]
};
</script>
