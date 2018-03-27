import React, { Component } from 'react';
import DownShift from 'downshift';
import { grapqhl, withApollo } from 'react-apollo';
import fetchSuggestions from './queries/fetchSuggestions';

class SearchBar extends Component {
		constructor(props){
			super(props);
			this.state = {
				input: '',
				items: []
			}
		}
    onChange(selectedItem){
        console.log('onChange');
        console.log(selectedItem);
    }
    async onInputValueChange(input){
				await this.setState({input});
				const results = await this.props.client.query({
					query: fetchSuggestions,
					variables: {
						input: this.state.input
					}
				});
				await this.setState({items: results.data.suggestions});
    }
    render(){
        return (
            <DownShift
								inputValue={this.state.input}
                onChange={this.onChange}
                onInputValueChange={this.onInputValueChange.bind(this)}
                render={({getInputProps,getItemProps,isOpen, selectedItem})=>(
                    <div>
											<input {...getInputProps()} type="text"/>
											{isOpen?(
												<div>
													{this.state.items.map(result=>{
														console.log(selectedItem);
														return (
															<div 
																{...getItemProps({item: result})} 
																key={result}
																style={{
																	backgroundColor: selectedItem === result ? 'gray' : 'white'
																}}
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