const msg: string = "Hello World!";
console.log(msg);

const printNumbers = (start: number, end: number): void => {
  if (start < end) {
    while (start <= end) {
      console.log(start);
      start++;
    }
  } else {
    console.log("Please enter start number less than end number");
  }
};

printNumbers(1, 10);
