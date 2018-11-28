import React, { Component } from 'react';

import ProblemComponent from './components/ProblemComponent';
import solutions from './solutions';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ProblemComponent
          problemNum='10'
          title='Problem #10 - Summation of primes'
          hasInputField
          fieldText='Enter number'
          solution={solutions.Problem10}
        />

        <ProblemComponent
          problemNum='11'
          title='Problem #11 - Summation of primes'
          hasInputField
          fieldText='Enter number'
          solution={solutions.Problem10}
        />
      </div>
    );
  }
}

export default App;
