import React, { Component } from 'react';
import List from './List';
import STORE from './STORE';
import './App.css';

class App extends Component {
  
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    },
  }; 

  state= {...STORE};

  handleDeleteButton = (cardId) => {
    // console.log('you clicked the button');
    // console.log(this.state.allCards);
    console.log(this.state.lists);
    const newList = this.state.lists.map((list) => {
     
      return Object.assign({}, list, {cardIds: list.cardIds.filter(id => id !== cardId)});
    // <List key={list.id} cards={list.cardIds.filter(id => id !== cardId) }/>
  })
    console.log(newList); 
    console.log(cardId);
    // { lists.map((list) => <List key={list.id} header={list.header} cards={list.cardIds.map(id => allCards[id])} />
    // console.log(newArray);

   

    this.setState ({
      
         lists: newList,
         
      
    })
  }

  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              handleDeleteButton={this.handleDeleteButton}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
