export function errorResponseCode(errorType) {
    let code = 200;
    switch (errorType) {
        case 'GRAPHQL_VALIDATION_FAILED':
        case 'GRAPHQL_PARSE_FAILED':
        case 'BAD_USER_INPUT': {
            code = 422;
            break;
        }
        case 'INTERNAL_SERVER_ERROR': {
            code = 500;
            break;
        }
        case 'UNAUTHENTICATED': {
            code = 401;
            break;
        }
        case 'PERSISTED_QUERY_NOT_FOUND':
        case 'PERSISTED_QUERY_NOT_SUPPORTED': {
            code = 404;
            break;
        }
        case 'FORBIDDEN': {
            code = 503;
            break;
        }
    }

    return code;
}

export function padder(str, pad = '0000') {
    str = '' + str;
    return pad.substring(0, pad.length - str.length) + str;
}
