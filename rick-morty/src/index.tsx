import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {App} from './App';
import { Characters } from './pages/Characters';
import { Episodes } from './pages/Episodes';
import { Locations } from './pages/Locations';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Characters/>}/>
    <Route path="locations" element={<Locations/>}/>
    <Route path="episodes" element={<Episodes/>}/>
  </Routes>
  </BrowserRouter>
    <App />
  </React.StrictMode>
);

