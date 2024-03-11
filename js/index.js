////Task 1
const car = {
    manufacturer: 'Kia',
    model:'Rio',
    year: 2022,
    averageSpeed: 80
}
function carInfo(auto){
    console.log('Производитель: ' + auto.manufacturer);
    console.log('Модель: ' + auto.model);
    console.log('Год выпуска: ' + auto.year);
    console.log("Средняя скорость: " + auto.averageSpeed + " км/ч");
}

function calculateTravelTime(auto, distance) {
    const hours = distance / auto.averageSpeed;
    const restTime = Math.floor(hours / 4); 
    const totalHours = hours + restTime; 
    return totalHours;
}
carInfo(car)
const distance = 1500

const resultTime = calculateTravelTime(car,distance)
console.log("Для преодоления расстояния " + distance + " км потребуется " + resultTime + " часов");


///Task 2
const fraction = {
    numerator: 0,
    denominator: 1
};

// Функция для сложения двух дробей
function addFractions(fraction1, fraction2) {
    const result = {
        numerator: fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator,
        denominator: fraction1.denominator * fraction2.denominator
    };
    simplifyFraction(result);
    return result;
}

// Функция для вычитания одной дроби из другой
function subtractFractions(fraction1, fraction2) {
    const result = {
        numerator: fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator,
        denominator: fraction1.denominator * fraction2.denominator
    };
    simplifyFraction(result);
    return result;
}

// Функция для умножения двух дробей
function multiplyFractions(fraction1, fraction2) {
    const result = {
        numerator: fraction1.numerator * fraction2.numerator,
        denominator: fraction1.denominator * fraction2.denominator
    };
    simplifyFraction(result);
    return result;
}

// Функция для деления одной дроби на другую
function divideFractions(fraction1, fraction2) {
    const result = {
        numerator: fraction1.numerator * fraction2.denominator,
        denominator: fraction1.denominator * fraction2.numerator
    };
    simplifyFraction(result);
    return result;
}


function simplifyFraction(fraction) {
    const res = greatestCommonDivisor(fraction.numerator, fraction.denominator);
    fraction.numerator /= res;
    fraction.denominator /= res;
}

function greatestCommonDivisor(a, b) {
    if (b === 0) {
        return a;
    }
    return greatestCommonDivisor(b, a % b);
}


const fraction1 = { numerator: 2, denominator: 4 };
const fraction2 = { numerator: 3, denominator: 4 };

console.log("Сложение:", addFractions(fraction1, fraction2));
console.log("Вычитание:", subtractFractions(fraction1, fraction2));
console.log("Умножение:", multiplyFractions(fraction1, fraction2));
console.log("Деление:", divideFractions(fraction1, fraction2));
