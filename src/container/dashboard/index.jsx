import React, { Suspense, lazy } from 'react';
import { Row, Col, Skeleton } from 'antd';
import Separator from './overview/index/Separator';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';

const OverviewDataList = lazy(() => import('./overview/index/OverviewDataList'));
const SupportTicketOverview = lazy(() => import('./overview/index/SupportTicketOverview'));
const TicketTypes = lazy(() => import('./overview/index/TicketTypes'));
const ResponseTime = lazy(() => import('./overview/index/ResponseTime'));
const CustomerSatisfaction = lazy(() => import('./overview/index/CustomerSatisfaction'));
const AllSupports = lazy(() => import('./overview/index/AllSupports'));

function Dashboard() {
  return (
    <>
      <Main>
        <div style={{ padding: '20px 0' }}>
          <Heading as="h2">Hey, Danial White!</Heading>
          <p>Welcome to dashboard, Manage your all support ticket</p>
        </div>

        <Row gutter={25}>
          <Col xxl={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <SupportTicketOverview />
            </Suspense>
          </Col>
          <Col xxl={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <OverviewDataList />
            </Suspense>
          </Col>
        </Row>
        <Row gutter={25}>
          <Col xxl={8} xl={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <TicketTypes />
            </Suspense>
          </Col>
          <Col xxl={8} xl={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <ResponseTime />
            </Suspense>
          </Col>

          <Col xxl={8} xl={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <CustomerSatisfaction />
            </Suspense>
          </Col>
          <Col xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Separator />
            </Suspense>
          </Col>
          <Col xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <AllSupports />
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Dashboard;
