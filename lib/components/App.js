import React, { Component } from 'react';
import Header from './Header';
import ToDontList from './ToDontList';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      toDonts: []
    }
  }

  addToDont(newToDont) {
    const updatedToDonts = [ newToDont, ...this.state.toDonts ]
    this.setState({ toDonts: updatedToDonts })
  }

  render() {
    const { toDonts } = this.state;

    return (
      <div>
        <Header toDonts={ toDonts } addToDont={this.addToDont.bind(this)} />
        <ToDontList toDonts={ toDonts } />
      </div>
    )
  }
}
