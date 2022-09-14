import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Products = lazy(() => import('../../container/products/ViewPage'));

function DashboardRoutes() {
  return (
    <Routes>
      <Route path="view" element={<Products />} />
    </Routes>
  );
}

export default DashboardRoutes;
