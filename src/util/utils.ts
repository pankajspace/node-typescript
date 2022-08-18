const printNumberTable = (num: number): string => {
  let tmpString: string = "";
  for (let index: number = 0; index <= 10; index++) {
    tmpString += `${num} * ${index} = ${num * index} \n`;
  }
  return tmpString;
};

export default printNumberTable;
