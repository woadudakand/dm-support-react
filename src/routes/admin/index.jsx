import { Spin } from 'antd';
import React, { Suspense, useEffect, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './dashboard';
import Pages from './pages';
import Elements from './components';
import withAdminLayout from '../../layout/withAdminLayout';

const Tickets = lazy(() => import('../../container/supportTicket/Index'));
const AddTicket = lazy(() => import('../../container/supportTicket/AddSupport'));
const TicketDetails = lazy(() => import('../../container/supportTicket/SupportTicketDetails'));

const Admin = React.memo(() => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Suspense
      fallback={
        <div className="spin">
          <Spin />
        </div>
      }
    >
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path="elements/*" element={<Elements />} />
        <Route path="pages/*" element={<Pages />} />
        <Route path="support/tickets/*" element={<Tickets />} />
        <Route path="support/tickets/add" element={<AddTicket />} />
        <Route path="support/ticketDetails/:id" element={<TicketDetails />} />
      </Routes>
    </Suspense>
  );
});

export default withAdminLayout(Admin);
