import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

class RootComponent extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello world!</h1>
            </div>
        );
    }
}

const someAction = {
    type: 'some'
};

function reducer(state = {}, action) {
    switch(action.type){
        default:
            return state;
    }
}

// Store:
let store = createStore(reducer);

// Map Redux state to component props
function mapStateToProps(state)  {
    return {
        value: state // TODO: subset of state (some attribute)
    };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onAction: () => dispatch(someAction)
    };
}

// Connected Component:
let Root = connect(
    mapStateToProps,
    mapDispatchToProps
)(RootComponent);

React.render(<Provider store={store}><Root /></Provider>, document.getElementById('root'));