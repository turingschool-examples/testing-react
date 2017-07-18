import React, { Component } from 'react';

export default class ToDontCard extends Component {
  constructor() {
    super()
  }

  render() {
    const { title, body } = this.props.toDont

    return (
      <div className='toDont-card'>
        <h1>{ title }</h1>
        <p>{ body }</p>
      </div>
    )
  }
}
