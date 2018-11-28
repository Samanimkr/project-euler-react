import React from 'react';

import {
    Button,
    FormGroup,
    FormControl,
    ControlLabel,
    Form,
} from 'react-bootstrap';

class ProblemComponent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            inputText: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({inputText: e.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        if (this.props.hasInputField) {
            this.props.solution(this.state.inputText);
        } else {
            this.props.solution();
        }
    }

    render(){
        return (
            <div style={styles.container}>
                <h3>{this.props.title}</h3>
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
                    <Button onClick={this.handleSubmit}>Log answer in console</Button>
                </Form>
                
            </div>
        )
    }
}

const styles = {
    container: {
        backgroundColor: '#EFF3F4',
        padding: '20px',
        width: '55%',
        margin: '10px auto',
    }
}

export default ProblemComponent;