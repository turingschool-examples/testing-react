import React, { Component } from 'react';

export default class ToDontCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quality: props.toDont.quality
    }
    this.qualities = ['Swill', 'Plausible', 'Genius']
  }

  updateQuality(direction) {
    let newQuality;
    let qualityIndex = this.qualities.indexOf(this.state.quality)
    const { quality } = this.state;

    if (direction === 'up') {
      if (qualityIndex < this.qualities.length - 1) {
        newQuality = this.qualities[qualityIndex + 1];
        qualityIndex += 1
      } else {
        newQuality = quality
      }
    } else {
      if (qualityIndex > 0) {
        newQuality = this.qualities[qualityIndex - 1];
        qualityIndex -= 1
      } else {
        newQuality = quality
      }
    }

    this.setState({ quality: newQuality }, () => {
      const newToDont = Object.assign({}, this.props.toDont, this.state)
      this.props.updateQuality(newToDont)
    })
  }

  render() {
    const { title, body } = this.props.toDont
    const { qualities, state: { quality }} = this;

    const toggleUp = () => {
      const lastIndex = qualities.length - 1;

      if (quality !== qualities[lastIndex]) {
        return <button className='card-btn' onClick={ () => this.updateQuality('up') }>⬆</button>
      }
    }

    const toggleDown = () => {
      if (quality !== qualities[0]) {
        return <button className='card-btn' onClick={ () => this.updateQuality('down') }>⬇</button>
      }
    }

    return (
      <div className='toDont-card'>
        <button className='delete-card card-btn'>✕</button>
        <h1>{ title }</h1>
        <p>{ body }</p>
        <div className='quality-section'>
          { toggleUp() }
          { toggleDown() }
          <span>Quality: {quality}</span>
        </div>
      </div>
    )
  }
}
