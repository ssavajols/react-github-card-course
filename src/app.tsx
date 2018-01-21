import * as React from 'react';
import { Card, ICardProps } from './components/card';
import { CardList } from './components/cardList';
import { Search } from './components/search';
import { GithubService} from './services/github.service';

export type IAppState = {
  cards: ICardProps[];
}

export class App extends React.Component {

  state: IAppState = {
    cards: []
  }

  searchHandler = async (value) => {
    let card = await GithubService.getByUsername(value);
    
    if( card ) {
      this.setState((prevState: IAppState) => ({
        cards: [...prevState.cards, card]
      }));
    } 
  }

  render() {
    return <div>
      <h1></h1>
      <Search onSearch={this.searchHandler} />
      <CardList cards={this.state.cards} />
    </div>;
  }
}