import React, { lazy, Suspense } from 'react';
import { Row, Col, Table, Skeleton } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';

const NewProduct = lazy(() => import('../dashboard/overview/index/NewProduct'));
const RevenueSource = lazy(() => import('../dashboard/overview/index/RevenueSource'));
const RecentActivity = lazy(() => import('../dashboard/overview/index/RecentActivity'));
const TopSellingProduct = lazy(() => import('../dashboard/overview/index/TopSellingProducts'));
const LatestTransaction = lazy(() => import('../dashboard/overview/index/LatestTransaction'));

function Tables() {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <>
      <PageHeader ghost title="Table" />
      <Main>
        <Row gutter={25}>
          <Col xs={24}>
            <Cards title="Basic Usage">
              <Table className="table-responsive" pagination={false} dataSource={dataSource} columns={columns} />
            </Cards>
          </Col>
          <Col xl={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <NewProduct />
            </Suspense>
          </Col>
          <Col xl={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <RevenueSource />
            </Suspense>
          </Col>
          <Col xl={24} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <RecentActivity />
            </Suspense>
          </Col>
          <Col xl={24} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <TopSellingProduct />
            </Suspense>
          </Col>
          <Col xl={24} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <LatestTransaction />
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Tables;
