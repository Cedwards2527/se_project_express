/* eslint-disable max-classes-per-file */

const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
const NOT_FOUND = 404;
const CONFLICT = 409;
const SERVER_ERROR = 500;


class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.status = BAD_REQUEST;
    this.name = "BadRequestError";
  }
}

class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.status = UNAUTHORIZED;
    this.name = "UnauthorizedError";
  }
}

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.status = FORBIDDEN;
    this.name = "ForbiddenError";
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.status = NOT_FOUND;
    this.name = "NotFoundError";
  }
}

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.status = CONFLICT;
    this.name = "ConflictError";
  }
}

module.exports = {
  BAD_REQUEST,
  BadRequestError,
  UNAUTHORIZED,
  UnauthorizedError,
  FORBIDDEN,
  ForbiddenError,
  NOT_FOUND,
  NotFoundError,
  CONFLICT,
  ConflictError,
  SERVER_ERROR,
};
