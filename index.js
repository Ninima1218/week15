let cities = ['Tbilisi', 'Gori', 'Batumi', 'Bakuriani', 'Kutaisi'];
let temperatures = [];
const temperatureList = document.createElement('ul');
temperatureList.id = 'temperatureList';

cities.forEach(city => {
    const listItem = document.createElement('li');
    listItem.textContent = `Температура в ${city}: 0 градусов`;
    temperatureList.appendChild(listItem);
});
    
document.body.appendChild(temperatureList);

cities.forEach((city, index) => {
    let temperature = prompt(`Введите температуру в городе ${city}:`);
    temperature = Number(temperature); 
    const listItem = temperatureList.children[index];
    listItem.textContent = `Температура в ${city}: ${temperature} градусов`;
});

let minTemperature = Math.min(...temperatures);
let maxTemperature = Math.max(...temperatures);

const minTemperatureItem = document.createElement('li');
minTemperatureItem.textContent = `Минимальная температура: ${minTemperature} градусов`;

const maxTemperatureItem = document.createElement('li');
maxTemperatureItem.textContent = `Максимальная температура: ${maxTemperature} градусов`;

temperatureList.appendChild(minTemperatureItem);
temperatureList.appendChild(maxTemperatureItem);