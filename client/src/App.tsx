import { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Routes from './commons/Routes';
import { ApolloClient, ApolloProvider, InMemoryCache, split } from '@apollo/client';
import 'moment/locale/nl';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { createUploadLink } from 'apollo-upload-client';

import './App.scss';

const apolloCache = new InMemoryCache();

const uploadLink = createUploadLink({
    uri: process.env.REACT_APP_API_URI,
});

const wsLink = new WebSocketLink({
    uri: process.env.REACT_APP_SOCKET_URI || '',
    options: {
        reconnect: true,
    },
});

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    uploadLink,
);

const client = new ApolloClient({
    cache: apolloCache,
    link: splitLink,
});

const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Router history={history}>
                    <Routes />
                </Router>
            </ApolloProvider>
        );
    }
}

export default App;
