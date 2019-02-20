import React from 'react';
import { connect } from 'react-redux';

import {

} from 'react-bootstrap';

class ConsoleComponent extends React.Component {

    render(){
        return (
            <div style={styles.container}>
                <h3 style={styles.header}>Console</h3>
                { this.props.logs.map((log, index) => (
                    <p key={index} style={styles.log}>
                        <small style={styles.bracket}>&gt;</small>
                        <span style={styles.logText}>&nbsp;{log}</span>
                    </p>
                )) }
            </div>
        )
    }
}

const styles = {
    container: {
        backgroundColor: '#222f35',
        padding: '5px',
        width: '25%',
        height: '100%',
        overflow: 'scroll',
        position: 'fixed',
        right: 0,
        top: 0,
    },
    header: {
        color: '#828f95',
        margin: '5px 0',
        paddingBottom: '5px',
        borderBottom: '3px solid #26333a'
    },
    log: {
        color: '#a2afb5',
        fontSize: '18px',
        margin: '2px',
        position: 'relative',
    },
    bracket: {
        color: '#525f6e',
        position: 'absolute',
        top: '1px',
    },
    logText: {
        marginLeft: '8px'
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        logs: state.logs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConsoleComponent);
