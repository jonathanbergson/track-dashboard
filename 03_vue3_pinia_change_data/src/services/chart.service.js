import data from './data.json';

export const getChartData = (chartUUID) => {
  const chart = data.find((item) => item.uuid === chartUUID);

  return {
    uuid: chart.uuid,
    name: chart.name,
    color: chart.color,
  };
};
