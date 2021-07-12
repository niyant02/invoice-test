import * as path from 'path';
import * as types from './types';
import { declarativeWrappingPlugin, makeSchema } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';

export const schema = makeSchema({
    types,
    plugins: [
        nexusPrisma({
            experimentalCRUD: true,
            outputs: { typegen: path.join(__dirname, './generated/', 'typegen-nexus-plugin-prisma.d.ts') },
        }),
        declarativeWrappingPlugin(),
    ],
    outputs: {
        schema: path.join(__dirname, './../schema.graphql'),
        typegen: path.join(__dirname, './generated/nexus-typegen.d.ts'),
    },
});
