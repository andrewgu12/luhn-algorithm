// Validate with Luhn's algorithm: https://www.geeksforgeeks.org/luhn-algorithm/
export const calculateValidCard = (creditCardNumber: string): boolean => {
  let sum = 0;
  for (let i = 0; i < creditCardNumber.length; i++) {
    const indexToGrab = creditCardNumber.length - 1 - i;
    let numberAtIndex = parseInt(creditCardNumber[indexToGrab]);

    if (i % 2 === 1) {
      numberAtIndex = numberAtIndex * 2;
      if (numberAtIndex >= 10) {
        const tensValue = Math.floor(numberAtIndex / 10);
        const onesValue = numberAtIndex - tensValue * 10;
        numberAtIndex = tensValue + onesValue;
      }
    }

    sum += numberAtIndex;
  }

  return sum % 10 === 0;
};
