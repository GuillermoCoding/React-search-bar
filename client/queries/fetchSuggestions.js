import gql from 'graphql-tag';

export default gql`
    query fetchSuggestions($input: String) {
        suggestions(input: $input)
    }
`;