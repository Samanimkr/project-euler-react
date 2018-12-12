import React from 'react';
import axios from 'axios';
import * as cheerio from 'cheerio';

import {
    Button,
    FormGroup,
    FormControl,
    ControlLabel,
    Form,
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
            const $ = cheerio.load(data);
            const problem_content = $('.problem_content').toString();
            console.log('html: ', problem_content);
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
                <div dangerouslySetInnerHTML={this.state.problemContent} />
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
        height: '100%',
        overflow: 'scroll',
        padding: '5px',
        borderRadius: '10px',
        fontSize: '28px !important',
    },
}

export default ProblemInfoPopup;