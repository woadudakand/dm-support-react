import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Button = lazy(() => import('../../container/ui-elements/Button'));
const Cards = lazy(() => import('../../container/ui-elements/Cards'));
const Dropdown = lazy(() => import('../../container/ui-elements/Dropdown'));
const Checkbox = lazy(() => import('../../container/ui-elements/Checkbox'));

function ComponentRoute() {
  return (
    <Routes>
      <Route path="buttons" element={<Button />} />
      <Route path="cards" element={<Cards />} />
      <Route path="dropdown" element={<Dropdown />} />
      <Route path="checkbox" element={<Checkbox />} />
    </Routes>
  );
}

export default ComponentRoute;
