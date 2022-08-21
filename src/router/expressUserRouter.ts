import express from "express";
import { body, validationResult } from "express-validator";

const expressUserRouter: express.Router = express.Router();

/**
 * @usage : To create the user
 * @url : http://127.0.0.1/user/add
 * @method : post
 * @fields : name, email
 * @acess : public
 */
expressUserRouter.post(
  "/add",
  [
    body("name").not().isEmpty().withMessage("Please enter name"),
    body("email").isEmail().withMessage("Please enter valid email address"),
  ],
  (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json(errors);
      }
      const { name, email } = request.body;
      response.status(200).send({ name, email });
    } catch (error) {
      response
        .status(400)
        .send(`<h1 style="color:red">Error occured, please try again.</h1>`);
      next(error);
    }
  }
);

export default expressUserRouter;
