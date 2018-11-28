import React, { Component } from 'react';

import ProblemComponent from './components/ProblemComponent';
import ConsoleComponent from './components/ConsoleComponent';
import solutions from './solutions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answers: [],
    };
  }
  
  render() {
    return (
      <div className='App'>
        <ConsoleComponent logs={this.state.answers} />
        
        <div style={styles.problemsContainer}>
          <ProblemComponent
            problemNum='10'
            title='Problem #10 - Summation of primes'
            hasInputField
            fieldText='Enter number'
            solution={solutions.Problem10}
            onAnswer={(answer) => {
              this.setState({
                answers: [
                  ...this.state.answers,
                  answer,
                ]
              });
            }}
          />

          <ProblemComponent
            problemNum='11'
            title='Problem #11 - Summation of primes'
            hasInputField
            fieldText='Enter number'
            solution={solutions.Problem10}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  problemsContainer: {
    width: '70%',
    height: '100%',
    position:  'absolute',
    top: 0,
    left: 0,
  }
}

export default App;
