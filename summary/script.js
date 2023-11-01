// Напишите функцию, которая в качестве аргументов получает два числа
// и возвращает массив чисел со значениями от меньшего числа к большему.

const getArrayFromRange = (a, b) => {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    const array = [];
    for (let i = min; i <= max; i++) {
        array.push(i);
    }
    console.log(array);
    return array;
}

getArrayFromRange(8, 3);