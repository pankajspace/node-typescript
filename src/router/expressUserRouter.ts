import express from "express";
import bcrypt from "bcryptjs";

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
  async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const { name, pass } = request.body;
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(pass, salt);
      response.status(200).send({ name, hashedPass });
    } catch (error) {
      response
        .status(400)
        .send(`<h1 style="color:red">Error occured, please try again.</h1>`);
      next(error);
    }
  }
);

export default expressUserRouter;
