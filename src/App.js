import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProblemComponent from './components/ProblemComponent';
import ConsoleComponent from './components/ConsoleComponent';
import solutions from './solutions';

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
            solution={(num) => solutions.Problem10(num)}
          />

          <ProblemComponent
            problemNum='11'
            title='Problem #11 - Largest product in a grid'
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

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);