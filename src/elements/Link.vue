<template>
  <g>
    <g v-for="(input, index) in element.input" :key="`input_${index}`">
      <line
        :x1="input.x"
        :y1="input.y"
        :x2="element.x"
        :y2="element.y"
        :style="{ stroke: input.output ? 'red' : 'black' }"
      />
    </g>
  </g>
</template>

<script>
export default {
  name: "Link",
  props: ["element"]
};
</script>

<style></style>
