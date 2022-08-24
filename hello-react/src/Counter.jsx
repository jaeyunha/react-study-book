import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // set initial value for state
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>Fixed Number : {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('setState was just called');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
