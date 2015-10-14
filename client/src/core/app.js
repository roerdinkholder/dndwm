// Vendor
import React from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import store from './store';
import applyComponentDefaults from './applyComponentDefaults';
import { addUser, modifyUser, removeUser } from './actionCreators';

import UserList from './../user/userList';

let AppComponent = applyComponentDefaults(React.createClass({
    render() {
        return (
            <div className='root-inner'>
                <header>
                    <h1>{this.props.auth.account.name}</h1>
                    <img className='avatar' src='http://cdn.obsidianportal.com/images/568976/gnome_wizard.jpg' />
                </header>
                <nav className='nav-header'>
                    <h1><i className="fa fa-shield"></i> This is the subheader</h1>
                </nav>
                <div className='main-wrapper'>
                    <nav className='nav-main'>
                    </nav>
                    <main>
                        <UserList users={this.props.users.list} onAddUser={this.props.onAddUser} />
                    </main>
                </div>
                <DebugPanel top right bottom>
                    <DevTools store={store} monitor={LogMonitor} />
                </DebugPanel>
            </div>
        );
    }
}));

// Map Redux state to component props
let mapStateToProps = state => (state);

// Map Redux actions to component props
let mapDispatchToProps = dispatch => ({
    onAddUser: (properties) => dispatch(addUser(properties))
});

let App = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);

export default App;