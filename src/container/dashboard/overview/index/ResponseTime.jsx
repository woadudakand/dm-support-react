import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import ReactApexChart from 'react-apexcharts';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { BorderLessHeading } from '../../../styled';
import chartContent from '../../../../demoData/supportData.json';
import { apexchartCustomTooltips } from '../../../../components/utilities/utilities';

const ResponseTime = React.memo(({ title }) => {
  const [earningsTab, setEarningsTab] = useState('week');

  const [state] = useState({
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        stackType: 'none',
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left',
        markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: '#fff',
          fillColors: undefined,
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: -2,
          offsetY: 2,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 3,
          columnWidth: '65%',
        },
      },

      fill: {
        opacity: 1,
      },
      tooltip: {
        custom: apexchartCustomTooltips,
      },
      yaxis: {
        labels: {
          formatter(value) {
            const val = `${Math.abs(value)}hr`;
            return val;
          },
        },
      },
    },
  });

  const handleTabActivation = (value) => {
    setEarningsTab(value);
  };

  return (
    <BorderLessHeading>
      <Cards
        isbutton={
          <div className="dm-card-nav">
            <Select className="dm-active" onChange={handleTabActivation} defaultValue={earningsTab}>
              <Select.Option value="today">Today</Select.Option>
              <Select.Option value="week">Week</Select.Option>
              <Select.Option value="month">Month</Select.Option>
            </Select>
          </div>
        }
        title={title}
        size="large"
      >
        <div className="dm-chart-container dm-sales-revenue-lineChart">
          <ReactApexChart
            options={{
              ...state.options,
              xaxis: {
                categories: chartContent[earningsTab].labels,
              },
            }}
            series={[
              {
                name: 'Response',
                data: chartContent[earningsTab].data,
                color: '#599700',
              },
            ]}
            type="bar"
            height={350}
          />
        </div>
      </Cards>
    </BorderLessHeading>
  );
});

ResponseTime.defaultProps = {
  title: 'Response Time',
};

ResponseTime.propTypes = {
  title: PropTypes.string,
};

export default ResponseTime;
