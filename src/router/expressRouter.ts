import express from "express";

const expressRouter: express.Router = express.Router();

expressRouter.get(
  "/",
  (request: express.Request, response: express.Response) => {
    response
      .status(200)
      .send(`<h1 style="color:darkgreen">Welcome to ExpressJS Router</h1>`);
  }
);

export default expressRouter;
