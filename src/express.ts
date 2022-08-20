import express from "express";

const app: express.Application = express();
const port = process.env.port || 9090;

app.get("/", (req: express.Request, res: express.Response) => {
  res
    .status(200)
    .send(`<h1 style="color:darkgreen">Welcome to ExpressJS App</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
