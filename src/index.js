import React from 'react';
import { render as r } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Page from './Page';

const render = (Compo, props = {}) =>
  r(
    <BrowserRouter>
       <Compo {...props} />
    </BrowserRouter>,
    document.querySelector('.cont')
  );

render(Page);
