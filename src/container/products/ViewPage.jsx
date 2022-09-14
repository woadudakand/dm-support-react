import React, { lazy, Suspense } from 'react';
import { Row, Col, Radio, Spin, Skeleton, Input } from 'antd';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilSearch from '@iconscout/react-unicons/icons/uil-search';
import { useDispatch } from 'react-redux';
import { TopToolBox } from './Style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { filterBySearch, filterByStatus } from '../../redux/product/actionCreator';

const Filters = lazy(() => import('./overview/Filters'));
const Table = lazy(() => import('./overview/Table'));

function ProductView() {
  const dispatch = useDispatch();
  const PageRoutes = [
    {
      path: '/product',
      breadcrumbName: 'Product',
    },
    {
      path: '/product/view',
      breadcrumbName: 'View',
    },
  ];

  const handleSearch = (event) => {
    dispatch(filterBySearch(event.target.value));
  };

  const handleChangeForFilter = (e) => {
    console.log(e.target.value);
    dispatch(filterByStatus(e.target.value));
  };

  return (
    <>
      <PageHeader className="dm-page-header-main" title="Products" routes={PageRoutes} />
      <Main>
        <Row gutter={30}>
          <Col className="product-sidebar-col" xxl={5} xl={7} lg={7} md={10} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton paragraph={{ rows: 22 }} active />
                </Cards>
              }
            >
              <Filters />
            </Suspense>
          </Col>
          <Col className="product-content-col" xxl={19} lg={17} md={14} xs={24}>
            <Cards headless>
              <TopToolBox>
                <Row gutter={15} className="justify-content-center">
                  <Col lg={7} xs={24}>
                    <div className="table-search-box">
                      <Input
                        placeholder="Filter by keyword"
                        onChange={handleSearch}
                        width="100%"
                        prefix={<UilSearch />}
                      />
                    </div>
                  </Col>
                  <Col xxl={9} lg={16} xs={24}>
                    <Row className="justify-content-center">
                      <div className="table-toolbox-menu">
                        <span className="toolbox-menu-title"> Status:</span>
                        <Radio.Group onChange={handleChangeForFilter} defaultValue="all">
                          <Radio.Button value="all">All</Radio.Button>
                          <Radio.Button value="published">Published</Radio.Button>
                          <Radio.Button value="draft">Draft</Radio.Button>
                        </Radio.Group>
                      </div>
                    </Row>
                  </Col>
                  <Col xxl={8} xs={24}>
                    <div className="table-toolbox-actions">
                      <Button size="small" type="primary">
                        <UilPlus /> Add Product
                      </Button>
                    </div>
                  </Col>
                </Row>
              </TopToolBox>

              <Suspense
                fallback={
                  <div className="spin d-flex align-center-v">
                    <Spin />
                  </div>
                }
              >
                <Table />
              </Suspense>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default ProductView;
