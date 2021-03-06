'use strict';

let ResourceError = libRequire('lib/models/errors/resource_error.js');

module.exports = class ConflictError extends ResourceError {

    constructor(errorCode, message) {
        super(errorCode, message, 409);
    }
};
