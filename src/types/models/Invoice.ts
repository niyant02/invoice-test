import { objectType } from 'nexus';

export const Invoice = objectType({
    name: 'Invoice',
    definition(t) {
        t.model.id();
        t.model.description();
        t.model.paymentTerms();
        t.model.clientName();
        t.model.clientEmail();
        t.model.status();
        t.model.total();
        t.model.paymentDue();
        t.model.senderAddressId();
        t.model.clientAddressId();
        t.model.senderAddress({
            type: 'SenderAddress',
        });
        t.model.clientAddress({
            type: 'ClientAddress',
        });
        t.field('createdAt', {
            type: 'DateTime',
        });
        t.field('updatedAt', {
            type: 'DateTime',
        });
        t.model.invoiceItems({
            type: 'InvoiceItems',
        });
    },
});
