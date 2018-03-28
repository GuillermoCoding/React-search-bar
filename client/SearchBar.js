import React, { Component } from 'react';
import DownShift from 'downshift';
import { withApollo } from 'react-apollo';
import fetchSuggestions from './queries/fetchSuggestions';
import styles from './styles/SearchBar.css';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      items: []
    }
  }
  onChange(selectedItem){
    this.setState({input: selectedItem});
  }
  async onInputValueChange(input){
    await this.setState({input});
    const results = await this.props.client.query({
      query: fetchSuggestions,
      variables: {
        input: this.state.input
      }
    });
    this.setState({items: results.data.suggestions});
  }
  render(){
    return (
      <DownShift
        inputValue={this.state.input}
        onChange={this.onChange.bind(this)}
        onInputValueChange={this.onInputValueChange.bind(this)}
        render={({getInputProps,getItemProps,isOpen, selectedItem,highlightedIndex})=>(
          <div>
            <input placeholder={'Start typing..'} className={styles.searchBar} {...getInputProps()} type="text"/>
            {isOpen?(
              <div className={styles.results}>
                {this.state.items.map((result,index)=>{
                  return (
                    <div
                      className={styles.item} 
                      {...getItemProps({item: result})} 
                      key={result}
                      style={{backgroundColor: highlightedIndex === index ? 'rgb(179, 218, 255)' : 'white'}}
                    >
                      {result}
                    </div>
                  );
                })}
              </div>
            ):null}
          </div>
        )}
      />
    );
  }
}

export default withApollo(SearchBar);