function socksForSale() {
  const socksArr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
  let pairs = 0;
  for (let i = 0; i < socksArr.length; i++) {
    for (let j = i + 1; j < socksArr.length; j++) {
      if (socksArr[i] === socksArr[j]) pairs++;
    }
  }

  return pairs;
}

module.exports = socksForSale;
