import React, { PropTypes } from 'react';

import applyComponentDefaults from './applyComponentDefaults';
import style from './style';

let Spinner = applyComponentDefaults(React.createClass({
    render() {
        let outerStyle = {
            position: 'relative',
            fontSize: '12px',
            textAlign: 'center',
            display: 'inline-block',
            height: this.props.height || '32px',
            width: this.props.width || '32px',
            lineHeight: this.props.height || '32px'
        };
        let color = this.props.color || style.colors.text.header;
        let innerStyle = {
            position: 'absolute',
            WebkitAnimation: 'spCircRot 2s infinite linear',
            animation: 'spCircRot 2s infinite linear',
            borderTop: '4px ' + color + ' solid',
            borderRight: '4px ' + color + ' transparent',
            borderBottom: '4px ' + color + ' solid',
            borderLeft: '4px ' + color + ' transparent',
            borderRadius: '50%',
            left: 0,
            top: 0,
            height: this.props.height || '32px',
            width: this.props.width || '32px'
        };

        return (
            <div style={outerStyle}>
                <div style={innerStyle} className='spinner'>
                </div>
                {this.props.text}
            </div>
        );
    }
}));

Spinner.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
};

export default Spinner;