import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'reset-css';
import './app.css';

import { MainLayout } from './layouts';
import { router } from './routes';
import { Footer } from 'components';

const wrapper = document.getElementById('root');
const AppContainer = () => <MainLayout Router={router} Footer={Footer} />;

const App = ReactDOM.render(<AppContainer />, wrapper);

export { App };
