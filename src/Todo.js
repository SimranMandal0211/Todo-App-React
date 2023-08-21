import { Component } from "react";

export class Todo extends Component {
  render() {
    const {handleRemove} = this.props;
    return (
      <div className="todo">
        <p>{this.props.todo.text}</p>
        <button onClick={handleRemove}>x</button>
      </div>
    );
  }
}
