import React, { Component } from 'react';
import List from './List';
import STORE from './STORE';
import './App.css';

class App extends Component {
  state= {...STORE};

  handleDeleteButton = (cardId) => {
    console.log(cardId);
    console.log('Button clicked');
    const newList = this.state.lists.map((list) => {
      return Object.assign({}, list, {cardIds: list.cardIds.filter(id => id !== cardId)});
  })
    console.log(newList); 

    this.setState ({
      lists: newList
    });
    console.log(this.state.lists);
  }

  handleAddButton = (listId) => {
    const newRandomCard = () => {
      const id = Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 4);
      return {
        id: id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
    }

    const newCard = newRandomCard();
    console.log(newCard.id); 

    const newList = this.state.lists.map(list => {
      if(list.id === listId){
        return Object.assign({}, list, 
          {cardIds: [...list.cardIds, newCard.id]});
      }
      return list;
        });
    
    let allCards = this.state.allCards;
    allCards[newCard.id]= newCard;
    this.setState({
      lists: newList, 
      allCards: allCards
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
              id={list.id}
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => {return this.state.allCards[id]})}
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
