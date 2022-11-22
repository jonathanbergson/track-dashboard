import { ref } from 'vue';
import { defineStore } from 'pinia';
import { apiGetChartList } from '../services/chart.service';

export const useDashboardStore = defineStore('dashboard', () => {
  const chartList = ref([]);

  function getCharts() {
    chartList.value = apiGetChartList();
  }

  return { chartList, getCharts };
});
