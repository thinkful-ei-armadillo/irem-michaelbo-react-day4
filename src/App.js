import React, { Component } from 'react';
import List from './List';
import STORE from './STORE';
import './App.css';

class App extends Component {
  state= {...STORE};
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    },
  }; 

  handleDeleteButton= (e, id)=> {
    // console.log('you clicked the button');
    // console.log(this.state.allCards);
    console.log(e.id);
    let newArray = this.state.allCards.filter((item, id) => item.id !== id);
    // { lists.map((list) => <List key={list.id} header={list.header} cards={list.cardIds.map(id => allCards[id])} />
    console.log(newArray);
    // this.setState(newArray);
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
