function socksForSale() {
  const socksArr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
  const socksSet = new Set(socksArr);
  let socksPair = 0;

  socksSet.forEach((num) => {
    let socksColorNumbers = 0;
    socksArr.forEach((n) => {
      if (num === n) {
        socksColorNumbers++;
      }
    });
    socksPair += Math.trunc(socksColorNumbers / 2);
  });
  return socksPair;
}

module.exports = socksForSale;
