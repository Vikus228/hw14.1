const cities = ['Москва', 'Санкт-Петербург', 'Нью-Йорк', 'Токио'];
let temperatures = [];
for (let city of cities) {
    const degree =  Number(prompt(`Температура в ${city}`));
    temperatures.push(degree);
}

const list = document.getElementById('list')

for (let i = 0; i < cities.length; i++) {
    const li = document.createElement('li');
    li.textContent = `${cities[i]}: ${temperatures[i]}`;
    list.appendChild(li);
}

let min = 100;
let max = -100;

for (let temperature of temperatures) {
    if (Number(temperature) < min) {
        min = Number(temperature);
    }
}
const tempMin = document.createElement('li');
tempMin.textContent = `Минимальная темпуратура: ${min}`;
list.appendChild(tempMin);

for (let t of temperatures){
    if (Number(t) > max) {
        max = Number(t);
    }
}

const tempMax = document.createElement('li');
tempMax.textContent = `Максимальная темпуратура: ${max}`;
list.appendChild(tempMax);
