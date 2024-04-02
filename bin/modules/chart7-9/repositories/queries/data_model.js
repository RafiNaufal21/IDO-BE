const cardModel = {
  total_ticket_title: 'Total Ticket',
  total_ticket_tooltip: 'Total Ticket',
  total_ticket_value: '',
  total_ticket_growth: '',
  resolution_rate_title: 'Resolution Rate',
  resolution_rate_tooltip: 'Resolution Rate',
  resolution_rate_value: '',
  resolution_rate_growth: '',
  avg_resolved_time_title: 'Avg Resolved Time',
  avg_resolved_time_tooltip: 'Avg Resolved Time',
  avg_resolved_time_value: '',
  avg_resolved_time_growth: '',
  avg_ticket_per_day_title: 'Avg Ticket Per Day',
  avg_ticket_per_day_tooltip: 'Avg Ticket Per Day',
  avg_ticket_per_day_value: '',
  avg_ticket_per_day_growth: '',
};

const heatmapModel = [
  {
    name: 'Sunday',
    data: [
      {
        x: '12 AM',
        y: 0,
      },
      {
        x: '1 AM',
        y: 0,
      },
      {
        x: '2 AM',
        y: 0,
      },
      {
        x: '3 AM',
        y: 0,
      },
      {
        x: '4 AM',
        y: 0,
      },
      {
        x: '5 AM',
        y: 0,
      },
      {
        x: '6 AM',
        y: 0,
      },
      {
        x: '7 AM',
        y: 0,
      },
      {
        x: '8 AM',
        y: 0,
      },
      {
        x: '9 AM',
        y: 0,
      },
      {
        x: '10 AM',
        y: 0,
      },
      {
        x: '11 AM',
        y: 0,
      },
      {
        x: '12 PM',
        y: 0,
      },
      {
        x: '1 PM',
        y: 0,
      },
      {
        x: '2 PM',
        y: 0,
      },
      {
        x: '3 PM',
        y: 0,
      },
      {
        x: '4 PM',
        y: 0,
      },
      {
        x: '5 PM',
        y: 0,
      },
      {
        x: '6 PM',
        y: 0,
      },
      {
        x: '7 PM',
        y: 0,
      },
      {
        x: '8 PM',
        y: 0,
      },
      {
        x: '9 PM',
        y: 0,
      },
      {
        x: '10 PM',
        y: 0,
      },
      {
        x: '11 PM',
        y: 0,
      },
    ],
  },
  {
    name: 'Monday',
    data: [
      {
        x: '12 AM',
        y: 0,
      },
      {
        x: '1 AM',
        y: 0,
      },
      {
        x: '2 AM',
        y: 0,
      },
      {
        x: '3 AM',
        y: 0,
      },
      {
        x: '4 AM',
        y: 0,
      },
      {
        x: '5 AM',
        y: 0,
      },
      {
        x: '6 AM',
        y: 0,
      },
      {
        x: '7 AM',
        y: 0,
      },
      {
        x: '8 AM',
        y: 0,
      },
      {
        x: '9 AM',
        y: 0,
      },
      {
        x: '10 AM',
        y: 0,
      },
      {
        x: '11 AM',
        y: 0,
      },
      {
        x: '12 PM',
        y: 0,
      },
      {
        x: '1 PM',
        y: 0,
      },
      {
        x: '2 PM',
        y: 0,
      },
      {
        x: '3 PM',
        y: 0,
      },
      {
        x: '4 PM',
        y: 0,
      },
      {
        x: '5 PM',
        y: 0,
      },
      {
        x: '6 PM',
        y: 0,
      },
      {
        x: '7 PM',
        y: 0,
      },
      {
        x: '8 PM',
        y: 0,
      },
      {
        x: '9 PM',
        y: 0,
      },
      {
        x: '10 PM',
        y: 0,
      },
      {
        x: '11 PM',
        y: 0,
      },
    ],
  },
  {
    name: 'Tuesday',
    data: [
      {
        x: '12 AM',
        y: 0,
      },
      {
        x: '1 AM',
        y: 0,
      },
      {
        x: '2 AM',
        y: 0,
      },
      {
        x: '3 AM',
        y: 0,
      },
      {
        x: '4 AM',
        y: 0,
      },
      {
        x: '5 AM',
        y: 0,
      },
      {
        x: '6 AM',
        y: 0,
      },
      {
        x: '7 AM',
        y: 0,
      },
      {
        x: '8 AM',
        y: 0,
      },
      {
        x: '9 AM',
        y: 0,
      },
      {
        x: '10 AM',
        y: 0,
      },
      {
        x: '11 AM',
        y: 0,
      },
      {
        x: '12 PM',
        y: 0,
      },
      {
        x: '1 PM',
        y: 0,
      },
      {
        x: '2 PM',
        y: 0,
      },
      {
        x: '3 PM',
        y: 0,
      },
      {
        x: '4 PM',
        y: 0,
      },
      {
        x: '5 PM',
        y: 0,
      },
      {
        x: '6 PM',
        y: 0,
      },
      {
        x: '7 PM',
        y: 0,
      },
      {
        x: '8 PM',
        y: 0,
      },
      {
        x: '9 PM',
        y: 0,
      },
      {
        x: '10 PM',
        y: 0,
      },
      {
        x: '11 PM',
        y: 0,
      },
    ],
  },
  {
    name: 'Wednesday',
    data: [
      {
        x: '12 AM',
        y: 0,
      },
      {
        x: '1 AM',
        y: 0,
      },
      {
        x: '2 AM',
        y: 0,
      },
      {
        x: '3 AM',
        y: 0,
      },
      {
        x: '4 AM',
        y: 0,
      },
      {
        x: '5 AM',
        y: 0,
      },
      {
        x: '6 AM',
        y: 0,
      },
      {
        x: '7 AM',
        y: 0,
      },
      {
        x: '8 AM',
        y: 0,
      },
      {
        x: '9 AM',
        y: 0,
      },
      {
        x: '10 AM',
        y: 0,
      },
      {
        x: '11 AM',
        y: 0,
      },
      {
        x: '12 PM',
        y: 0,
      },
      {
        x: '1 PM',
        y: 0,
      },
      {
        x: '2 PM',
        y: 0,
      },
      {
        x: '3 PM',
        y: 0,
      },
      {
        x: '4 PM',
        y: 0,
      },
      {
        x: '5 PM',
        y: 0,
      },
      {
        x: '6 PM',
        y: 0,
      },
      {
        x: '7 PM',
        y: 0,
      },
      {
        x: '8 PM',
        y: 0,
      },
      {
        x: '9 PM',
        y: 0,
      },
      {
        x: '10 PM',
        y: 0,
      },
      {
        x: '11 PM',
        y: 0,
      },
    ],
  },
  {
    name: 'Thursday',
    data: [
      {
        x: '12 AM',
        y: 0,
      },
      {
        x: '1 AM',
        y: 0,
      },
      {
        x: '2 AM',
        y: 0,
      },
      {
        x: '3 AM',
        y: 0,
      },
      {
        x: '4 AM',
        y: 0,
      },
      {
        x: '5 AM',
        y: 0,
      },
      {
        x: '6 AM',
        y: 0,
      },
      {
        x: '7 AM',
        y: 0,
      },
      {
        x: '8 AM',
        y: 0,
      },
      {
        x: '9 AM',
        y: 0,
      },
      {
        x: '10 AM',
        y: 0,
      },
      {
        x: '11 AM',
        y: 0,
      },
      {
        x: '12 PM',
        y: 0,
      },
      {
        x: '1 PM',
        y: 0,
      },
      {
        x: '2 PM',
        y: 0,
      },
      {
        x: '3 PM',
        y: 0,
      },
      {
        x: '4 PM',
        y: 0,
      },
      {
        x: '5 PM',
        y: 0,
      },
      {
        x: '6 PM',
        y: 0,
      },
      {
        x: '7 PM',
        y: 0,
      },
      {
        x: '8 PM',
        y: 0,
      },
      {
        x: '9 PM',
        y: 0,
      },
      {
        x: '10 PM',
        y: 0,
      },
      {
        x: '11 PM',
        y: 0,
      },
    ],
  },
  {
    name: 'Friday',
    data: [
      {
        x: '12 AM',
        y: 0,
      },
      {
        x: '1 AM',
        y: 0,
      },
      {
        x: '2 AM',
        y: 0,
      },
      {
        x: '3 AM',
        y: 0,
      },
      {
        x: '4 AM',
        y: 0,
      },
      {
        x: '5 AM',
        y: 0,
      },
      {
        x: '6 AM',
        y: 0,
      },
      {
        x: '7 AM',
        y: 0,
      },
      {
        x: '8 AM',
        y: 0,
      },
      {
        x: '9 AM',
        y: 0,
      },
      {
        x: '10 AM',
        y: 0,
      },
      {
        x: '11 AM',
        y: 0,
      },
      {
        x: '12 PM',
        y: 0,
      },
      {
        x: '1 PM',
        y: 0,
      },
      {
        x: '2 PM',
        y: 0,
      },
      {
        x: '3 PM',
        y: 0,
      },
      {
        x: '4 PM',
        y: 0,
      },
      {
        x: '5 PM',
        y: 0,
      },
      {
        x: '6 PM',
        y: 0,
      },
      {
        x: '7 PM',
        y: 0,
      },
      {
        x: '8 PM',
        y: 0,
      },
      {
        x: '9 PM',
        y: 0,
      },
      {
        x: '10 PM',
        y: 0,
      },
      {
        x: '11 PM',
        y: 0,
      },
    ],
  },
  {
    name: 'Saturday',
    data: [
      {
        x: '12 AM',
        y: 0,
      },
      {
        x: '1 AM',
        y: 0,
      },
      {
        x: '2 AM',
        y: 0,
      },
      {
        x: '3 AM',
        y: 0,
      },
      {
        x: '4 AM',
        y: 0,
      },
      {
        x: '5 AM',
        y: 0,
      },
      {
        x: '6 AM',
        y: 0,
      },
      {
        x: '7 AM',
        y: 0,
      },
      {
        x: '8 AM',
        y: 0,
      },
      {
        x: '9 AM',
        y: 0,
      },
      {
        x: '10 AM',
        y: 0,
      },
      {
        x: '11 AM',
        y: 0,
      },
      {
        x: '12 PM',
        y: 0,
      },
      {
        x: '1 PM',
        y: 0,
      },
      {
        x: '2 PM',
        y: 0,
      },
      {
        x: '3 PM',
        y: 0,
      },
      {
        x: '4 PM',
        y: 0,
      },
      {
        x: '5 PM',
        y: 0,
      },
      {
        x: '6 PM',
        y: 0,
      },
      {
        x: '7 PM',
        y: 0,
      },
      {
        x: '8 PM',
        y: 0,
      },
      {
        x: '9 PM',
        y: 0,
      },
      {
        x: '10 PM',
        y: 0,
      },
      {
        x: '11 PM',
        y: 0,
      },
    ],
  },
];

module.exports = {
  cardModel,
  heatmapModel,
};

