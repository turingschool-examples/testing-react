import React, { Component } from 'react';

export default class ToDontCard extends Component {
  constructor() {
    super()
    this.state = {
      quality: 'Swill'
    }
  }

  render() {
    const { title, body } = this.props.toDont

    return (
      <div className='toDont-card'>
        <h1>{ title }</h1>
        <p>{ body }</p>
        <div>
          <span>Quality: </span><span>{this.state.quality}</span>
        </div>
      </div>
    )
  }
}
