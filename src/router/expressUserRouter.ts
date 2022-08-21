import express from "express";

const expressUserRouter: express.Router = express.Router();

expressUserRouter.post(
  "/add",
  (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    try {
      response.status(200).send(request.body);
    } catch (error) {
      response.status(400).send("Error occured, please try again.");
      next(error);
    }
  }
);

export default expressUserRouter;
