/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from 'react';
import { Layout, Button, Row, Col } from 'antd';
import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import { NavLink, Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import MenueItems from './MenueItems';
import TopMenu from './TopMenu';
import { LayoutContainer, SmallScreenAuthInfo, TopMenuSearch, FooterStyle } from './Style';
import Search from '../components/utilities/auth-info/Search';
import AuthInfo from '../components/utilities/auth-info/info';
import { imageUrl } from '../components/utilities/image';
import { theme } from '../config/theme/themeVariables';
import Heading from '../components/heading/heading';

const { Header, Sider, Content } = Layout;

const ThemeLayout = (WrappedComponent) => {
  class LayoutComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        collapsed: false,
        hide: true,
      };
      this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
      window.addEventListener('resize', this.updateDimensions);
      this.updateDimensions();
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions() {
      this.setState({
        collapsed: window.innerWidth <= 1200 && true,
      });
    }

    render() {
      const { collapsed, hide } = this.state;
      const { layoutMode, rtl, topMenu } = this.props;

      const left = !rtl ? 'left' : 'right';
      const toggleCollapsed = () => {
        this.setState({
          collapsed: !collapsed,
        });
      };

      const toggleCollapsedMobile = () => {
        if (window.innerWidth <= 990) {
          this.setState({
            collapsed: !collapsed,
          });
        }
      };

      const onShowHide = () => {
        this.setState({
          hide: !hide,
        });
      };

      const SideBarStyle = {
        margin: '63px 0 0 0',
        padding: `${!rtl ? '20px 20px 55px 0' : '20px 0 55px 20px'}`,
        overflowY: 'auto',
        height: '100vh',
        position: 'fixed',
        [left]: 0,
        zIndex: 988,
      };

      const renderView = ({ style, ...props }) => {
        const customStyle = {
          marginRight: 'auto',
          [rtl ? 'marginLeft' : 'marginRight']: '-17px',
        };
        return <div {...props} style={{ ...style, ...customStyle }} />;
      };

      const renderThumbVertical = ({ style, ...props }) => {
        const { ChangeLayoutMode } = this.props;
        const thumbStyle = {
          borderRadius: 6,
          backgroundColor: ChangeLayoutMode ? '#ffffff16' : '#F1F2F6',
          [left]: '2px',
        };
        return <div style={{ ...style, ...thumbStyle }} props={props} />;
      };

      const renderThumbHorizontal = ({ style, ...props }) => {
        const { ChangeLayoutMode } = this.props;
        const thumbStyle = {
          borderRadius: 6,
          backgroundColor: ChangeLayoutMode ? '#ffffff16' : '#F1F2F6',
        };
        return <div style={{ ...style, ...thumbStyle }} props={props} />;
      };

      return (
        <LayoutContainer>
          <Layout className="layout">
            <Header
              style={{
                position: 'fixed',
                width: '100%',
                top: 0,
                [!rtl ? 'left' : 'right']: 0,
              }}
            >
              <div className="dm-header-content d-flex">
                <div className="dm-header-content__left">
                  <div className="navbar-brand align-cener-v">
                    <Link className={topMenu && window.innerWidth > 991 ? 'dm-logo top-menu' : 'dm-logo'} to="/admin">
                      <img
                        src={
                          layoutMode === 'lightMode'
                            ? imageUrl(`static/img/Logo_Dark.svg`)
                            : imageUrl(`static/img/Logo_White.svg`)
                        }
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <div className="dm-header-content__right d-flex">
                  <div className="dm-navbar-menu d-flex align-center-v">
                    {!topMenu || window.innerWidth <= 991 ? (
                      <Button type="white" onClick={toggleCollapsed}>
                        <img src={imageUrl(`static/img/icon/bars.svg`)} alt="menu" />
                      </Button>
                    ) : null}
                    {topMenu && window.innerWidth > 991 ? <TopMenu /> : null}
                  </div>
                  <div className="dm-nav-actions">
                    {topMenu && window.innerWidth > 991 ? (
                      <TopMenuSearch>
                        <div className="top-right-wrap d-flex">
                          <Search />
                          <AuthInfo />
                        </div>
                      </TopMenuSearch>
                    ) : (
                      <>
                        <Search />
                        <AuthInfo />
                      </>
                    )}
                  </div>
                </div>
                <div className="dm-header-content__mobile">
                  <div className="dm-mobile-action">
                    <div className="btn-search" to="#">
                      {/* {<Search />} */}
                    </div>

                    <Link className="btn-auth" onClick={onShowHide} to="#">
                      <UilEllipsisV />
                    </Link>
                  </div>
                </div>
              </div>
            </Header>
            <div className="dm-header-more">
              <Row>
                <Col md={0} sm={24} xs={24}>
                  <div className="dm-header-more-inner">
                    <SmallScreenAuthInfo hide={hide}>
                      <AuthInfo rtl={rtl} />
                    </SmallScreenAuthInfo>
                  </div>
                </Col>
              </Row>
            </div>
            <Layout>
              {!topMenu || window.innerWidth <= 991 ? (
                <ThemeProvider theme={theme}>
                  <Sider
                    width={280}
                    style={SideBarStyle}
                    collapsed={collapsed}
                    theme={layoutMode === 'lightMode' ? 'light' : 'dark'}
                  >
                    <Scrollbars
                      className="custom-scrollbar"
                      autoHide
                      autoHideTimeout={500}
                      autoHideDuration={200}
                      renderThumbHorizontal={renderThumbHorizontal}
                      renderThumbVertical={renderThumbVertical}
                      renderView={renderView}
                      renderTrackVertical={(props) => <div {...props} className="dm-track-vertical" />}
                    >
                      <MenueItems topMenu={topMenu} toggleCollapsed={toggleCollapsedMobile} />
                    </Scrollbars>
                  </Sider>
                </ThemeProvider>
              ) : null}
              <Layout className="atbd-main-layout">
                <Content>
                  <WrappedComponent {...this.props} />
                  <FooterStyle className="admin-footer">
                    <Row>
                      <Col md={12} xs={24}>
                        <span className="admin-footer__copyright">
                          © 2022<Link to="#">SovWare</Link>
                        </span>
                      </Col>
                      <Col md={12} xs={24}>
                        <div className="admin-footer__links">
                          <NavLink to="#">About</NavLink>
                          <NavLink to="#">Team</NavLink>
                          <NavLink to="#">Contact</NavLink>
                        </div>
                      </Col>
                    </Row>
                  </FooterStyle>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </LayoutContainer>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      layoutMode: state.ChangeLayoutMode.mode,
      rtl: state.ChangeLayoutMode.rtlData,
      topMenu: state.ChangeLayoutMode.topMenu,
    };
  };

  LayoutComponent.propTypes = {
    layoutMode: propTypes.string,
    rtl: propTypes.bool,
    topMenu: propTypes.bool,
  };

  return connect(mapStateToProps)(LayoutComponent);
};
export default ThemeLayout;
