import React from 'react';
import { Row, Col, Input, Select, Table, Popconfirm } from 'antd';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { TicketBox } from '../../Style';

import { TableWrapper } from '../../../styled';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import Heading from '../../../../components/heading/heading';
import dataState from '../../../../demoData/support.json';
import { imageUrl } from '../../../../components/utilities/image';

function AllSupports() {
  const dataSource = [];

  const cancel = () => {};

  const prefix = (
    <SearchOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Requested By',
      dataIndex: 'requested',
      key: 'requested',
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Created Date',
      dataIndex: 'createAt',
      key: 'createAt',
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      width: '90px',
    },
  ];

  if (dataState.length) {
    dataState.map((item) => {
      const { id, user, status, subject, priority, createAt } = item;
      return dataSource.push({
        key: `${id}`,
        id: `#${id}`,
        requested: (
          <div className="dm-info-element align-center-v">
            <div className="dm-info-element__media">
              <img src={imageUrl(`${user.img}`)} alt="" />
            </div>
            <div className="dm-info-element__content">
              <p>{user.name}</p>
            </div>
          </div>
        ),
        status: <span className={`dm-support-status dm-support-status-${status}`}>{status}</span>,
        subject: <span className="dm-ticket-subject">{subject}</span>,
        priority,
        createAt,
        action: (
          <div className="table-actions">
            <Link className="view" to={`/admin/app/support/ticketDetails/${id}`}>
              <UilEye />
            </Link>
            <Link onClick={() => {}} className="edit" to="#">
              <UilEdit />
            </Link>
            <Popconfirm
              title="Are you sure to delete this task?"
              onConfirm={() => {}}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Link className="delete" to="#">
                <UilTrashAlt />
              </Link>
            </Popconfirm>
          </div>
        ),
      });
    });
  }

  return (
    <>
      <TicketBox>
        <Row gutter={25}>
          <Col sm={24} xs={24}>
            <Cards headless>
              <div className="dm-support-content-top">
                <Heading as="h4">All Support Ticket</Heading>
              </div>
              <div className="dm-support-content-filter">
                <div className="dm-support-content-filter__left">
                  <div className="dm-support-content-filter__input">
                    <span className="label">Id:</span>
                    <Input placeholder="Search with Id" />
                  </div>
                  <div className="dm-support-content-filter__input">
                    <span className="label">Status:</span>
                    <Select style={{ width: 200 }} defaultValue="">
                      <Select.Option value="">All</Select.Option>
                      <Select.Option value="Open">Open</Select.Option>
                      <Select.Option value="Pending">Pending</Select.Option>
                      <Select.Option value="Close">Close</Select.Option>
                    </Select>
                  </div>
                </div>
                <div className="dm-support-content-filter__right">
                  <Input size="default" placeholder="Search" prefix={prefix} />
                </div>
              </div>
              <div className="dm-support-content-table">
                <TableWrapper className="table-data-view table-responsive">
                  <Table pagination={false} dataSource={dataSource} columns={columns} />
                </TableWrapper>
              </div>
            </Cards>
          </Col>
        </Row>
      </TicketBox>
    </>
  );
}

export default AllSupports;
