import React from 'react';

export default class Contador extends React.Component {
  constructor() {
    super();
    this.state = {
      contador: 0
    };
  }

  decrementa() {
    this.setState({
      contador: this.state.contador - 1
    });
  }

  incrementa() {
    this.setState({
      contador: this.state.contador + 1
    });
  }


  render() {

    return (
      <div>
        <h1>{this.state.contador}</h1>
        <button onClick={this.incrementa.bind(this)}>+</button>
        <button onClick={this.decrementa.bind(this)}>-</button>
      </div>
    );
  }
}
