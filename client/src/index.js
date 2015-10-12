// Vendor
import React from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';;
import { Provider, connect } from 'react-redux';
import store from './core/store';
import { addUser, modifyUser, removeUser } from './core/actionCreators';

class RootComponent extends React.Component {
    handleAddUser(e) {
        const node = findDOMNode(this.refs.userName);
        const text = node.value.trim();
        this.props.onAddUser({
            name: text
        });
        node.value = '';
    }
    render() {
        let users = this.props.users.length ?
            this.props.users.map(user => <li key={user.id}>{user.name}</li>) :
            (<li>No users defined</li>);
        return (
            <div>
                <h1>Add a user</h1>
                <input type='text' ref='userName' placeholder='User name' autofocus='autofocus' />
                <button onClick={e => this.handleAddUser(e)}>Add</button>
                <h2>Users</h2>
                <ul>{users}</ul>
            </div>
        );
    }
}

// Map Redux state to component props
let mapStateToProps = state => ({
    users: state.users
});

// Map Redux actions to component props
let mapDispatchToProps = dispatch => ({
    onAddUser: (properties) => dispatch(addUser(properties))
});

let Root = connect(
    mapStateToProps,
    mapDispatchToProps
)(RootComponent);

ReactDOM.render(<Provider store={store}><Root /></Provider>, document.getElementById('root'));