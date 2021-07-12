import { objectType } from 'nexus';

export const SenderAddress = objectType({
    name: 'SenderAddress',
    definition(t) {
        t.model.id();
        t.model.street();
        t.model.city();
        t.model.country();
        t.model.postCode();
        t.model.invoice();
    },
});
