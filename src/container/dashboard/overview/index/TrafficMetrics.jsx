import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Select, Table } from 'antd';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { BorderLessHeading, TableDefaultStyle } from '../../../styled';

import tableData from '../../../../demoData/table-data.json';
import { MetricsWrapper } from '../../Style';

const { trafficMetrics } = tableData;

const locationColumns = [
  {
    title: 'Social Network',
    dataIndex: 'network',
    key: 'network',
  },
  {
    title: 'Users',
    dataIndex: 'users',
    key: 'users',
  },
  {
    title: 'New Users',
    dataIndex: 'nUsers',
    key: 'nUsers',
  },
  {
    title: 'Session',
    dataIndex: 'session',
    key: 'session',
  },
  {
    title: 'Bounce Rate',
    dataIndex: 'rate',
    key: 'rate',
  },
  {
    title: 'Pages / Session',
    dataIndex: 'pages',
    key: 'pages',
  },
  {
    title: 'Avg. Session Duration',
    dataIndex: 'duration',
    key: 'duration',
  },
];

const TrafficMetrics = React.memo(({ title }) => {
  const [trafficTab, setTrafficTab] = useState('month');

  const handleTabActivation = (value) => {
    setTrafficTab(value);
  };

  const metricsData = [];

  if (trafficMetrics !== null) {
    trafficMetrics[trafficTab].map((value) => {
      const { key, name, icon, users, nUsers, pages, rate, session, duration } = value;
      return metricsData.push({
        key,
        network: (
          <div className="dm-revenue-company align-center-v">
            <div className={`dm-revenue-company__icon dm-revenue-company__icon-${icon}`}>
              <i className={`fa fa-${icon}`} />
            </div>
            <div className="dm-revenue-company__content">
              <span className="dm-revenue-company__text">{name}</span>
            </div>
          </div>
        ),
        users,
        nUsers,
        pages,
        rate,
        session,
        duration,
      });
    });
  }

  return (
    <BorderLessHeading>
      <Cards
        isbutton={
          <div className="dm-card-nav">
            <Select className="dm-active" onChange={handleTabActivation} defaultValue={trafficTab}>
              <Select.Option value="today">Today</Select.Option>
              <Select.Option value="week">Week</Select.Option>
              <Select.Option value="month">Month</Select.Option>
            </Select>
          </div>
        }
        title={title}
        size="large"
      >
        <TableDefaultStyle className="dm-having-header-bg">
          <MetricsWrapper>
            <div className="table-responsive">
              <Table columns={locationColumns} dataSource={metricsData} pagination={false} />
            </div>
          </MetricsWrapper>
        </TableDefaultStyle>
      </Cards>
    </BorderLessHeading>
  );
});

TrafficMetrics.defaultProps = {
  title: 'Social Traffic Metrics',
};

TrafficMetrics.propTypes = {
  title: PropTypes.string,
};

export default TrafficMetrics;
