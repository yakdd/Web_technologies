function tempTranslate(t) {
    // перевод температуры из шкалы Цельсия в шкалу Фаренгета
    const flong = (9 / 5) * t + 32;
    f = +flong.toFixed(1);
    return t, f
}

const tempC = prompt('Введите температуру в градусах Цельсия');
const tempF = tempTranslate(tempC);
alert(`Цельсий: ${tempC}, Фаренгейт: ${tempF}`);
