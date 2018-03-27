import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import styles from './styles/App.css';

const cache = new InMemoryCache();

const client = new ApolloClient({
    link: new HttpLink({uri: 'https://downshift-address-autocomplete.herokuapp.com/graphql'}),
    cache
});
const App = ()=>{
    return (
        <ApolloProvider client={client}>
            <div className={styles.container}>
            <h4 className={styles.header}>Downshift Address Autocomplete</h4>
            <SearchBar/>
            </div>
        </ApolloProvider>
    );
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);