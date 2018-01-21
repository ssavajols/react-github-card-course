import * as React from 'react';

export type ISearchProps = {
  onSearch: (event: any) => void; 
}

export type ISearchState = {
  search: string;
}

export class Search extends React.Component {

  static initialState = (): ISearchState => ({
    search: ''
  });

  props: ISearchProps;

  state: ISearchState = Search.initialState();

  onSearch = (event) => {
    event.preventDefault();
    this.setState(Search.initialState());
    this.props.onSearch(this.state.search);
  }

  handleChange = (event) => {
    this.setState({
      search: event.currentTarget.value
    });
  }

  render() {
    return <form onSubmit={this.onSearch}>
      <input type="text"
          placeholder="Search"
          onChange={this.handleChange}
          value={this.state.search}
          required />
      <input type="submit" value="Search" />
    </form>;
  }   
}
