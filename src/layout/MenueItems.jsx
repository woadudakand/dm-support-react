import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import {
  UilCreateDashboard,
  UilUsdCircle,
  UilClock,
  UilBookAlt,
  UilTable,
  UilChartBar,
  UilLayerGroup,
} from '@iconscout/react-unicons';

import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import propTypes from 'prop-types';
import { NavTitle } from './Style';
import ProfileBadge from './ProfileBadge';

const { SubMenu } = Menu;

function MenuItems({ toggleCollapsed, topMenu }) {
  const path = '/admin';

  const pathName = window.location.pathname;
  const pathArray = pathName.split(path);
  const mainPath = pathArray[1];
  const mainPathSplit = mainPath.split('/');

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );

  const onOpenChange = (keys) => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = (item) => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };
  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      // // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={
        !topMenu
          ? [
              `${
                mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]
              }`,
            ]
          : []
      }
      defaultOpenKeys={!topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []}
      overflowedIndicator={<UilEllipsisV />}
      openKeys={openKeys}
    >
      <ProfileBadge />
      {!topMenu && <NavTitle className="dm-sidebar-nav-title">Main Menu</NavTitle>}
      <SubMenu key="dashboard" icon={!topMenu && <UilCreateDashboard />} title="Dashboard">
        <Menu.Item key="home">
          <NavLink onClick={toggleCollapsed} to={`${path}`}>
            Demo 1
          </NavLink>
        </Menu.Item>
      </SubMenu>

      {!topMenu && <NavTitle className="dm-sidebar-nav-title">Components</NavTitle>}
      <SubMenu key="elements" icon={!topMenu && <UilLayerGroup />} title="Elements">
        <Menu.Item key="buttons">
          <NavLink onClick={toggleCollapsed} to={`${path}/elements/buttons`}>
            Buttons
          </NavLink>
        </Menu.Item>
        <Menu.Item key="cards">
          <NavLink onClick={toggleCollapsed} to={`${path}/elements/cards`}>
            Cards
          </NavLink>
        </Menu.Item>
        <Menu.Item key="checkbox">
          <NavLink onClick={toggleCollapsed} to={`${path}/elements/checkbox`}>
            Checkbox
          </NavLink>
        </Menu.Item>
        <Menu.Item key="dropdown">
          <NavLink onClick={toggleCollapsed} to={`${path}/elements/dropdown`}>
            Dropdown
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}/chartJs`}>
              <UilChartBar />
            </NavLink>
          )
        }
        key="chartJs"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/pages/chartJs`}>
          Chart JS
        </NavLink>
      </Menu.Item>

      {!topMenu && <NavTitle className="dm-sidebar-nav-title">Applications</NavTitle>}

      <SubMenu key="support" icon={!topMenu && <UilLayerGroup />} title="support">
        <Menu.Item key="view">
          <NavLink onClick={toggleCollapsed} to={`${path}/support/tickets`}>
            Tickets
          </NavLink>
        </Menu.Item>
      </SubMenu>

      {!topMenu && <NavTitle className="dm-sidebar-nav-title">Pages</NavTitle>}

      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}/pages/pricing`}>
              <UilUsdCircle />
            </NavLink>
          )
        }
        key="pricing"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/pages/pricing`}>
          Pricing
        </NavLink>
      </Menu.Item>

      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}/comingSoon`}>
              <UilClock />
            </NavLink>
          )
        }
        key="comingSoon"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/pages/comingSoon`}>
          Coming Soon
        </NavLink>
      </Menu.Item>

      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}/starter`}>
              <UilBookAlt />
            </NavLink>
          )
        }
        key="starter"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/pages/starter`}>
          Blank page
        </NavLink>
      </Menu.Item>

      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}/basicTable`}>
              <UilTable />
            </NavLink>
          )
        }
        key="basicTable"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/pages/basicTable`}>
          Table
        </NavLink>
      </Menu.Item>
      <SubMenu key="authentication" icon={!topMenu && <UilLayerGroup />} title="Authentication">
        <Menu.Item key="login">
          <NavLink onClick={toggleCollapsed} to="/authentication/login">
            Sign In
          </NavLink>
        </Menu.Item>
        <Menu.Item key="register">
          <NavLink onClick={toggleCollapsed} to="/authentication/register">
            Sign Up
          </NavLink>
        </Menu.Item>
        <Menu.Item key="forgotPassword">
          <NavLink onClick={toggleCollapsed} to="/authentication/forgotPassword">
            Forgot Password
          </NavLink>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
}

MenuItems.propTypes = {
  topMenu: propTypes.bool,
  toggleCollapsed: propTypes.func,
};

export default MenuItems;
