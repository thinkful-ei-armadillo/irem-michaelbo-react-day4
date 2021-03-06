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

  handleAddButton = (props) => {
    console.log('Button clicked');
    const newRandomCard = () => {
      const id = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
      //  console.log(id); 
      return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
    }
    console.log('Waiting for card')
    console.log(newRandomCard.id);
    this.setState({
      lists: [...this.state.lists[props.id].cardIds, newRandomCard.id],
      allCards: {
        ...this.state.allCards,
        id : newRandomCard
      }
    })
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
              handleAddButton={this.handleAddButton}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
