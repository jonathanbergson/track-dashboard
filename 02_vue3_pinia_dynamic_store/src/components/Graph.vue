<script setup>
import { defineProps } from 'vue';
import { useChartStore } from '../stores/chart';

const props = defineProps({
  uuid: { type: String, default: 'red' },
  layout: { type: Object, default: () => {} },
});

const chart = useChartStore(props.uuid);
chart.getData(props.uuid);

const styles = {
  backgroundColor: chart.color,
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
  height: 100%;
  width: 100%;
}
</style>
