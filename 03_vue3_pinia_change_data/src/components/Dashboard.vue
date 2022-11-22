<script setup>
import { useDashboardStore } from '@/stores/dashboard';
import CxmDashboardItem from '@/components/DashboardItem.vue';
import CxmChart from '@/components/Chart.vue';

const props = defineProps({
  title: { type: String, default: 'Dashboard' },
});

const dashboard = useDashboardStore();
dashboard.getCharts();
</script>

<template>
  <div class="cxm-Dashboard">
    <header class="cxm-Dashboard-Header">
      <h3>{{ props.title }}</h3>
    </header>

    <section class="cxm-Dashboard-ChartList">
      <cxm-dashboard-item
        v-for="chart in dashboard.chartList"
        :key="chart.uuid"
        :height="chart.layout.h"
        :left="chart.layout.x"
        :top="chart.layout.y"
        :width="chart.layout.w"
      >
        <cxm-chart :uuid="chart.uuid" />
      </cxm-dashboard-item>
    </section>
  </div>
</template>

<style scoped>
.cxm-Dashboard {
  --dashboard-padding: 1rem;
  --header-height: 3rem;
  padding: var(--dashboard-padding);
}

.cxm-Dashboard-Header {
  align-items: center;
  display: flex;
  height: var(--header-height);
}

.cxm-Dashboard-ChartList {
  background-color: #c7ecee;
  border-radius: 0.5rem;
  height: calc(100vh - var(--dashboard-padding) * 2 - var(--header-height));
  position: relative;
  width: calc(100vw - var(--dashboard-padding) * 2);
}
</style>
