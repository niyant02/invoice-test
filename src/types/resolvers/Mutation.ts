import { mutationType } from 'nexus';

export const Mutation = mutationType({
    definition(t) {
        t.crud.createOneInvoice();
        t.crud.updateOneInvoice();
        t.crud.deleteOneInvoice();
    },
});
