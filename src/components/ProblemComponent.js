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

import ProblemInfoPopup from './ProblemInfoPopup';

class ProblemComponent extends React.Component {
    component
    constructor(props){
        super(props);
   
        this.state = {
            inputText: 0,
            popupVisible: false,
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
        this.props.solve({
            type: 'SOLVE_PROBLEM',
            problemNum: this.props.problemNum,
            inputText: this.state.inputText
        });
    }

    renderPopup() {
        if (this.state.popupVisible) {
            return (
                <ProblemInfoPopup
                    visible={this.state.popupVisible}
                    problemNum={this.props.problemNum}
                    onClose={() => this.setState({ popupVisible: false,})}
                />
            );
        }
        return;
    }

    render() {
        return (
            <div style={styles.container}>
                <h3>
                    {this.props.title}&nbsp;
                    <Button
                        style={styles.link}
                        onClick={() => this.setState({popupVisible: !this.state.popupVisible})}
                    >
                        <Glyphicon glyph='info-sign' />&nbsp;Info
                    </Button>
                    <Button
                        style={styles.link}
                        target='_blank'
                        href={`https://projecteuler.net/problem=${this.props.problemNum}`}
                    >
                        <Glyphicon glyph='link' />&nbsp;Link
                    </Button>
                </h3>

                {this.renderPopup()}

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
                    <Button onClick={this.handleSubmit}>{ this.props.buttonText? this.props.buttonText: 'Log answer to Console'}</Button>
                </Form>
                
            </div>
        )
    }
}

const styles = {
    container: {
        position: 'relative',
        backgroundColor: '#EFF3F4',
        padding: '20px',
        width: '100%',
        overflow: 'scroll',
        margin: '20px auto',
    },
    link: {
        padding: '2px 6px',
        borderRadius: '15px',
        margin: '0 5px',
    }
}

// const mapStateToProps = (state, ownProps) => {
//     return {}
// }

const mapDispatchToProps = (dispatch) => {
    return {
        solve: action => dispatch(action),
    }
}

export default connect(null, mapDispatchToProps)(ProblemComponent);