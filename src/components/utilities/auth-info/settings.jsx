import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { ReactSVG } from 'react-svg';
import { SettingDropdwon } from './auth-info-style';
import { Popover } from '../../popup/popup';
import Heading from '../../heading/heading';
import { imageUrl } from '../image';

const Settings = React.memo(() => {
  const content = (
    <SettingDropdwon>
      <div className="setting-dropdwon">
        <Row gutter="10">
          <Col sm={12}>
            <figure className="setting-dropdwon__single d-flex">
              <img src={imageUrl('static/img/icon/014-document.png')} alt="" />
              <figcaption>
                <Heading as="h5">All Features</Heading>
                <p>Introducing Increment subscriptions </p>
              </figcaption>
            </figure>
          </Col>
          <Col sm={12}>
            <figure className="setting-dropdwon__single d-flex">
              <img src={imageUrl('static/img/icon/015-color-palette.png')} alt="" />
              <figcaption>
                <Heading as="h5">Themes</Heading>
                <p>Third party themes that are compatible </p>
              </figcaption>
            </figure>
          </Col>
          <Col sm={12}>
            <figure className="setting-dropdwon__single d-flex">
              <img src={imageUrl('static/img/icon/010-home.png')} alt="" />
              <figcaption>
                <Heading as="h5">Payments</Heading>
                <p>We handle billions of dollars </p>
              </figcaption>
            </figure>
          </Col>
          <Col sm={12}>
            <figure className="setting-dropdwon__single d-flex">
              <img src={imageUrl('static/img/icon/017-video-camera.png')} alt="" />
              <figcaption>
                <Heading as="h5">Design Mockups</Heading>
                <p>Share planning visuals with clients </p>
              </figcaption>
            </figure>
          </Col>
          <Col sm={12}>
            <figure className="setting-dropdwon__single d-flex">
              <img src={imageUrl('static/img/icon/013-document-1.png')} alt="" />
              <figcaption>
                <Heading as="h5">Content Planner</Heading>
                <p>Centralize content gathering and editing</p>
              </figcaption>
            </figure>
          </Col>
          <Col sm={12}>
            <figure className="setting-dropdwon__single d-flex">
              <img src={imageUrl('static/img/icon/007-microphone-1.png')} alt="" />
              <figcaption>
                <Heading as="h5">Diagram Maker</Heading>
                <p>Plan user flows & test scenarios</p>
              </figcaption>
            </figure>
          </Col>
        </Row>
      </div>
    </SettingDropdwon>
  );

  return (
    <div className="dm-nav-actions__settings">
      <Popover placement="bottomRight" content={content} action="click">
        <Link to="#" className="dm-nav-action-link">
          <ReactSVG src={imageUrl('../static/img/icon/setting.svg')} />
        </Link>
      </Popover>
    </div>
  );
});

export default Settings;
