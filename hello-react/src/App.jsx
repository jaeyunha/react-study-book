// import Counter from './Counter';
// import Say from './Say';
// import EventPractice from './EventPractice';
import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';
// import IterationSample from './IterationSample';
// import ValidationSample from './ValidationSample';
// import ScrollBox from './ScrollBox';

// function App() {
//   const name = 'REACT';
//   return (
//     <div className="react">
//       {name}
//       <input type="text" />
//     </div>
//   );
// }

// class App extends Component {
//   render() {
//     const name = 'react';
//     return <div className="react">{name}</div>;
//   }
// }

// const App = () => {
//   return <EventPractice />;
// };

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#0000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Random Color</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

export default App;
