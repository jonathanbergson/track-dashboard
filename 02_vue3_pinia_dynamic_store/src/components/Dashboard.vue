<script setup>
import { useDashboardStore } from '../stores/dashboard';
import CoDashboardItem from './DashboardItem.vue';
import CoGraph from './Graph.vue';

const dashboard = useDashboardStore();
dashboard.getGraphs();
</script>

<template>
  <div class="dashboard">
    <header class="dashboard-header">
      <h3>
        Dashboard
      </h3>
    </header>

    <section class="dashboard-graphs">
      <co-dashboard-item
        v-for="graph in dashboard.graphs"
        :key="graph.uuid"
        :height="graph.layout.h"
        :left="graph.layout.x"
        :top="graph.layout.y"
        :width="graph.layout.w"
      >
        <co-graph :uuid="graph.uuid" />
      </co-dashboard-item>
    </section>
  </div>
</template>

<style scoped>
.dashboard {
  --dashboard-padding: 1rem;
  --header-height: 3rem;
  padding: var(--dashboard-padding);
}

.dashboard-header {
  display: flex;
  align-items: center;
  height: var(--header-height);
}

.dashboard-graphs {
  background-color: #c7ecee;
  border-radius: 0.5rem;
  display: flex;
  position: relative;
  height: calc(100vh - var(--dashboard-padding) * 2 - var(--header-height));
  width: calc(100vw - var(--dashboard-padding) * 2);
}
</style>
