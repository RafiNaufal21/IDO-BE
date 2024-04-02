const Query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
const logger = require('../../../../helpers/utils/logger');
const { NotFoundError } = require('../../../../helpers/error');
const ctx = 'LineChart-Query-Domain';
const {
  transformPieChart,
  transformLineChart,
  transformBarChart,
  transfromNormalTable,
} = require('../../../../helpers/utils/chart_helper');

class Chart {
  constructor(db) {
    this.query = new Query(db);
  }
  //Line Chart
  async getLineChart() {
    const response = await this.query.findMany({}, null, null, 1, 0);
    if (response.err) {
      logger.error(ctx, response.err, 'can not find data ticket Mudik');
      return wrapper.error(new NotFoundError('can not find ticket Mudik'));
    }
    const title = 'Daily Total Ticket Mudik';
    const tooltip = 'Daily Total Ticket Mudik';

    return wrapper.data(
      transformLineChart(response.data, title, tooltip, 'category')
    );
  }

  //Bar chart
  async getBarChart() {
    const response = await this.query.findMany({}, null, null, 1, 0);
    if (response.err) {
      logger.error(ctx, response.err, 'can not find data ticket Mudik');
      return wrapper.error(new NotFoundError('can not find ticket Mudik'));
    }
    const title = 'Daily Total Ticket Mudik Use Bar Chart Basic';
    const tooltip = 'Daily Total Ticket Mudik';

    return wrapper.data(
      transformBarChart(response.data, title, tooltip, 'series0')
    );
  }
  async getStackedBarChart() {
    const response = await this.query.findMany({}, null, null, 1, 0);
    if (response.err) {
      logger.error(ctx, response.err, 'can not find data ticket Mudik');
      return wrapper.error(new NotFoundError('can not find ticket Mudik'));
    }
    const title = 'Daily Total Ticket Mudik use Stacked Bar Chart';
    const tooltip = 'Daily Total Ticket Mudik';

    return wrapper.data(
      transformBarChart(response.data, title, tooltip, 'series0')
    );
  }

  async getGroupedBarChart() {
    const response = await this.query.findMany({}, null, null, 1, 0);
    if (response.err) {
      logger.error(ctx, response.err, 'can not find data ticket Mudik');
      return wrapper.error(new NotFoundError('can not find ticket Mudik'));
    }
    const title = 'Daily Total Ticket Mudik use Grouped Bar Chart';
    const tooltip = 'Daily Total Ticket Mudik';

    return wrapper.data(
      transformBarChart(response.data, title, tooltip, 'category')
    );
  }

  async getBarChartById(payload) {
    const mudik = await this.query.findById(payload.id, {
      _id: 1,
      category: 1,
      Dekstop: 1,
    });
    if (mudik.err) {
      logger.error(`${ctx}:getMudik`, 'Can not find mudik', mudik.err);
      return wrapper.error(new NotFoundError('Can not find mudik'));
    }
    const { data } = mudik;
    return wrapper.data(data);
  }

  //Pie Chart & Donut Chart
  async getPieChart() {
    const response = await this.query.findMany({}, null, null, 1, 0);
    if (response.err) {
      logger.error(ctx, response.err, 'can not find data ticket Mudik');
      return wrapper.error(new NotFoundError('can not find ticket Mudik'));
    }
    const title = 'Daily Total Ticket Mudik Use Pie Chart';
    const tooltip = 'Daily Total Ticket Mudik ';

    return wrapper.data(transformPieChart(response.data, title, tooltip));
  }

  async getDoughnutChart() {
    const response = await this.query.findMany({}, null, null, 1, 0);
    if (response.err) {
      logger.error(ctx, response.err, 'can not find data ticket Mudik');
      return wrapper.error(new NotFoundError('can not find ticket Mudik'));
    }
    const title = 'Daily Total Ticket Mudik Use Doughnut Chart';
    const tooltip = 'Daily Total Ticket Mudik';

    return wrapper.data(transformPieChart(response.data, title, tooltip));
  }

  //Table Chart
  async getTableChart() {
    const response = await this.query.findMany({}, null, null, 1, 0);
    if (response.err) {
      logger.error(ctx, response.err, 'can not find data ticket Mudik');
      return wrapper.error(new NotFoundError('can not find ticket Mudik'));
    }
    const title = 'Daily Total Ticket Mudik Use Table Chart';
    const tooltip = 'Daily Total Ticket Mudik';
    // const meta = {
    //   current_page: page,
    //   total_page: Math.ceil(totalData.data.data[0].total_data / limit),
    //   item_per_page: limit,
    //   total_item: totalData.data.data[0].total_data,
    // };
    return wrapper.data(transfromNormalTable(response.data, title, tooltip));
  }
}
module.exports = Chart;

