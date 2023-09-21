const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () =>) {

    const APIKey = '052323138f49495a1d92998185df9033';
    const city = document.querySelector('.search-box input').value;
    
    if (city === '')
    return;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}')
    .then(response => response.json())
    .then(json => {
        if (json.cod === '404')  {
            container.style.heigth = '400px';
            weatherBox.style.display ='none';
            weatherDetails.style.display = 'none';
            error404.style.display='block';
            error404.classList.add('fadeIn');
            return;
    }

    error404.style.display = 'none';
    error404.classList.remove('fadeIn');

    const image = document.querySelector('.weather-box img');
    const temprature = document.querySelector('.weather-box .temperature');
    const description = document.querySelector('.weather-box .description');
    const humidity = document.querySelector('.weather-details .humidity span');
    const wind = document.querySelector('.weather-details .wind span');

    switch (json.weather[0].main) {
        case 'Clear':
        imagem.src = 'images/clear.png';
        break;
         
        case 'Rain':
        imagem.src = 'images/rain.png';
         break;

        case 'Snow':
        imagem.src = 'images/snow.png';
        break;

        case 'Cloud':
        imagem.src = 'images/cloud.png';
        break;
        
        case 'Haze':
        imagem.src = 'images/mist.png';
        break;
        
        default:
            imagem.src = '';
    }
        temperature.innerHTML = '${parseInt(json.main.temp')<span>°C</span>`;
        description.innerHtML = '${json.weather[0].descripition}';
        humidity.innerHTML = '${json.main.humidity}%';
        wind.innerHTML = '${perseInt(json.wind.speed)}Km/h';

        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.heigth = '590px';


    });    
   
});
