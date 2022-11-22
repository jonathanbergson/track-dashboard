import data from './data.json';

export const apiGetChartList = () => data.map((chart) => ({
  uuid: chart.uuid,
  layout: chart.layout,
}));

export const apiGetChartData = (chartUUID) => {
  const chart = data.find((item) => item.uuid === chartUUID);

  return {
    uuid: chart.uuid,
    name: chart.name,
    color: chart.color,
  };
};
