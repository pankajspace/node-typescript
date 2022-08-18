import fs from "fs";
import path from "path";

fs.readFile(
  path.join(__dirname, "data", "data.json"),
  "utf-8",
  (error, result) => {
    if (error) {
      throw error;
    }
    console.log(result);
    fs.writeFile(
      path.join(__dirname, "data", "output.txt"),
      result,
      (error1) => {
        if (error1) {
          throw error1;
        }
      }
    );
  }
);
