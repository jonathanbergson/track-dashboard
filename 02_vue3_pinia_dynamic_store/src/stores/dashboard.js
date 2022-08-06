import { ref } from 'vue';
import { defineStore } from 'pinia';
import { apiGetChartsLayout } from '../services/dashboard.service';

export const useDashboardStore = defineStore('dashboard', () => {
  const graphs = ref([]);

  function getGraphs() {
    graphs.value = apiGetChartsLayout();
  }

  return { graphs, getGraphs };
});
