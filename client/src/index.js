// Vendor
import React from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import store from './core/store';
import applyComponentDefaults from './core/applyComponentDefaults';

import App from './core/app';
import Login from './auth/login';

let Root = applyComponentDefaults(React.createClass({
    requireAuth(nextState, replaceState) {
        var state = store.getState();
        if (!state.auth.token) {
            replaceState({ nextPathname: nextState.location.pathname }, '/login');
        }
    },
    componentDidMount() {
        document.getElementById('spinner').classList.add('hidden');
        document.getElementById('root').classList.remove('invisible');
    },
    render() {
        return (
            <Router>
                <Route path='/' component={App} onEnter={this.requireAuth}>
                </Route>
                <Route path='/login' component={Login} />
            </Router>
        );
    }
}));

ReactDOM.render((
    <Provider store={store}><Root /></Provider>
), document.getElementById('root'));