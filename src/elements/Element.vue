<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions([
      "selectElement",
      "elementOutputMouseDown",
      "elementInputMouseUp"
    ])
  },
  computed: {
    x() {
      return this.element.x;
    },
    y() {
      return this.element.y;
    },
    outputPos() {
      return {
        x: this.element.x + 20,
        y: this.element.y + 10
      };
    },
    inputAPos() {
      return {
        x: this.element.x,
        y: this.element.y + 20 / 3
      };
    },
    inputBPos() {
      return {
        x: this.element.x,
        y: this.element.y + 20 * 0.66
      };
    }
  }
};
</script>
