import { gql } from '@apollo/client';

export const ADD_INVOICE = gql`
    mutation createOneInvoice(
        $id: String!
        $description: String
        $paymentTerms: Int
        $clientName: String!
        $clientEmail: String!
        $status: String!
        $total: Decimal!
        $paymentDue: DateTime
        $senderAddressStreet: String!
        $senderAddressCity: String!
        $senderAddressCountry: String!
        $senderAddressPostCode: String!
        $clientAddressStreet: String!
        $clientAddressCity: String!
        $clientAddressCountry: String!
        $clientAddressPostCode: String!
        $invoiceItems: [invoiceItems!]
    ) {
        createOneInvoice(
            data: {
                id: $id
                description: $description
                paymentTerms: $paymentTerms
                clientName: $clientName
                clientEmail: $clientEmail
                status: $status
                total: $total
                paymentDue: $paymentDue
                senderAddressStreet: $senderAddressStreet
                senderAddressCity: $senderAddressCity
                senderAddressCountry: $senderAddressCountry
                senderAddressPostCode: $senderAddressPostCode
                clientAddressStreet: $clientAddressStreet
                clientAddressCity: $clientAddressCity
                clientAddressCountry: $clientAddressCountry
                clientAddressPostCode: $clientAddressPostCode
                invoiceItems: { data: $invoiceItems, skipDuplicates: true }
            }
        ) {
            id
            paymentDue
            clientName
            total
            status
        }
    }
`;

export const UPDATE_INVOICE = gql`
    mutation updateOneInvoice(
        $id: string
        $description: String
        $paymentTerms: Int
        $clientName: String!
        $clientEmail: String!
        $status: String!
        $total: Decimal!
        $paymentDue: DateTime
        $senderAddressStreet: String!
        $senderAddressCity: String!
        $senderAddressCountry: String!
        $senderAddressPostCode: String!
        $clientAddressStreet: String!
        $clientAddressCity: String!
        $clientAddressCountry: String!
        $clientAddressPostCode: String!
        $invoiceItems: [invoiceItems!]
    ) {
        updateOneInvoice(
            where: { id: $id }
            data: {
                description: $description
                paymentTerms: $paymentTerms
                clientName: $clientName
                clientEmail: $clientEmail
                status: $status
                total: $total
                paymentDue: $paymentDue
                senderAddressStreet: $senderAddressStreet
                senderAddressCity: $senderAddressCity
                senderAddressCountry: $senderAddressCountry
                senderAddressPostCode: $senderAddressPostCode
                clientAddressStreet: $clientAddressStreet
                clientAddressCity: $clientAddressCity
                clientAddressCountry: $clientAddressCountry
                clientAddressPostCode: $clientAddressPostCode
                invoiceItems: { data: $invoiceItems, skipDuplicates: true }
            }
        ) {
            id
            paymentDue
            clientName
            total
            status
        }
    }
`;

export const DELETE_INVOICE = gql`
    mutation deleteOneInvoice($id: string) {
        deleteOneInvoice(where: { id: $id }) {
            id
            paymentDue
            clientName
            total
            status
        }
    }
`;
