import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  // add constructor and state here
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };
  // create handleAdd and handleRemove functions here

  handleAdd = () => {
    const newTodo = { text: this.state.text };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
      text: ""
    }));
  };

  handleRemove = (index) => {
    this.setState((prevState) => {
      const newTodos = [...prevState.todos];
      newTodos.splice(index, 1);
      return {
        todos: newTodos
      };
    });
  };

  render() {
    return (
      <div className="App">
        <span>Todo</span>
        <Form inputValue = {this.state.text}
              handleChange = {this.handleChange}
              handleAdd = {this.handleAdd} 
        />
        <List todoList = {this.state.todos}
              handleRemove = {this.handleRemove}
        />
      </div>
    );
  }
}
