// Задача 3: Написать функцию, которая принимает имя пользователя при ее вызове
// и выводит сообщение с приветствием пользователя по имени в консоль.
// Проверить работоспособность функции.
function helloName(name) {
    console.log(`Привет, ${name}`);
}
helloName(prompt('Введите имя'));