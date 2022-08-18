import http, { IncomingMessage, Server, ServerResponse } from "http";

const HOST: string = "127.0.0.1";
const PORT: number = 9090;

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.setHeader("charset", "utf-8");
    res.end("<h2 style='color: darkgreen'>Hello World!</h2>");
  }
);

server.listen(PORT, HOST, () => {
  console.log(`Listening on: http://${HOST}:${PORT}`);
});
