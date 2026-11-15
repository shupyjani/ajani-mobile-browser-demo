import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AjaniMobileDemo from './components/pages/AjaniMobileDemo';
import SkipLink from './components/SkipLink';
import { AJANI_MOBILE_DEMO_ROUTE, AJANI_MOBILE_ROUTE } from './lib/site';

export default function App() {
  return <><SkipLink /><header className="standalone-header"><p>Ajani Mobile browser demo</p></header><Routes>
    <Route path="/" element={<AjaniMobileDemo />} />
    <Route path={AJANI_MOBILE_DEMO_ROUTE} element={<AjaniMobileDemo />} />
    <Route path={AJANI_MOBILE_ROUTE} element={<main id="main-content" tabIndex={-1} className="container standalone-note"><h1>Ajani Mobile browser demo</h1><p>This standalone source package contains the existing interactive demo.</p><Link to={AJANI_MOBILE_DEMO_ROUTE}>Open interactive demo</Link></main>} />
    <Route path="*" element={<main id="main-content" tabIndex={-1}><h1>Page not found</h1><Link to={AJANI_MOBILE_DEMO_ROUTE}>Open interactive demo</Link></main>} />
  </Routes><footer className="standalone-footer"><p>Ajani Mobile browser demo.</p></footer></>;
}

