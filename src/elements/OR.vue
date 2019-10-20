<template>
  <g>
    <rect
      :x="element.x"
      :y="element.y"
      width="20"
      height="20"
      :style="{
        fill: element.output ? 'purple' : 'white',
        stroke: 'purple'
      }"
      @click="selectElement(element)"
    />
    <circle
      @mousedown="elementOutputMouseDown(element)"
      :cx="outputPos.x"
      :cy="outputPos.y"
      :r="3"
    />
    <circle
      @mouseup="elementInputMouseUp({ element, input: 0 })"
      :cx="inputAPos.x"
      :cy="inputAPos.y"
      :r="3"
    />
    <circle
      @mouseup="elementInputMouseUp({ element, input: 1 })"
      :cx="inputBPos.x"
      :cy="inputBPos.y"
      :r="3"
    />
  </g>
</template>

<script>
import Element from "@/elements/Element";

export default {
  props: ["element"],
  name: "OR",
  mixins: [Element]
};
</script>

<style></style>
