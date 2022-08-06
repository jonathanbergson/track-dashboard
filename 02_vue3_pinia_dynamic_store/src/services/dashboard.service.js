import data from './data.json';

export const apiGetChartsLayout = () => data.map((chart) => ({
  uuid: chart.uuid,
  layout: chart.layout,
}));
