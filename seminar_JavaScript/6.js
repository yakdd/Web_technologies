// Функция getMaxEvenElement принимает массив с целыми числами, необходимо 
// реализовать функцию так, чтобы она возвращала значение большего элемента массива, 
// который записан в четном индексе включая 0. 
function getMaxEvenElement(arr) {
    let maxElem = arr[0];
    for (let i = 2; i < arr.length; i += 2) {
        if (arr[i] > maxElem) {
            maxElem = arr[i]
        };
    }
    return maxElem;
}

function getMaxEvenElement_unpacking() {
    const newArr = arr.filter(function (_, i) { return i % 2 == 0; });
    return math.max(...newArr);     // ... распаковка массива для функции math.max

}

function getMaxEvenElement_lambda(arr) {
    return Math.max(...arr.filter((_, i) => i % 2 == 0));   // лямбда функция
}

console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31
