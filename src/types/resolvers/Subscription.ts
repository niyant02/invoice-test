import { withFilter } from 'graphql-subscriptions';
import { stringArg, nonNull, subscriptionField } from 'nexus';

export const INVOICE_CREATED = 'INVOICE_CREATED';

export const UserSignedIn = subscriptionField('userSignedIn', {
    type: 'Invoice',
    args: {
        id: nonNull(stringArg()),
    },
    subscribe: withFilter(
        (_, args, ctx) => {
            const { pubsub } = ctx;
            return pubsub.asyncIterator(INVOICE_CREATED);
        },
        (payload, { id }) => {
            return payload.id === id;
        },
    ),
    resolve: (payload) => {
        return payload;
    },
});
