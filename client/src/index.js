// Vendor
import React from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';;
import { Provider, connect } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import applyComponentDefaults from './core/applyComponentDefaults';
import store from './core/store';
import { authLogin, addUser, modifyUser, removeUser } from './core/actionCreators';
import style from './core/style';

import Spinner from './core/spinner';

let RootComponent = applyComponentDefaults(React.createClass({
    componentDidMount() {
        this.props.onLogin('Hans', 'Demo1234');
    },
    handleAddUser(e) {
        e.preventDefault();
        const node = findDOMNode(this.refs.userName);
        const text = node.value.trim();
        if (name.length) {
            this.props.onAddUser({
                name: text
            });
        }
        node.value = '';
        node.focus();
    },
    render() {
        let users = this.props.users.length ?
            this.props.users.map(user => <li key={user.id}><a href='#'>{user.name}</a></li>) :
            (<span>No users defined</span>);
        let containerStyle = {
            backgroundColor: style.colors.background.default,
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch'
        };
        let headerStyle = {
            backgroundColor: style.colors.background.header,
            color: style.colors.background.default,
            flexGrow: 0,
            flexShrink: 0,
            height: 60,
            lineHeight: '60px',
            overflow: 'hidden',
            padding: '0 ' + style.paddings.horizontal.layout,
            position: 'relative',
            textAlign: 'right'
        };
        let bodyStyle = {
            flexGrow: 1,
            flexShrink: 1,
            overflowY: 'auto',
            padding: style.paddings.vertical.layout + ' ' + style.paddings.horizontal.layout,
            position: 'relative'
        };
        let spinnerStyle = {
            position: 'absolute',
            left: '50%',
            top: '50%',
            marginLeft: '-50px',
            marginTop: '-50px',
            width: '100px'
        };
        let content = this.props.auth.account ?
            (
                <div>
                    <form>
                        <h1>Add a user</h1>
                        <fieldset>
                            <input type='text' ref='userName' placeholder='User name' autofocus='autofocus' />
                            <button type='submit' onClick={e => this.handleAddUser(e)}>Add</button>
                        </fieldset>
                    </form>
                    <form>
                        <h1>User</h1>
                        <fieldset>
                            <ul>{users}</ul>
                        </fieldset>
                    </form>
                </div>
            ) :
            (
                <div style={spinnerStyle}>
                    <Spinner text='Loading...' width='100px' height='100px' />
                </div>
            );
        return (
            <div style={containerStyle}>
                <div className='header' style={headerStyle}>
                    <h1>{this.props.auth.account ? this.props.auth.account.name : 'Authenticating...'}</h1>
                    <img className='avatar' src='http://cdn.obsidianportal.com/images/568976/gnome_wizard.jpg' />
                </div>
                <div style={bodyStyle}>
                    {content}
                </div>
            </div>
        );
    }
}));

// Map Redux state to component props
let mapStateToProps = state => ({
    auth: state.auth,
    users: state.users.list
});

// Map Redux actions to component props
let mapDispatchToProps = dispatch => ({
    onAddUser: (properties) => dispatch(addUser(properties)),
    onLogin: (accountName, password) => dispatch(authLogin(accountName, password))
});

let Root = connect(
    mapStateToProps,
    mapDispatchToProps
)(RootComponent);

ReactDOM.render(<Provider store={store}><Root /></Provider>, document.getElementById('root'));