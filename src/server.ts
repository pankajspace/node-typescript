import http, { IncomingMessage, Server, ServerResponse } from "http";

const HOST: string = "127.0.0.1";
const PORT: number = 9090;

// deepcode ignore HttpToHttps: <please specify a reason of ignoring this>
const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    // deepcode ignore ContentTypeNoCharset: <please specify a reason of ignoring this>
    res.setHeader("Content-Type", "application/json");
    res.setHeader("charset", "utf-8");

    const URL: string = req.url || "";
    const METHOD: string = req.method || "";

    if (URL == "/user" && METHOD == "POST") {
      try {
        let output = "";
        req
          .on("data", (chunk) => {
            output += chunk;
          })
          .on("end", () => {
            res.end(`<pre>${output}</pre>`);
          });
      } catch (error) {
        console.error(error);
        res.end("<h2 style='color: red'>Page Not Found Catch</h2>");
      }
    }
  }
);

server.listen(PORT, HOST, () => {
  console.log(`Listening on: http://${HOST}:${PORT}`);
});
