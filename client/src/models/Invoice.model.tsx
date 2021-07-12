export type Invoice = {
    id: string;
    createdAt: string;
    paymentDue: string;
    description: string;
    paymentTerms: number;
    clientName: string;
    clientEmail: string;
    status: string;
    senderAddressId: number;
    clientAddressId: number;
    senderAddress: SenderAddress;
    clientAddress: ClientAddress;
    invoiceItems: InvoiceItems[];
    total: number;
};

export type SenderAddress = {
    id: number;
    street: string;
    city: string;
    postCode: string;
    country: string;
};

export type ClientAddress = {
    id: number;
    street: string;
    city: string;
    postCode: string;
    country: string;
};

export type InvoiceItems = {
    id: number;
    invoiceId: number;
    invoice: Invoice;
    name: string;
    quantity: number;
    price: number;
    total: number;
};
