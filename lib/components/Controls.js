import React from 'react'

export default class Controls extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
  }

  submitItem() {
    this.props.handleClick(this.state);
    this.clearField();
  }

  clearField() {
    this.setState({ title: '' });
  }

  render() {
    return (
    <div className="create-list">
      <input type='text' value={this.state.title} onChange={(e)=>{ this.setState({title: e.target.value})}}/>
      <input type='submit' onClick={() => { this.submitItem()}}/>
    </div>
    )
  }
}
