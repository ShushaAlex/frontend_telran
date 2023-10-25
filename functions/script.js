// Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
const getSmallestNum = (a, b) => a < b ? a : b;

// Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
const getEvenRange = (a, b) => {
  let startNum;
  let endNum;
  if (a < b) {
    startNum = a;
    endNum = b;
  } else {
    startNum = b;
    endNum = a;
  }
  for (let i = startNum; i <= endNum; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
}
}

//Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
const power = (a, b = 2) => a ** b;

// Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
const getNatNumSum = n => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
const getOddEvenSum = (n, m) => {
  let evenSum = 0;
  let oddSum = 0;
  let startNum;
  let endNum;
  if (n < m) {
      startNum = n;
      endNum = m;
    } else {
      startNum = m;
      endNum = n;
    }
  for (let i = startNum; i <= endNum; i++) {
      if (i % 2 === 0) {
        evenSum += i;
      } else {
        oddSum += i;
      }
  }
  console.log(`
  sum of even numbers is ${evenSum},
  sum of odd numbers is ${oddSum}`)
}

// Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. Пример: [ 'one', 'two', 'three' ] => 'three'
const getLongestStr = arr => {
  if (arr.length === 0) {
      return null;
  }
  let longestStr = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let currentStr = arr[i];
    if (currentStr.length > longestStr.length) {
      longestStr = currentStr;
    }
  }
  console.log(longestStr);
}