import express from "express";

export default function logger(
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) {
  console.log(`[${request.url}] - [${request.method}]`);
  next();
}
