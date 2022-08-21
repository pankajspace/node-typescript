import express from "express";

const expressUserRouter: express.Router = express.Router();

/**
 * @usage : To create the user
 * @url : http://127.0.0.1/user/add
 * @method : post
 * @fields : name
 * @acess : public
 */
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
