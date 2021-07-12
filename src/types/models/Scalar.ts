import { asNexusMethod, inputObjectType } from 'nexus';
import { JSONObjectResolver } from 'graphql-scalars';
import { GraphQLDateTime, GraphQLDate } from 'graphql-iso-date';
import { GraphQLUpload } from 'graphql-upload';

export const NullableUploadFieldUpdateOperationsInput = inputObjectType({
    name: 'NullableUploadFieldUpdateOperationsInput',
    definition(t) {
        t.field('set', { type: 'Upload' });
    },
});

export const Json = asNexusMethod(JSONObjectResolver, 'json');
export const Upload = GraphQLUpload;
export const Date = asNexusMethod(GraphQLDate, 'date');
export const DateTime = asNexusMethod(GraphQLDateTime, 'date');
