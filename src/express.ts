import express from "express";

import expressRouter from "./router/expressRouter";
import expressUserRouter from "./router/expressUserRouter";

const app: express.Application = express();
const port = process.env.port || 9090;

// config for receiving form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: express.Request, res: express.Response) => {
  res
    .status(200)
    .send(`<h1 style="color:darkgreen">Welcome to ExpressJS App</h1>`);
});

app.use("/api", expressRouter);
app.use("/user", expressUserRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
