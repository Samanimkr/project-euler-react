import React from 'react';

// import {
//     Button,
//     FormGroup,
//     FormControl,
//     ControlLabel,
//     Form,
// } from 'react-bootstrap';

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

export default ConsoleComponent;
