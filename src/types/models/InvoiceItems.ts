import { objectType } from 'nexus';

export const InvoiceItems = objectType({
    name: 'InvoiceItems',
    definition(t) {
        t.model.id();
        t.model.invoiceId();
        t.model.invoice({
            type: 'Invoice',
        });
        t.model.name();
        t.model.quantity();
        t.model.price();
        t.model.total();
    },
});
