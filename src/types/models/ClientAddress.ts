import { objectType } from 'nexus';

export const ClientAddress = objectType({
    name: 'ClientAddress',
    definition(t) {
        t.model.id();
        t.model.street();
        t.model.city();
        t.model.country();
        t.model.postCode();
        t.model.invoice();
    },
});
