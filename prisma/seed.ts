import { PrismaClient } from '@prisma/client';
import { Invoices } from './seeds/invoices';

const prisma = new PrismaClient();

async function main() {
    console.log('Invoices: ', Invoices);
    Invoices.forEach(async (ele, index) => {
        console.log('index: ', index);
        const res = await prisma.invoice.create({
            data: {
                id: ele.id,
                createdAt: ele.createdAt,
                paymentDue: ele.paymentDue,
                description: ele.description,
                paymentTerms: ele.paymentTerms,
                clientName: ele.clientName,
                clientEmail: ele.clientEmail,
                status: ele.status,
                senderAddress: ele.senderAddress
                    ? {
                          create: {
                              street: ele.senderAddress.street || null,
                              city: ele.senderAddress.city || null,
                              postCode: ele.senderAddress.postCode || null,
                              country: ele.senderAddress.country || null,
                          },
                      }
                    : null,
                clientAddress: ele.clientAddress
                    ? {
                          create: {
                              street: ele.clientAddress.street || null,
                              city: ele.clientAddress.city || null,
                              postCode: ele.clientAddress.postCode || null,
                              country: ele.clientAddress.country || null,
                          },
                      }
                    : null,
                invoiceItems: {
                    createMany: {
                        data: [...ele.items],
                        skipDuplicates: true,
                    },
                },
                total: ele.total,
            },
        });
        console.log('Res: ', res);
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
