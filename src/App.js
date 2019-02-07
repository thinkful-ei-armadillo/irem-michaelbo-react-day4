import React, { Component } from 'react';
import List from './List';
import STORE from './STORE';
import './App.css';

class App extends Component {
  
  // static defaultProps = {
  //   store: {
  //     lists: [],
  //     allCards: {},
  //   },
  // }; 

  state= {...STORE};

  handleDeleteButton = (cardId) => {
    const newList = this.state.lists.map((list) => {
      return Object.assign({}, list, {cardIds: list.cardIds.filter(id => id !== cardId)});
  })
    console.log(newList); 

    this.setState ({
      lists: newList
    });
    console.log(this.state.lists);
  }

  handleAddButton = () => {
    
  }

  render() {
    // const { store } = this.state
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
              handleDeleteButton={this.handleDeleteButton}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
