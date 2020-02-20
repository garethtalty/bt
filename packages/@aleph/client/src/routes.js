import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { NavBar, NavItem } from 'components';

const SwaggerViewer = lazy(() => import('./api-docs'));
const Dashboard = lazy(() => import('./dashboard'));

const routes = [
  { path: '/api-docs', Component: SwaggerViewer },
  { path: '/storybook', Component: () => '<Storybook />' },
  { path: '/', Component: Dashboard },
];
export const router = () => (
  <Router>
    <NavBar>
      <NavItem route="/" text="dashboard" />
      <NavItem route="/storybook" text="storybook" />
      <NavItem route="/api-docs" text="docs" />
    </NavBar>
    <Switch>
      {routes.map(({ path, Component }, key) => (
        <Route path={path} key={key}>
          <Suspense fallback={<div>loading...</div>}>
            <Component />
          </Suspense>
        </Route>
      ))}
    </Switch>
  </Router>
);
