<script setup>
import { defineProps } from 'vue';
import { useChartStore } from '../stores/chart';

const store = useChartStore();
const props = defineProps({
  uuid: { type: String, default: 'red' },
  layout: { type: Object, default: () => {} },
});
store.callApi(props.uuid);

const chart = store.getData(props.uuid);
const styles = {
  backgroundColor: chart.value.color,
  height: `${props.layout.h}px`,
  left: `${props.layout.x}px`,
  top: `${props.layout.y}px`,
  width: `${props.layout.w}px`,
};
</script>

<template>
  <div
    class="graph-item"
    :style="styles"
  >
    <p>{{ chart.name }}</p>
  </div>
</template>

<style scoped>
.graph-item {
  --border-radius: 1rem;

  align-items: center;
  border-radius: var(--border-radius);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  position: absolute;
}
</style>
