import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/bulma';

class App extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.state = {
      veggies: [
        "Carrots",
        "Zucchinis",
        "Potato"
      ]
    }
  }

  addItem(e) {
    e.preventDefault();

    let veggies = this.state.veggies;
    const newItem = document.getElementById("addInput");
    const form = document.getElementById("addItemForm");

    if (newItem.value != "") {
      veggies.push(newItem.value);
      this.setState({
        veggies: veggies
      });
      newItem.classVeggies.remove("is-danger");
      form.reset();
    } else {

      newItem.classVeggies.add("is-danger");
    }
  }

  render() {
    return (
      <div className="content">
        <div className="container">
          <section className="section">
            <ul>
              {this.state.veggies.map(filtered => (
                <li key={filtered}>{filtered}</li>
              ))}
            </ul>
          </section>
          <hr />
          <section className="section">
            <form className="form" id="addItemForm">
              <input
                type="text"
                className="input"
                id="addInput"
                placeholder="fuck yea veggies"
              />
              <button className="button is-info" onClick={this.addItem}>
                rate that bitch
              </button>
            </form>
          </section>
        </div>
      </div>
    )
  }
}

class Veggies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        filtered: []
    }
  }

  componentDidMount() {
    this.setState({
      filtered: this.props.items
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items
    });
  }

  render() {
    return (
      <div>
      ...
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));