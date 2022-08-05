import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { getChartData } from '../services/chart.service';

export const useChartStore = defineStore('chart', () => {
  const charts = ref([]);

  function callApi(uuid) {
    const chart = getChartData(uuid);
    charts.value.push(chart);
  }

  const getData = (uuid) => computed(() => charts.value.find((chart) => chart.uuid === uuid));

  return { charts, callApi, getData };
});
