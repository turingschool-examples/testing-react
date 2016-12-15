import React from 'react';
import Controls from './Controls';
import RenderList from './RenderList';

export default class GroceryList extends React.Component {
  constructor(){
    super();
    this.state = {
      listItems: [],
    };
  }


  addItems(list) {
    this.state.listItems.push(Object.assign(list, { id: Date.now() }));
    this.setState({
      listItems: this.state.listItems,
    });
  }

  render() {
    return (
      <div>
        <Controls handleClick={this.addItems.bind(this)}/>
        <section>
          <h4> All Grocery Items</h4>
          <RenderList listItems= {this.state.listItems} />
        </section>
      </div>
    );
  }
}
