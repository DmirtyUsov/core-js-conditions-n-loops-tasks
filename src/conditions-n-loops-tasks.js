/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b) {
    return a > c ? a : c;
  }
  return b > c ? b : c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const onDiagonal = Math.abs(king.x - queen.x) === Math.abs(king.y - queen.y);
  const onRaw = queen.x === king.x;
  const onColumn = queen.y === king.y;
  return onRaw || onColumn || onDiagonal;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  const isValid = !(a + b <= c || b + c <= a || c + a <= b);
  const isNotZero = !(a === 0 || b === 0 || c === 0);
  return isNotZero && isValid && (a === b || b === c || c === a);
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romans = {
    0: '',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
  };
  const ones = num % 10;
  const tens = num - ones;
  return `${romans[tens]}${romans[ones]}`;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const getWord = (symbol) => {
    let word = '';
    switch (symbol) {
      case '0':
        word = 'zero';
        break;
      case '1':
        word = 'one';
        break;
      case '2':
        word = 'two';
        break;
      case '3':
        word = 'three';
        break;
      case '4':
        word = 'four';
        break;
      case '5':
        word = 'five';
        break;
      case '6':
        word = 'six';
        break;
      case '7':
        word = 'seven';
        break;
      case '8':
        word = 'eight';
        break;
      case '9':
        word = 'nine';
        break;
      case ',':
      case '.':
        word = 'point';
        break;
      case '-':
        word = 'minus';
        break;
      default:
        word = 'unknown';
    }
    return word;
  };

  let index = 0;
  let digit = numberStr[index];
  let result = '';
  while (digit) {
    result += getWord(digit);
    index += 1;
    digit = numberStr[index];
    if (digit) {
      result += ' ';
    }
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let newStr = '';
  for (let idx = str.length - 1; idx >= 0; idx -= 1) {
    newStr += str[idx];
  }
  return str === newStr;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let idx = 0;
  let firstPos = -1;
  let symbol = str[idx];
  while (symbol && firstPos === -1) {
    if (symbol === letter) {
      firstPos = idx;
    }
    idx += 1;
    symbol = str[idx];
  }
  return firstPos;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let result = false;
  let numPart = num;
  while (numPart > 0) {
    if (numPart % 10 === digit) {
      result = true;
      break;
    }
    numPart = Math.floor(numPart / 10);
  }
  return result;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let result = -1;

  const leftStart = 0;
  let leftEnd = 1;
  let leftSum = arr[leftStart];

  let rightStart = leftEnd + 1;
  const rightEnd = arr.length;
  let rightSum = 0;
  for (let idx = rightStart; idx < rightEnd; idx += 1) {
    rightSum += arr[idx];
  }

  if (rightSum === leftSum) {
    result = leftEnd;
  }

  while (rightStart < rightEnd && result === -1) {
    leftSum += arr[leftEnd];
    leftEnd += 1;

    rightSum -= arr[rightStart];
    rightStart = leftEnd + 1;

    if (rightSum === leftSum) {
      result = leftEnd;
    }
  }

  return result;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  let topRow = 0;
  let leftCol = 0;
  let bottomRow = size - 1;
  let rightCol = size - 1;
  let counter = 1;

  for (let row = 0; row < size; row += 1) {
    matrix[row] = [];
  }

  while (topRow <= bottomRow && leftCol <= rightCol) {
    for (let col = leftCol; col <= rightCol; col += 1) {
      matrix[topRow][col] = counter;
      counter += 1;
    }
    topRow += 1;

    for (let row = topRow; row <= bottomRow; row += 1) {
      matrix[row][rightCol] = counter;
      counter += 1;
    }
    rightCol += -1;

    for (let col = rightCol; col >= leftCol; col += -1) {
      matrix[bottomRow][col] = counter;
      counter += 1;
    }
    bottomRow += -1;

    for (let row = bottomRow; row >= topRow; row += -1) {
      matrix[row][leftCol] = counter;
      counter += 1;
    }
    leftCol += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const matrixRef = matrix;
  const matrixInitial = [];
  const size = matrix.length;

  for (let row = 0; row < size; row += 1) {
    matrixInitial[row] = [];
    for (let col = 0; col < size; col += 1) {
      matrixInitial[row][col] = matrix[row][col];
    }
  }

  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      matrixRef[row][col] = matrixInitial[size - 1 - col][row];
    }
  }

  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const arrRef = arr;
  for (let idx = 0; idx < arr.length; idx += 1) {
    for (let inner = 0; inner < idx; inner += 1) {
      if (arrRef[idx] < arrRef[inner]) {
        const temp = arrRef[idx];
        arrRef[idx] = arrRef[inner];
        arrRef[inner] = temp;
      }
    }
  }
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let sensibleIterations = iterations;
  let newStr = str;

  while (sensibleIterations) {
    let end = '';
    let start = '';
    for (let even = 0; even < newStr.length; even += 2) {
      start += newStr[even];
      const odd = even + 1;
      if (odd < newStr.length) {
        end += newStr[odd];
      }
    }
    newStr = `${start}${end}`;
    sensibleIterations += -1;

    if (newStr === str) {
      const iterationsToInitState = iterations - sensibleIterations;
      sensibleIterations %= iterationsToInitState;
    }
  }
  return newStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const TEN = 10;
  const reversedDigits = [];
  let numberRightPart = 0;
  let place = 0;

  while (number !== numberRightPart) {
    const placeIdentifier = TEN ** (place + 1);
    numberRightPart = number % placeIdentifier;
    const digit = Math.floor(numberRightPart / TEN ** place);
    reversedDigits[place] = digit;
    place += 1;
  }

  place = 0;
  let leftDigit;
  let rightDigit;
  const digitsToSort = [];

  while (place < reversedDigits.length - 1) {
    rightDigit = reversedDigits[place];
    digitsToSort[place] = rightDigit;
    place += 1;
    leftDigit = reversedDigits[place];
    if (rightDigit > leftDigit) {
      digitsToSort[place] = leftDigit;
      break;
    }
  }

  sortByAsc(digitsToSort);

  for (let idx = 0; idx < digitsToSort.length; idx += 1) {
    if (leftDigit === digitsToSort[idx]) {
      const nextDigit = digitsToSort[idx + 1];
      if (leftDigit !== nextDigit) {
        rightDigit = nextDigit;
        leftDigit = idx + 1;
        break;
      }
    }
  }

  let newNumberStr = '';
  for (let idx = reversedDigits.length - 1; idx > place; idx += -1) {
    newNumberStr += `${reversedDigits[idx]}`;
  }

  newNumberStr += `${rightDigit}`;

  for (let idx = 0; idx < digitsToSort.length; idx += 1) {
    if (idx !== leftDigit) {
      newNumberStr += `${digitsToSort[idx]}`;
    }
  }

  const newNumber = parseInt(newNumberStr, 10);

  return newNumber;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
