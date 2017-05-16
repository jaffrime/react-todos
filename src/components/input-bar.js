import React from 'react';

class InputBar extends React.Component {
  constructor (props) {
    super(props);

    // console.log(this.props);

    this.state = { userInput: '' };
  }

  handleInputChange (e) {
    let userInput = e.target.value;
    // console.log(userInput);
    this.setState({userInput});

  }

  handleInputSubmit (e) {
    e.preventDefault();
    // console.log("Submit Working", this.state.userInput);
    this.props.handleAddTodo(this.state.userInput);
  }

  render () {
    return (
      <div className="input-bar">
        <form onSubmit={e => this.handleInputSubmit(e)}>
          {/* <form onSubmit={this.handleInputSubmit.bind(this)}> */}
          <input
            value={this.state.userInput}
            // onChange={this.handleInputChange.bind(this)}
            onChange={e => this.handleInputChange(e)} //es2015
          />
          {/* <button>Submit</button> */}
        </form>
        {/* <div>{this.state.userInput}</div> */}
      </div>
    );
  }

}

export default InputBar;
