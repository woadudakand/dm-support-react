import React, { useState } from 'react';
import { Row, Col, Spin, Table } from 'antd';
import { useSelector } from 'react-redux';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import UilStar from '@iconscout/react-unicons/icons/uil-star';
import UilEllipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import { Link } from 'react-router-dom';
import { FigureCart } from '../Style';
import { TableWrapper } from '../../styled';
import Heading from '../../../components/heading/heading';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { imageUrl } from '../../../components/utilities/image';

function ViewProducts() {
  const { productsAll, isLoader } = useSelector((state) => {
    return {
      productsAll: state.products.data,
      isLoader: state.products.loading,
    };
  });

  const [pageSize, setSize] = useState(7);

  const dataSource = [];

  if (productsAll.length) {
    productsAll.map((value, key) => {
      const { status, name, category, price, rate, stock, published, orders } = value;

      return dataSource.push({
        key: key + 1,
        product: (
          <div className="product-single">
            <FigureCart>
              <img src={imageUrl(`static/img/products/${key + 1}.png`)} alt="" />
              <figcaption>
                <div className="product-single__info">
                  <Heading as="h6">{name}</Heading>
                  <ul className="info-list">
                    <li>
                      <span className="info-title">
                        {' '}
                        <span className="cat-title">Category:</span> {category}
                      </span>
                    </li>
                  </ul>
                </div>
              </figcaption>
            </FigureCart>
          </div>
        ),
        price: `$${price}`,
        rating: (
          <span className="product_rating">
            <UilStar /> {rate}
          </span>
        ),
        published,
        stock,
        orders,
        status: <span className={`status ${status === 'published' ? 'Success' : 'warning'}`}>{status}</span>,

        action: (
          <Dropdown
            className="wide-dropdwon"
            content={
              <>
                <Link to="#">
                  {' '}
                  <UilEye /> View
                </Link>
                <Link to="#">
                  <UilEdit /> Edit
                </Link>
                <Link to="#">
                  <UilTrashAlt /> Delete
                </Link>
              </>
            }
          >
            <Link to="#">
              <UilEllipsisH />
            </Link>
          </Dropdown>
        ),
      });
    });
  }

  const columns = [
    {
      title: 'Products',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Orders',
      dataIndex: 'orders',
      key: 'orders',
    },
    {
      title: 'Rrating',
      dataIndex: 'rating',
      key: 'rating',
    },
    {
      title: 'Published',
      dataIndex: 'published',
      key: 'published',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
  ];

  const handlePagination = (value) => {
    setSize(value.pageSize);
  };

  return (
    <Row gutter={15}>
      {isLoader ? (
        <div className="spin">
          <Spin />
        </div>
      ) : productsAll.length ? (
        <Col xs={24}>
          <TableWrapper>
            <div className="table-product table-responsive">
              <Table
                rowSelection={false}
                dataSource={dataSource}
                columns={columns}
                pagination={{ pageSize, showSizeChanger: true, total: productsAll.length }}
                onChange={handlePagination}
              />
            </div>
          </TableWrapper>
        </Col>
      ) : (
        <Col xs={24}>
          <Heading as="h1">Data Not Found</Heading>
        </Col>
      )}
    </Row>
  );
}

export default ViewProducts;
