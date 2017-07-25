import React, { Component } from 'react';
import ToDontList from './ToDontList';

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
    }
  }

  submitIdea() {
    const { title, body } = this.state;
    const idea = { id: Date.now(), quality: '😕', title, body }

    this.props.addToDont(idea)
    this.setState({ title: '', body: '' })
  }

  submitOnEnter(e) {
    if (e.keyCode === 13) {
      document.getElementById('title-field').focus()
      this.submitIdea()
    }
  }

  render() {
    const { title, body, toDonts } = this.state;

    return (
      <div className='header'>
        <h1 className='logo'>
          <span className='logo-todont'>To-Don't</span>
          <span className='logo-box'>Box</span>
        </h1>

        <section className='form'>
          <input value={ title }
                 id='title-field'
                 placeholder='Title'
                 onChange={ (e) => this.setState({ title: e.target.value }) }
                 onKeyDown={ (e) => this.submitOnEnter(e) } />
          <input value={ body }
                 placeholder='Body'
                 onChange={ (e) => this.setState({ body: e.target.value }) }
                 onKeyDown={ (e) => this.submitOnEnter(e) } />
          <button onClick={ () => this.submitIdea() }
                  disabled={ !title || !body }>
          save
        </button>
        </section>

      </div>
    )
  }
}
