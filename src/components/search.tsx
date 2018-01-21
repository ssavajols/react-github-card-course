import * as React from 'react';

export type ISearchProps = {
  onSearch: (event: any) => void; 
}

export type ISearchState = {
  search: string;
}

export class Search extends React.Component {

  props: ISearchProps;

  onSearch = (event) => {
    event.preventDefault();

    const input = this.refs.searchfield as any;
    
    this.props.onSearch(input.value);
    input.value = '';
  }

  render() {
    return <form onSubmit={this.onSearch}>
      <input type="text" ref="searchfield" placeholder='Search' required />
      <input type="submit" value="Search" />
    </form>;
  }   
}
