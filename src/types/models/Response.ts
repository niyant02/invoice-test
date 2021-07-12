import { objectType } from 'nexus';

export const Response = objectType({
    name: 'Response',
    definition(t) {
        t.nonNull.string('message');
        t.int('code');
    },
});
