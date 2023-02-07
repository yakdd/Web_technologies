// Задача 2: Получить от пользователя два числа и вывести в диалоговое окно сумму значений,
// которые ввел пользователь, вывод должен выглядеть так (пример): Результат сложения чисел 5 и 2 равен 7.

const num1 = Number.parseFloat(prompt('Введите первое число'));
const num2 = +prompt('Введите второе число');
// +prompt унарный плюс здесь действует как Number.parseFloat
alert(`Результат сложения чисел ${num1} и ${num2} равен ${num1 + num2}.`);
// кавычки - буква ё в английской раскладке

// Var_2 ----------------------------
function SumNumbers(num1, num2) {
    return num1 + num2;
}
const number1 = Number.parseFloat(prompt('Введите первое число'));
const number2 = +prompt('Введите второе число');
alert(`Результат сложения чисел ${number1} и ${number2} равен ${SumNumbers(number1, number2)}.`);
