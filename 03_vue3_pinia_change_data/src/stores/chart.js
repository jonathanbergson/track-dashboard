import { ref } from 'vue';
import { defineStore } from 'pinia';
import { apiGetChartData } from '../services/chart.service';

export const useChartStore = (chartUUID) => (defineStore(`chart-${chartUUID}`, () => {
  const name = ref(null);
  const color = ref(null);

  function getData(uuid) {
    const chart = apiGetChartData(uuid);

    color.value = chart.color;
    name.value = chart.name;
  }

  function setColor(newColor) {
    this.color = newColor;
  }

  return {
    color, name, getData, setColor,
  };
}))();
