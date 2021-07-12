import { queryType } from 'nexus';

export const Query = queryType({
    definition(t) {
        t.crud.invoice();
        t.crud.invoices({
            filtering: true,
            ordering: true,
            pagination: true,
        });
    },
});
