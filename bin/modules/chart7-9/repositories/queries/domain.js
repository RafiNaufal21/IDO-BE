const Query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
const logger = require('../../../../helpers/utils/logger');
const { NotFoundError } = require('../../../../helpers/error');
const { cardModel, heatmapModel } = require('./data_model');

const ctx = 'Chart-Query-Domain';
const {
  transformScatterChart,
  transformHeatmapWithModel,
  transformHeatmap,
} = require('../../../../helpers/utils/chart_helper');

class Chart {
  constructor(db) {
    this.query = new Query(db);
  }

  async getHeatmap() {
    const response = await this.query.findMany({}, null, null, 1, 0);
    if (response.err) {
      logger.error(ctx, response.err, 'can not find data ticket Mudik');
      return wrapper.error(new NotFoundError('can not find ticket Mudik'));
    }
    if (response.data.length === 0) {
      return wrapper.error(new NotFoundError('Data not found'));
    }
    const title = 'Daily Total Ticket Mudik use Heatmap Chart';
    const tooltip = 'Daily Total Ticket Mudik';
    const result = transformHeatmap(response.data, title, tooltip, 'category');
    return wrapper.data(result);
  }

  async getHeatmapWithModel() {
    const response = await this.query.findMany({}, null, null, 1, 0);
    if (response.err) {
      logger.error(ctx, response.err, 'can not find data ticket Mudik');
      return wrapper.error(new NotFoundError('can not find ticket Mudik'));
    }
    if (response.data.length === 0) {
      return wrapper.error(new NotFoundError('Data not found'));
    }
    const title = 'Daily Total Ticket Mudik use Heatmap Chart';
    const tooltip = 'Daily Total Ticket Mudik';
    const result = transformHeatmapWithModel(
      response.data,
      heatmapModel,
      title,
      tooltip
    );
    return wrapper.data(result);
  }

  async getScatterChart() {
    const response = await this.query.findMany({}, null, null, 1, 0);
    if (response.err) {
      logger.error(ctx, response.err, 'can not find data ticket Mudik');
      return wrapper.error(new NotFoundError('can not find ticket Mudik'));
    }
    const title = 'Daily Total Ticket Mudik use Scatter Chart';
    const tooltip = 'Daily Total Ticket Mudik';
    const xAxis = 'TEAM 1';
    const yAxis = 'TEAM 2';
    return wrapper.data(
      transformScatterChart(
        response.data,
        title,
        tooltip,
        'category',
        xAxis,
        yAxis
      )
    );
  }

  async getTreemapChart() {
    const response = await this.query.findMany({}, null, null, 1, 0);
    if (response.err) {
      logger.error(ctx, response.err, 'can not find data ticket Mudik');
      return wrapper.error(new NotFoundError('can not find ticket Mudik'));
    }
    const title = 'Daily Total Ticket Mudik use Treemap Chart';
    const tooltip = 'Daily Total Ticket Mudik';

    return wrapper.data(transformHeatmap(response.data, title, tooltip));
  }
}
module.exports = Chart;

