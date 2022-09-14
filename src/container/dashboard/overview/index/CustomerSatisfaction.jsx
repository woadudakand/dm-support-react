import React from 'react';
import { NavLink } from 'react-router-dom';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { Col, Progress, Row } from 'antd';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { SatisfyCardWrap } from '../../Style';
import { imageUrl } from '../../../../components/utilities/image';

const moreContent = (
  <>
    <NavLink to="#">
      <UilPrint />
      <span>Printer</span>
    </NavLink>
    <NavLink to="#">
      <UilBookOpen />
      <span>PDF</span>
    </NavLink>
    <NavLink to="#">
      <UilFileAlt />
      <span>Google Sheets</span>
    </NavLink>
    <NavLink to="#">
      <UilTimes />
      <span>Excel (XLSX)</span>
    </NavLink>
    <NavLink to="#">
      <UilFile />
      <span>CSV</span>
    </NavLink>
  </>
);

const CustomerSatisfaction = React.memo(() => {
  return (
    <Cards more={moreContent} title="Customer Satisfaction" size="large">
      <div className="dm-satisfy-wrap">
        <Row>
          <Col xs={8}>
            <SatisfyCardWrap type="primary">
              <img src={imageUrl('static/img/icon/smile.svg')} alt="" />
              <p>Satisfied</p>
            </SatisfyCardWrap>
          </Col>
          <Col xs={8}>
            <SatisfyCardWrap type="success">
              <img src={imageUrl('static/img/icon/confused.svg')} alt="" />
              <p>Neutral</p>
            </SatisfyCardWrap>
          </Col>
          <Col xs={8}>
            <SatisfyCardWrap type="danger">
              <img src={imageUrl('static/img/icon/angry.svg')} alt="" />
              <p>Unsatisfied</p>
            </SatisfyCardWrap>
          </Col>
        </Row>
      </div>
      <br />
      <br />
      <span>Satisfy</span>
      <Progress percent={80} size="small" status="active" />
      <span>Confused</span>
      <Progress percent={50} size="small" status="active" />
      <span>Unsatisfied</span>
      <Progress percent={20} size="small" status="active" />
    </Cards>
  );
});

export default CustomerSatisfaction;
