/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UilPen from '@iconscout/react-unicons/icons/uil-pen';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import FontAwesome from 'react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CustomizerWrap } from './Style';
import { changeLayoutMode, changeMenuMode, changeDirectionMode } from '../../redux/themeLayout/actionCreator';

// eslint-disable-next-line no-unused-vars
function Customizer({ darkMode }) {
  const { rtl, layoutMode, topMenu } = useSelector((state) => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
      layoutMode: state.ChangeLayoutMode.mode,
      topMenu: state.ChangeLayoutMode.topMenu,
    };
  });
  const [state, setState] = useState({
    customizerAction: false,
  });
  const { customizerAction } = state;

  const dispatch = useDispatch();

  // open Customizer Function
  const showCustomizer = () => {
    setState({
      customizerAction: !customizerAction,
    });
  };

  const darkmodeActivated = () => {
    document.body.classList.add('dark-mode');
  };

  const darkmodeDiactivated = () => {
    document.body.classList.remove('dark-mode');
  };
  const changeLayout = (mode) => {
    dispatch(changeLayoutMode(mode));
  };
  const changeNavbar = (topMode) => {
    dispatch(changeMenuMode(topMode));
  };
  const changeLayoutDirection = (rtlMode) => {
    dispatch(changeDirectionMode(rtlMode));
  };

  return (
    <>
      <CustomizerWrap className="">
        <Link
          className="dm-customizer-btn"
          to="#"
          onClick={() => {
            showCustomizer();
          }}
        >
          <UilPen />
          <span className="dm-customizer-btn__text">Customize...</span>
        </Link>
        <div className={`${customizerAction ? 'dm-customizer-wrapper show' : 'dm-customizer-wrapper'}`}>
          <div className="dm-customizer">
            <div className="dm-customizer__head">
              <h4 className="dm-customizer__title">Customizer</h4>
              <span className="dm-customizer__sub-title">Customize your overview Page layout</span>
              <Link
                to="#"
                className="dm-customizer-close"
                onClick={() => {
                  showCustomizer();
                }}
              >
                <UilTimes />
              </Link>
            </div>
            <div className="dm-customizer__body">
              <div className="dm-customizer__single">
                <h4>Layout Type</h4>
                <ul className="dm-customizer-list d-flex">
                  <li className="dm-customizer-list__item">
                    <Link
                      className={!rtl ? 'active' : 'deactivate'}
                      onClick={() => {
                        showCustomizer();
                        changeLayoutDirection(false);
                      }}
                      to="#"
                    >
                      <img src="./static/img/ltr.png" alt="" />
                      <FontAwesome name="check-circle" />
                    </Link>
                  </li>
                  <li className="dm-customizer-list__item">
                    <Link
                      className={rtl ? 'active' : 'deactivate'}
                      onClick={() => {
                        showCustomizer();
                        changeLayoutDirection(true);
                      }}
                      to="#"
                    >
                      <img src="./static/img/rtl.png" alt="" />
                      <FontAwesome name="check-circle" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dm-customizer__single">
                <h4>Sidebar Type</h4>
                <ul className="dm-customizer-list d-flex">
                  <li className="dm-customizer-list__item">
                    <Link
                      className={layoutMode === 'lightMode' ? 'active' : 'deactivate'}
                      onClick={() => {
                        showCustomizer();
                        darkmodeDiactivated();
                        changeLayout('lightMode');
                      }}
                      to="#"
                    >
                      <img src="./static/img/light.png" alt="" />
                      <FontAwesome name="check-circle" />
                    </Link>
                  </li>
                  <li className="dm-customizer-list__item">
                    <Link
                      className={layoutMode === 'darkMode' ? 'active' : 'deactivate'}
                      onClick={() => {
                        showCustomizer();
                        darkmodeActivated();
                        changeLayout('darkMode');
                      }}
                      to="#"
                    >
                      <img src="./static/img/dark.png" alt="" />
                      <FontAwesome name="check-circle" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dm-customizer__single">
                <h4>Navbar Type</h4>
                <ul className="dm-customizer-list d-flex">
                  <li className="dm-customizer-list__item">
                    <Link
                      className={!topMenu ? 'active' : 'deactivate'}
                      onClick={() => {
                        showCustomizer();
                        changeNavbar(false);
                      }}
                      to="#"
                    >
                      <img src="./static/img/side.png" alt="" />
                      <FontAwesome name="check-circle" />
                    </Link>
                  </li>
                  <li className="dm-customizer-list__item top">
                    <Link
                      className={topMenu ? 'active' : 'deactivate'}
                      onClick={() => {
                        showCustomizer();
                        changeNavbar(true);
                      }}
                      to="#"
                    >
                      <img src="./static/img/top.png" alt="" />
                      <FontAwesome name="check-circle" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CustomizerWrap>

      <span
        className={`${customizerAction ? 'overlay-dark show' : 'overlay-dark'}`}
        onClick={() => {
          showCustomizer();
        }}
      />
    </>
  );
}

Customizer.propTypes = {
  darkMode: PropTypes.bool,
};

export default Customizer;
