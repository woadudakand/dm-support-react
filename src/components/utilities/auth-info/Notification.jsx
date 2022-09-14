import React from 'react';
import { Badge } from 'antd';
import UilHdd from '@iconscout/react-unicons/icons/uil-hdd';
import UilUpload from '@iconscout/react-unicons/icons/uil-upload';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import { useSelector } from 'react-redux';
import { ReactSVG } from 'react-svg';
import { UserActionDropDown } from './auth-info-style';
import { Popover } from '../../popup/popup';
import Heading from '../../heading/heading';
import { imageUrl } from '../image';

const NotificationBox = React.memo(() => {
  const { rtl } = useSelector((state) => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
    };
  });

  function renderThumb({ style, ...props }) {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: '#F1F2F6',
    };
    return <div style={{ ...style, ...thumbStyle }} props={props} />;
  }

  const renderTrackVertical = () => {
    const thumbStyle = {
      position: 'absolute',
      width: '6px',
      transition: 'opacity 200ms ease 0s',
      opacity: 0,
      [rtl ? 'left' : 'right']: '2px',
      bottom: '2px',
      top: '2px',
      borderRadius: '3px',
    };
    return <div className="hello" style={thumbStyle} />;
  };

  function renderView({ style, ...props }) {
    const customStyle = {
      marginRight: rtl && 'auto',
      [rtl ? 'marginLeft' : 'marginRight']: '-17px',
    };
    return <div {...props} style={{ ...style, ...customStyle }} />;
  }

  renderThumb.propTypes = {
    style: PropTypes.shape(PropTypes.object),
  };

  renderView.propTypes = {
    style: PropTypes.shape(PropTypes.object),
  };

  const content = (
    <UserActionDropDown className="dm-top-dropdown">
      <Heading as="h5" className="dm-top-dropdown__title">
        <span className="title-text">Notifications</span>
        <Badge className="badge-success" count={3} />
      </Heading>
      <Scrollbars
        autoHeight
        autoHide
        renderThumbVertical={renderThumb}
        renderView={renderView}
        renderTrackVertical={renderTrackVertical}
      >
        <ul className="dm-top-dropdown__nav notification-list">
          <li>
            <Link to="#">
              <div className="dm-top-dropdown__content notifications">
                <div className="notification-icon bg-primary">
                  <UilHdd />
                </div>
                <div className="notification-content d-flex">
                  <div className="notification-text">
                    <Heading as="h5">
                      <span>James</span> sent you a message
                    </Heading>
                    <p>5 hours ago</p>
                  </div>
                  <div className="notification-status">
                    <Badge dot />
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="dm-top-dropdown__content notifications">
                <div className="notification-icon bg-secondary">
                  <UilUpload />
                </div>
                <div className="notification-content d-flex">
                  <div className="notification-text">
                    <Heading as="h5">
                      <span>James</span> sent you a message
                    </Heading>
                    <p>5 hours ago</p>
                  </div>

                  <div className="notification-status">
                    <Badge dot />
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="dm-top-dropdown__content notifications">
                <div className="notification-icon bg-secondary">
                  <UilUpload />
                </div>
                <div className="notification-content d-flex">
                  <div className="notification-text">
                    <Heading as="h5">
                      <span>James</span> sent you a message
                    </Heading>
                    <p>5 hours ago</p>
                  </div>

                  <div className="notification-status">
                    <Badge dot />
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="dm-top-dropdown__content notifications">
                <div className="notification-icon bg-secondary">
                  <UilUpload />
                </div>
                <div className="notification-content d-flex">
                  <div className="notification-text">
                    <Heading as="h5">
                      <span>James</span> sent you a message
                    </Heading>
                    <p>5 hours ago</p>
                  </div>

                  <div className="notification-status">
                    <Badge dot />
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="dm-top-dropdown__content notifications">
                <div className="notification-icon bg-secondary">
                  <UilUpload />
                </div>
                <div className="notification-content d-flex">
                  <div className="notification-text">
                    <Heading as="h5">
                      <span>James</span> sent you a message
                    </Heading>
                    <p>5 hours ago</p>
                  </div>

                  <div className="notification-status">
                    <Badge dot />
                  </div>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </Scrollbars>
      <Link className="btn-seeAll" to="#">
        See all incoming activity
      </Link>
    </UserActionDropDown>
  );

  return (
    <div className="dm-nav-actions__item dm-nav-actions__notification">
      <Popover placement="bottomLeft" content={content} action="click">
        <Badge dot offset={[-8, -5]}>
          <Link to="#" className="dm-nav-action-link">
            <ReactSVG src={imageUrl('static/img/icon/bell.svg')} />
          </Link>
        </Badge>
      </Popover>
    </div>
  );
});

export default NotificationBox;
