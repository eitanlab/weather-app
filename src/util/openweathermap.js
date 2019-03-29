
const apiKey = '5aef5e72f309e444e44ffdcd82c274f9';

const OpenWeatherMap = {
    FetchByCityId(cityId) {
        return fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&cnt=5&APPID=${apiKey}`)
        .then( response => {
                return response.json();
            })
        .then( jsonResponse => {
            if(jsonResponse) {
               //console.log(jsonResponse);
               return jsonResponse.list.map( item => {
                   //console.log('Dentro del map de fetch' + item);
                   return {
                       date: item.dt,
                       iconId: item.weather.icon,
                       windSpeed: item.wind.speed,
                       description: item.weather.description,
                       clouds: item.clouds.all,
                       pressure: item.main.pressure,
                       humidity: item.main.humidity,
                       tempMin: Math.round(item.main.temp_min * 10 ) / 10,
                       tempMax: Math.round(item.main.temp_max * 10 ) / 10
                   }
               });
            }
        });
    }
}

export default OpenWeatherMap;