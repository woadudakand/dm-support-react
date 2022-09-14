import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Pricing = lazy(() => import('../../container/pages/PricingTable'));
const ComingSoon = lazy(() => import('../../container/pages/ComingSoon'));
const BlankPage = lazy(() => import('../../container/pages/BlankPage'));
const BasicTable = lazy(() => import('../../container/table/Table'));
const ChartJs = lazy(() => import('../../container/pages/ChartJs'));

function PagesRoute() {
  return (
    <Routes>
      <Route path="pricing" element={<Pricing />} />
      <Route path="starter" element={<BlankPage />} />
      <Route path="comingSoon" element={<ComingSoon />} />
      <Route path="basicTable" element={<BasicTable />} />
      <Route path="chartJs" element={<ChartJs />} />
    </Routes>
  );
}

export default PagesRoute;
