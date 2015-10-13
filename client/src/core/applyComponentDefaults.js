// Vendor
import React from 'react';

function shallowEqual(objA, objB) {
    if (objA === objB) {
        return true;
    }
    var key;
    // Test for A's keys different from B.
    for (key in objA) {
        if (objA.hasOwnProperty(key) &&
            (!objB.hasOwnProperty(key) || objA[key] !== objB[key])) {
            return false;
        }
    }
    // Test for B's keys missing from A.
    for (key in objB) {
        if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

export default function applyComponentDefaults(Component) {
    const ComponentWithDefaults = React.createClass({
        shouldComponentUpdate(nextProps, nextState) {
            let returnValue = !shallowEqual(this.props, nextProps) ||
                !shallowEqual(this.state, nextState);
            console.log(
                'shouldComponentUpdate for component:',
                this,
                'with props, nextProps:',
                this.props,
                nextProps,
                'and state, nextState:',
                this.state,
                nextState,
                'returns:',
                returnValue
            );
            return returnValue;
        },
        render() {
            return <Component {...this.props} {...this.state} />;
        }
    });
    return Component;//ComponentWithDefaults;
}