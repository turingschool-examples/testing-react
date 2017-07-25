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

  componentDidMount() {
    this.getFromLocal()
  }

  getFromLocal() {
    const toDonts = localStorage.getItem('toDonts')

    if (toDonts) {
      this.setState({ toDonts: JSON.parse(toDonts) })
    }
  }

  addToDont(newToDont) {
    const updatedToDonts = [ newToDont, ...this.state.toDonts ]

    this.setState({ toDonts: updatedToDonts }, this.updateLocalStorage)
  }

  updateLocalStorage() {
    localStorage.setItem('toDonts', JSON.stringify(this.state.toDonts))
  }

  updateCard(card) {
    const updatedCards = this.state.toDonts.map(toDont => toDont.id === card.id ? card : toDont)

    this.setState({ toDonts: updatedCards }, this.updateLocalStorage)
  }

  deleteCard(card) {
    const filteredCards = this.state.toDonts.filter(toDont => toDont.id !== card.id)

    this.setState({ toDonts: filteredCards }, this.updateLocalStorage)
  }

  render() {
    const { toDonts } = this.state;

    return (
      <div>
        <Header toDonts={ toDonts } addToDont={this.addToDont.bind(this)} />
        <ToDontList toDonts={ toDonts }
                    updateCard={(card) => this.updateCard(card)}
                    deleteCard={(card) => this.deleteCard(card) }/>
      </div>
    )
  }
}
