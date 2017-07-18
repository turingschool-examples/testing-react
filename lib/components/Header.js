import React, { Component } from 'react';

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      body: '',
    }
  }

  render() {
    const { title, body } = this.state;

    return (
      <div className='header'>
        <h1 className='logo'>
          <span className='logo-todont'>To-Don't</span>
          <span className='logo-box'>Box</span>
        </h1>

        <section className='form'>
          <input value={ title }
                 placeholder='Title'
                 onChange={ (e) => this.setState({ title: e.target.value }) } />
          <input value={ body }
                 placeholder='Body'
                 onChange={ (e) => this.setState({ body: e.target.value }) } />
          <button onClick={() => { this.submitIdea() }}>
          save
        </button>
        </section>
      </div>
    )
  }
}
