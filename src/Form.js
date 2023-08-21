import { Component } from "react";

export class Form extends Component {

  render() {
    const {inputValue, handleChange, handleAdd} = this.props;
    return (
      <div className="form">
        <input
          onChange={handleChange}
          value={inputValue}
          placeholder="Whats on your mind?"
          required
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    );
  }
}
