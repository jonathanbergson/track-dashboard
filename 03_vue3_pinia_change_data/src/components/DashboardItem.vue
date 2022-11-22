<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  height: { type: Number, default: 50 },
  left: { type: Number, default: 0 },
  top: { type: Number, default: 0 },
  width: { type: Number, default: 50 },
});

const styles = {
  height: `${props.height}px`,
  left: `${props.left}px`,
  top: `${props.top}px`,
  width: `${props.width}px`,
};
</script>

<template>
  <div
    class="cxm-Dashboard-Item"
    :style="styles"
  >
    <slot />
  </div>
</template>

<style scoped>
.cxm-Dashboard-Item {
  --border-radius: 1rem;
  background-color: aliceblue;
  border-radius: var(--border-radius);
  cursor: move;
  padding: 1rem;
  position: absolute;
}
</style>
