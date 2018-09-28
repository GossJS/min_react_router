import React, { Component as C } from 'react';
import { Switch } from 'react-router';
import { NavLink, Route } from 'react-router-dom';
import MyComp from './MyComp';

const HOME_PAGE_ROUTE = '/';
const MYCOMP_PAGE_ROUTE = '/mycomp';

const Home = () => <h2>Your choice is?</h2>;

const Nav = () =>
  <nav style={{ borderRadius: '10px' }}>
      <ul>
        {[
          { route: HOME_PAGE_ROUTE, label: 'Go home!' },
          { route: MYCOMP_PAGE_ROUTE, label: 'See a compo!' },
        ].map(link => (
          <li key={link.route}>
            <NavLink to={link.route} >{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>;

export default class extends C {
  render() {
    return (<div className="columns">
        <div className="column">
          <Nav />
        </div>
        <div className="column">
          <Switch>
            <Route exact path={HOME_PAGE_ROUTE} component={Home} />
            <Route exact path={MYCOMP_PAGE_ROUTE} render={() => <MyComp title="hello" text="hey" />} />
          </Switch>
        </div>
      </div>);
  }
}
