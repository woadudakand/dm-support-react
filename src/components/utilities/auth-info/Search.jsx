import React, { useEffect, useState } from 'react';
import UilSearch from '@iconscout/react-unicons/icons/uil-search';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { Form, Input } from 'antd';
// import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const SearchBar = React.memo(() => {
  const [form] = Form.useForm();
  const { pathname } = useLocation();
  const [openSearch, setState] = useState(false);

  const openSearchbar = (e) => {
    e.preventDefault();
    setState(true);
  };
  const closeSearchbar = (e) => {
    e.preventDefault();
    setState(false);
  };

  useEffect(() => {
    if (window.innerWidth > 991) {
      setState(true);
    }
  }, [pathname]);

  return (
    <div className={`dm-nav-actions__item dm-nav-actions__searchbar ${openSearch ? 'show' : ''}`}>
      <div className="dm-searchbar">
        <Form form={form} name="dm-search">
          <Form.Item name="search-input">
            <Input placeholder="Search..." suffix={<UilSearch />} />
          </Form.Item>
        </Form>
      </div>
      {window.innerWidth < 991 ? (
        <div className="dm-search_action">
          {!openSearch ? (
            <Link to="/" onClick={(e) => openSearchbar(e)} className="dm-search-icon">
              <UilSearch />
            </Link>
          ) : (
            <Link to="/" onClick={(e) => closeSearchbar(e)} className="dm-close-icon">
              <UilTimes />
            </Link>
          )}
        </div>
      ) : null}
    </div>
  );
});

SearchBar.propTypes = {
  //   rtl: PropTypes.bool,
};

export default SearchBar;
