import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    first?: boolean
    last?: boolean
    before?: boolean
    after?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'Decimal' | 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  Invoice: Prisma.Invoice
  SenderAddress: Prisma.SenderAddress
  ClientAddress: Prisma.ClientAddress
  InvoiceItems: Prisma.InvoiceItems
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    invoices: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'description' | 'paymentTerms' | 'clientName' | 'clientEmail' | 'status' | 'total' | 'paymentDue' | 'senderAddressId' | 'clientAddressId' | 'senderAddress' | 'clientAddress' | 'createdAt' | 'updatedAt' | 'invoiceItems'
      ordering: 'id' | 'description' | 'paymentTerms' | 'clientName' | 'clientEmail' | 'status' | 'total' | 'paymentDue' | 'senderAddressId' | 'clientAddressId' | 'senderAddress' | 'clientAddress' | 'createdAt' | 'updatedAt'
    }
    senderAddresses: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'street' | 'city' | 'country' | 'postCode' | 'invoice'
      ordering: 'id' | 'street' | 'city' | 'country' | 'postCode'
    }
    clientAddresses: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'street' | 'city' | 'country' | 'postCode' | 'invoice'
      ordering: 'id' | 'street' | 'city' | 'country' | 'postCode'
    }
    invoiceItems: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'invoiceId' | 'invoice' | 'name' | 'quantity' | 'price' | 'total'
      ordering: 'id' | 'invoiceId' | 'invoice' | 'name' | 'quantity' | 'price' | 'total'
    }
  },
  Invoice: {
    invoiceItems: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'invoiceId' | 'invoice' | 'name' | 'quantity' | 'price' | 'total'
      ordering: 'id' | 'invoiceId' | 'invoice' | 'name' | 'quantity' | 'price' | 'total'
    }
  }
  SenderAddress: {
    invoice: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'description' | 'paymentTerms' | 'clientName' | 'clientEmail' | 'status' | 'total' | 'paymentDue' | 'senderAddressId' | 'clientAddressId' | 'senderAddress' | 'clientAddress' | 'createdAt' | 'updatedAt' | 'invoiceItems'
      ordering: 'id' | 'description' | 'paymentTerms' | 'clientName' | 'clientEmail' | 'status' | 'total' | 'paymentDue' | 'senderAddressId' | 'clientAddressId' | 'senderAddress' | 'clientAddress' | 'createdAt' | 'updatedAt'
    }
  }
  ClientAddress: {
    invoice: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'description' | 'paymentTerms' | 'clientName' | 'clientEmail' | 'status' | 'total' | 'paymentDue' | 'senderAddressId' | 'clientAddressId' | 'senderAddress' | 'clientAddress' | 'createdAt' | 'updatedAt' | 'invoiceItems'
      ordering: 'id' | 'description' | 'paymentTerms' | 'clientName' | 'clientEmail' | 'status' | 'total' | 'paymentDue' | 'senderAddressId' | 'clientAddressId' | 'senderAddress' | 'clientAddress' | 'createdAt' | 'updatedAt'
    }
  }
  InvoiceItems: {

  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    invoice: 'Invoice'
    invoices: 'Invoice'
    senderAddress: 'SenderAddress'
    senderAddresses: 'SenderAddress'
    clientAddress: 'ClientAddress'
    clientAddresses: 'ClientAddress'
    invoiceItems: 'InvoiceItems'
    invoiceItems: 'InvoiceItems'
  },
  Mutation: {
    createOneInvoice: 'Invoice'
    updateOneInvoice: 'Invoice'
    updateManyInvoice: 'AffectedRowsOutput'
    deleteOneInvoice: 'Invoice'
    deleteManyInvoice: 'AffectedRowsOutput'
    upsertOneInvoice: 'Invoice'
    createOneSenderAddress: 'SenderAddress'
    updateOneSenderAddress: 'SenderAddress'
    updateManySenderAddress: 'AffectedRowsOutput'
    deleteOneSenderAddress: 'SenderAddress'
    deleteManySenderAddress: 'AffectedRowsOutput'
    upsertOneSenderAddress: 'SenderAddress'
    createOneClientAddress: 'ClientAddress'
    updateOneClientAddress: 'ClientAddress'
    updateManyClientAddress: 'AffectedRowsOutput'
    deleteOneClientAddress: 'ClientAddress'
    deleteManyClientAddress: 'AffectedRowsOutput'
    upsertOneClientAddress: 'ClientAddress'
    createOneInvoiceItems: 'InvoiceItems'
    updateOneInvoiceItems: 'InvoiceItems'
    updateManyInvoiceItems: 'AffectedRowsOutput'
    deleteOneInvoiceItems: 'InvoiceItems'
    deleteManyInvoiceItems: 'AffectedRowsOutput'
    upsertOneInvoiceItems: 'InvoiceItems'
  },
  Invoice: {
    id: 'String'
    description: 'String'
    paymentTerms: 'Int'
    clientName: 'String'
    clientEmail: 'String'
    status: 'String'
    total: 'Decimal'
    paymentDue: 'DateTime'
    senderAddressId: 'Int'
    clientAddressId: 'Int'
    senderAddress: 'SenderAddress'
    clientAddress: 'ClientAddress'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    invoiceItems: 'InvoiceItems'
  }
  SenderAddress: {
    id: 'Int'
    street: 'String'
    city: 'String'
    country: 'String'
    postCode: 'String'
    invoice: 'Invoice'
  }
  ClientAddress: {
    id: 'Int'
    street: 'String'
    city: 'String'
    country: 'String'
    postCode: 'String'
    invoice: 'Invoice'
  }
  InvoiceItems: {
    id: 'Int'
    invoiceId: 'String'
    invoice: 'Invoice'
    name: 'String'
    quantity: 'Int'
    price: 'Decimal'
    total: 'Decimal'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  Invoice: Typegen.NexusPrismaFields<'Invoice'>
  SenderAddress: Typegen.NexusPrismaFields<'SenderAddress'>
  ClientAddress: Typegen.NexusPrismaFields<'ClientAddress'>
  InvoiceItems: Typegen.NexusPrismaFields<'InvoiceItems'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  