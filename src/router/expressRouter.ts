import express from "express";
import logger from "../middlewares/logger";

const expressRouter: express.Router = express.Router();

// configuring logger for single request
expressRouter.get(
  "/",
  logger,
  (request: express.Request, response: express.Response) => {
    response
      .status(200)
      .send(`<h1 style="color:darkgreen">Welcome to ExpressJS Router</h1>`);
  }
);

export default expressRouter;
