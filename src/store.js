import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const board = {
  a: {
    type: "Battery",
    get input() {
      return [true];
    },
    get output() {
      return true;
    },
    x: 10,
    y: 10
  },
  b: {
    type: "Button",
    open: true,
    input: [],
    get output() {
      return !this.open && board.b.input.some(input => input.output);
    },
    click() {
      this.open = !this.open;
    },
    x: 40,
    y: 10
  },
  c: {
    type: "OR",
    input: [],
    get output() {
      return board.c.input.some(input => input.output);
    },
    x: 70,
    y: 25
  },
  d: {
    type: "LED",
    input: [],
    get output() {
      return board.d.input.reduce((acc, cur) => {
        acc = acc ? acc : cur.output;
        return acc;
      }, false);
    },
    x: 100,
    y: 10
  },
  e: {
    type: "LED",
    input: [],
    get output() {
      return board.e.input.reduce((acc, cur) => {
        acc = acc ? acc : cur.output;
        return acc;
      }, false);
    },
    x: 100,
    y: 40
  },
  g: {
    type: "Button",
    open: true,
    input: [],
    get output() {
      return !this.open && board.g.input.some(input => input.output);
    },
    click() {
      this.open = !this.open;
    },
    x: 40,
    y: 40
  }
};

export default new Vuex.Store({
  state: {
    selectedElement: null,
    elements: ["Battery", "Button", "LED", "OR"],
    activeAction: "",
    board,
    elementLinkingFrom: ""
  },
  mutations: {
    setSelectedElement(state, element) {
      state.selectedElement = element;
    },
    setActiveAction(state, action) {
      state.action = action;
    },
    setElementLinkingFrom(state, element) {
      state.elementLinkingFrom = element;
    },
    linkElements(state, { element, index }) {
      element.input.push(state.elementLinkingFrom);
    },
    clearLinkingElement(state) {
      // state.elementLinkingFrom = '';
    }
  },
  actions: {
    selectElement({ commit }, element) {
      commit("setSelectedElement", element);
    },
    setElementInput({ commit }, payload) {
      console.log(payload);
      commit("setElementInput", payload);
    },
    boardMouseUp({ commit }, event) {
      console.log("board mouse up", event);
    },
    boardMouseDown({ commit }, event) {
      console.log("board mouse down", event);
      commit("clearLinkingElement");
    },
    elementOutputMouseDown({ commit }, element) {
      commit("setElementLinkingFrom", element);
    },
    elementInputMouseUp({ commit }, element) {
      commit("linkElements", element);
    }
  }
});
