import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProblemComponent from './components/ProblemComponent';
import ConsoleComponent from './components/ConsoleComponent';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ConsoleComponent />
        
        <div style={styles.problemsContainer}>
          <ProblemComponent
            problemNum='10'
            title='Problem #10 - Summation of primes'
            hasInputField
            fieldText='Enter number'
          />

          <ProblemComponent
            problemNum='11'
            title='Problem #11 - Largest product in a grid'
            fieldText='Enter number'
            buttonText='Log Largest Product'
          />

          <ProblemComponent
            problemNum='12'
            title='Problem #12 - Highly divisible triangular number'
            fieldText='Enter number'
            buttonText='Log 1st Triangle Number with 500 Divisors'
          />
        </div>
      </div>
    );
  }
}

const styles = {
  problemsContainer: {
    width: '75%',
    height: '100%',
    position:  'absolute',
    padding: '0 50px',
    top: 0,
    left: 0,
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);