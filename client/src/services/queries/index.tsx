import { gql } from '@apollo/client';

export const GET_INVOICES = gql`
    query invoices($status: String) {
        invoices(where: { status: { equals: $status } }) {
            id
            paymentDue
            clientName
            total
            status
        }
    }
`;

export const GET_INVOICE = gql`
    query Invoice($id: String) {
        Invoice(where: { id: $id }) {
            id
            description
            createdAt
            paymentTerms
            senderAddress {
                street
                city
                country
                postCode
            }
            clientAddress {
                street
                city
                country
                postCode
            }
            paymentDue
            clientName
            clientEmail
            total
            status
            invoiceItems {
                id
                name
                quantity
                price
                total
            }
        }
    }
`;
