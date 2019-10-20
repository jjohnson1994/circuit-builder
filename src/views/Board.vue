<template>
  <div class="flex fle-column">
    <div class="flex flex-row">
      <div class="flex flex-column">
        <button
          v-for="element in elements"
          :key="element"
          @click="addElement(element)"
        >
          {{ element }}
        </button>
      </div>
      <svg
        width="100%"
        height="100vh"
        vieport="0 0 1000 1000"
        @mousedown="boardMouseDown"
        @mouseup="boardMouseUp"
      >
        <g v-for="(element, key) in board" :key="key">
          <component
            :is="element.type"
            :element="element"
            @click="startAction(element)"
          />
          <Link :element="element" />
        </g>
      </svg>
      <div v-if="selectedElement" class="flex flex-column">
        <h4>{{ selectedElement.type }}</h4>
        {{ selectedElement }}
        <div v-for="(input, key) in selectedElement.input" :key="key">
          <select v-model="selectedElement.input[key]">
            <option v-for="(element, key) in board" :key="key" :value="key">
              {{ key }}
            </option>
          </select>
        </div>
        <button
          @click="
            setElementInput({ index: 0, element: selectedElement, value: 'a' })
          "
        >
          Add Input
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Battery from "@/elements/Battery.vue";
import Button from "@/elements/Button.vue";
import LED from "@/elements/LED.vue";
import Link from "@/elements/Link";
import OR from "@/elements/OR.vue";

const randomId = () =>
  Math.random()
    .toString(32)
    .substring(2);

export default {
  name: "Board",
  components: {
    Battery,
    Button,
    LED,
    Link,
    OR
  },
  computed: {
    ...mapState(["selectedElement", "elements", "board", "actions"])
  },
  created() {
    const powerBlock = Object.keys(this.board).reduce((acc, cur) => {
      if (this.board[cur].type === "battery") {
        acc = this.board[cur];
      }

      return acc;
    }, false);

    this.powerChilden(powerBlock);
  },
  methods: {
    ...mapActions([
      "selectElement",
      "startAction",
      "boardMouseDown",
      "boardMouseUp"
    ]),
    powerChilden(parent) {
      const childrenBlocks = Object.keys(this.board).reduce((acc, cur) => {
        if (this.board[cur].input.includes(parent)) {
          acc[cur] = this.board[cur];
        }

        return acc;
      }, {});

      for (let childBlock in childrenBlocks) {
        this.powerChilden(this.board[childBlock]);
      }
    },
    addElement(type) {
      const board = this.board;
      const newId = randomId();

      switch (type) {
        case "Button":
          this.$set(board, newId, {
            type: type,
            input: [board.a],
            open: true,
            get output() {
              return board[newId].input.reduce((acc, cur) => {
                acc = acc ? acc : cur.output;
                return acc;
              }, false);
            },
            click() {
              this.open = !this.open;
            },
            x: 100,
            y: 70
          });
          break;
        default:
          this.$set(board, newId, {
            type: type,
            input: [board.a],
            get output() {
              return board[newId].input.reduce((acc, cur) => {
                acc = acc ? acc : cur.output;
                return acc;
              }, false);
            },
            x: 100,
            y: 70
          });
          break;
      }
    }
  }
};
</script>
