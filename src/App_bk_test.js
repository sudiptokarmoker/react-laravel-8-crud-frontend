import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expenses: []
    };
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/expenses/")
      .then((res) => {
        this.setState({
          expenses: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return <div>Hello</div>;
  }
}

export default App;
