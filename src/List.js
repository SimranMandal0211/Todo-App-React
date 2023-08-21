import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {
    const {todoList, handleRemove} = this.props;
    return (
      <div className="list">
        {todoList.map((todo, i) => (
          <Todo key={i} todo={todo} 
                handleRemove = {() => handleRemove(i)}
          />
        ))}
      </div>
    );
  }
}
