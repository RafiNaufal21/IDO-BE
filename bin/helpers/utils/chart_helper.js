const { formatToSentenceCase } = require('./text_formatter');

// for line chart, bar chart, column chart
const transformLineChart = (data, title, tooltip, xKey) => {
  if (!data || data.length === 0) {
    return {
      title,
      tooltip,
      labels: [],
      series: [],
    };
  }
  const uniqueKey = [...new Set(data.flatMap((item) => Object.keys(item)))];
  const labels = data.map((item) => item[uniqueKey[uniqueKey.indexOf(xKey)]]);
  const uniqueSeriesNames = [
    ...new Set(uniqueKey.filter((element) => element !== xKey)),
  ];
  const series = uniqueSeriesNames.map((seriesName) => ({
    name: seriesName?.replace(/_/g, ' ') || '',
    data: data.map((entry) => entry[seriesName] || 0),
  }));
  return {
    title,
    tooltip,
    labels,
    series,
  };
};

const transformBarChart = (data, title, tooltip, valueKey) => {
  const uniqueKeys = [...new Set(data.flatMap((item) => Object.keys(item)))];
  const uniqueTags = uniqueKeys.filter((key) => key !== valueKey);
  const uniqueLabels = [...new Set(data.map((item) => item[uniqueTags[0]]))];
  const uniqueSeriesNames = [
    ...new Set(data.map((item) => item[uniqueTags[1]])),
  ];
  const result = {
    title: title,
    tooltip: tooltip,
    labels: uniqueLabels,
    series: uniqueSeriesNames.map((seriesName) => ({
      name: seriesName,
      data: uniqueLabels.map((label) => {
        const matchingItem = data.find(
          (item) =>
            item[uniqueTags[0]] === label && item[uniqueTags[1]] === seriesName
        );
        return matchingItem ? matchingItem[valueKey] : 0;
      }),
    })),
  };

  return result;
};

// for pie chart and donut chart
const transformPieChart = (data, title, tooltip) => {
  if (!data || data.length === 0) {
    return {
      title,
      tooltip,
      labels: [],
      series: [],
    };
  }
  const labels = [];
  const series = [];
  const keys = Object.keys(data[0]);
  data.map((data) => {
    labels.push(data[keys[1]]);
    series.push(data[keys[2]]);
    return true;
  });
  const response = {
    title: title,
    tooltip: tooltip,
    labels: labels,
    series: series,
  };
  return response;
};

const transfromNormalTable = (data, title, tooltip) => {
  const response = {
    title: title,
    tooltip: tooltip,
    data: data,
  };
  return response;
};
const transdormHeatmapWithModel = (data, model, title, tooltip) => {
  const findDayIndex = (dayName, model) => {
    return model.findIndex((day) => day.name === dayName);
  };
  const findHourIndex = (hourName, model) => {
    return model.findIndex((hour) => hour.x === hourName);
  };
  data.map((data) => {
    const findDay = findDayIndex(data.weekday, model);
    const findHour = findHourIndex(data.hour, model[findDay].data);
    model[findDay].data[findHour].y = data.avg_eksalasi;
    return true;
  });
  const response = {
    title: title,
    tooltip: tooltip,
    data: model,
  };
  return response;
};

const transformStepper = (data, title, tooltip) => {
  const formattedData = Object.keys(data).map((key) => ({
    icon: data[key],
    title: formatToSentenceCase(key),
  }));
  const response = {
    title: title,
    tooltip: tooltip,
    data: formattedData,
  };
  return response;
};

const transformScatterChart = (data, title, tooltip, label, xAxis, yAxis) => {
  const name = [...new Set(data.map((item) => item[label]))];
  const series = name.map((item) => {
    return {
      name: item,
      data: data
        .filter((point) => point[label] === item)
        .map((point) => {
          return [point[xAxis], point[yAxis]];
        }),
    };
  });
  return {
    title,
    tooltip,
    series,
  };
};

module.exports = {
  transformLineChart,
  transformPieChart,
  transformBarChart,
  transfromNormalTable,
  transdormHeatmapWithModel,
  transformStepper,
  transformScatterChart,
};

