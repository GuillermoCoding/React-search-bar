import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

const cache = new InMemoryCache();

const client = new ApolloClient({
    link: new HttpLink({uri: 'https://downshift-address-autocomplete.herokuapp.com/graphql'}),
    cache
});
const Root = ()=>{
    return (
        <ApolloProvider client={client}>
        <div>
            <SearchBar/>
        </div>
        </ApolloProvider>
    );
};

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
);