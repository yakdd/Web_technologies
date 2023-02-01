function tempTranslate(t) {
    // перевод температуры из шкалы Цельсия в шкалу Фаренгета
    const f = (9 / 5) * t + 32;
    return f;
}

const tempC = Number.parseFloat(prompt('Введите температуру в градусах Цельсия'));
const tempF = tempTranslate(tempC);
alert(`Цельсий: ${tempC}, Фаренгейт: ${tempF.toFixed(1)}`);
