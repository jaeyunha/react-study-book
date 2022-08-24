// import React, { Component } from 'react';

import React, { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });

  const [username, message] = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, // copied the original form here
      [e.target.name]: e.target.value, // overwrite the value I want
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: '',
    });
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>Practice Event</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="Input anything"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>Checked</button>
    </div>
  );
};

// With Class based
// class EventPractice extends Component {
//   state = {
//     username: '',
//     message: '',
//   };

//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleClick = () => {
//     alert(this.state.message + ': ' + this.state.message);
//     this.setState({
//       username: '',
//       message: '',
//     });
//   };

//   handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       this.handleClick();
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>Practice Event</h1>
//         <input
//           type="text"
//           name="username"
//           placeholder="사용자명"
//           value={this.state.message}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="message"
//           placeholder="input anything"
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <button onClick={this.handleClick}>Checked</button>
//       </div>
//     );
//   }
// }

export default EventPractice;
