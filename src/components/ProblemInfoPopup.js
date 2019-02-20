import React from 'react';
import axios from 'axios';
import $ from 'jquery';

import {
    Button,
    Glyphicon
} from 'react-bootstrap';

class ProblemInfoPopup extends React.Component {
    component
    constructor(props){
        super(props);
   
        this.state = {
            problemContent: {
                __html: ''
            },
        }
    }
    componentDidMount(){
        this.getProblemInfo();
    }

    getProblemInfo() {
        var url = 'https://api.allorigins.ml/get?method=raw&url=' + encodeURIComponent('https://projecteuler.net/problem=' + this.props.problemNum);

        axios.get(url)
        .then(({data})  => {
            const elements = $(data.contents);
            const problem_content = $('.problem_content', elements)[0].innerText;
            this.setState({
                problemContent: {
                    __html: problem_content
                }
            });
        })
        .catch(e => {
            console.log(e)
        });
    }

    render() {
        return (
            <div style={styles.container}>
                <Button
                    style={styles.closeButton}
                    variant='primary'
                    target='_blank'
                    onClick={() => this.props.onClose()}
                >
                    <Glyphicon glyph='remove-sign' />
                </Button>
                { !this.state.problemContent.__html && <p style={styles.text}>Loading...</p> }
                <div style={styles.text} dangerouslySetInnerHTML={this.state.problemContent} />
            </div>
        )
    }
}

const styles = {
    container: {
        backgroundColor: '#0F0314',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        padding: '5px',
        borderRadius: '5px',
        fontSize: '28px !important',
        opacity: 0.87,
    },
    closeButton: {
        position: 'absolute',
        top: '5px',
        left: '5px',
        padding: '2px 6px',
        borderRadius: '15px'
    },
    text: {
        marginTop: '35px',
        color: '#8F8394',
    },
}

export default ProblemInfoPopup;