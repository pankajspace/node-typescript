import { IncomingMessage, ServerResponse } from "http";

export const mapRoutes = (
  req: IncomingMessage,
  res: ServerResponse
): string => {
  const URL: string = req.url || "";
  const METHOD: string = req.method || "";

  if (METHOD == "GET") {
    switch (URL) {
      case "/":
        return "<h2 style='color: darkgreen'>HOME</h2>";
      case "/about":
        return "<h2 style='color: darkgreen'>ABOUT</h2>";
      default:
        return "<h2 style='color: red'>Page Not Found</h2>";
    }
  }
  return "<h2 style='color: red'>Page Not Found</h2>";
};
