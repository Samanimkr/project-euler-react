import React from 'react';
import { connect } from 'react-redux';

import {
    Button,
    FormGroup,
    FormControl,
    ControlLabel,
    Form,
    Glyphicon
} from 'react-bootstrap';

class ProblemComponent extends React.Component {
    constructor(props){
        super(props);
   
        this.state = {
            inputText: 0,
        }
        this.showLink = false;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({inputText: e.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.isCalculatingAction('TRUE');

        let answer;
        if (this.props.hasInputField) {
            answer = this.props.solution(this.state.inputText);
        } else {
            answer = this.props.solution();
        }
        this.props.logToConsole(answer);
    }

    render(){
        return (
            <div style={styles.container}>
                <h3>
                    {this.props.title}&nbsp;
                    <Button
                        href={`https://projecteuler.net/problem=${this.props.problemNum}`}
                        style={styles.link}
                        target='_blank'>
                        <Glyphicon glyph='link' />&nbsp;Link
                    </Button>
                </h3>
                <Form>
                    { this.props.hasInputField && 
                        <FormGroup>
                            <ControlLabel>{this.props.fieldText ? this.props.fieldText : 'Input'}: </ControlLabel>
                            <FormControl
                                type='text'
                                name='title'
                                value={this.state.postTitle}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    }
                    <Button onClick={this.handleSubmit}>Log answer to Console</Button>
                </Form>
                
            </div>
        )
    }
}

const styles = {
    container: {
        backgroundColor: '#EFF3F4',
        padding: '20px',
        width: '60%',
        margin: '20px auto',
    },
    link: {
        padding: '2px 6px',
        borderRadius: '15px',
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isCalculatingAction: (state) => dispatch({
            type: `IS_CALCULATING_${state}`
        }),
        logToConsole: (msg) => dispatch({
            type: 'LOG_TO_CONSOLE',
            msg,
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProblemComponent);