import React from 'react';
import { connect } from 'react-redux';

import {
    ProgressBar
} from 'react-bootstrap';

class ConsoleComponent extends React.Component {
    // componentWillReceiveProps(prevProps, newProps) {
    //     this.props.isCalculating('FALSE');
    // }
    render(){
        console.log('isCalculating: ', this.props.isCalculating);
        console.log('logs: ', this.props.logs);

        return (
            <div style={styles.container}>
                <h3 style={styles.header}>Console</h3>
                { this.props.logs.map((log, index) => (
                    <p key={index} style={styles.log}>
                        <small style={styles.bracket}>&gt;</small>
                        <span style={styles.logText}>&nbsp;{log}</span>
                    </p>
                )) }
                { this.props.isCalculating &&
                    <ProgressBar active now={100} />
                }
            </div>
        )
    }
}

const styles = {
    container: {
        backgroundColor: '#222f3e',
        padding: '5px',
        width: '30%',
        height: '100%',
        position: 'absolute',
        right: 0,
        top: 0,
    },
    header: {
        color: '#727f8e',
        margin: '5px 0',
        paddingBottom: '5px',
        borderBottom: '3px solid #263343'
    },
    log: {
        color: '#a2afbe',
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
        isCalculating: state.isCalculating,
        logs: state.logs
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        isCalculatingAction: (state) => dispatch({
            type: `IS_CALCULATING_${state}`
        }),
    }
}

  export default connect(mapStateToProps, mapDispatchToProps)(ConsoleComponent);
