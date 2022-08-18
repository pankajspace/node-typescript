import StringUtilities, { getStringLength } from "./util/StringUtil";
import printNumberTable from "./util/utils";

const str: string = "Hello World!";
console.log("1. Length is: ", StringUtilities.getLength(str));
console.log("2. Length is: ", getStringLength(str));

console.log(printNumberTable(5));
