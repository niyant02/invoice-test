import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import express from 'express';
import { schema } from './schema';
import { createContext } from './context';
import cors from 'cors';
import { graphqlUploadExpress } from 'graphql-upload';
import { errorResponseCode } from './utils';

dotenv.config();

const { PORT = 4000 } = process.env;
const app = express();
const server = createServer(app);
const apollo = new ApolloServer({
    schema,
    context: createContext,
    subscriptions: {
        path: '/subscriptions',
        onConnect: (connectionParams, webSocket, context) => {
            console.log('Connected!');
        },
        onDisconnect: (webSocket, context) => {
            console.log('Disconnected!');
        },
    },
    formatError: (err) => {
        if (err.message.startsWith('Database Error: ')) {
            return {
                code: 500,
                message: 'Internal server error',
                name: 'DatabaseError',
            };
        }

        console.log('Server Error:');
        console.error(err.originalError);

        return {
            code: errorResponseCode(err.extensions?.code),
            statusCode: err.extensions?.code,
            name: err.name,
            message: err.message,
        };
    },
    uploads: false,
    plugins: [
        {
            serverWillStart() {
                console.log('\nServer starting up!');
            },
        },
    ],
});

app.use(cors(), graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

apollo.applyMiddleware({ app, path: '/' });

apollo.installSubscriptionHandlers(server);

server.listen({ port: PORT }, () => {
    process.stdout.write(
        `\n🚀 Server ready at http://localhost:${PORT}${apollo.graphqlPath}\n\n🚀 Subscription Server ready at ws://localhost:${PORT}${apollo.subscriptionsPath}\n`,
    );
});
