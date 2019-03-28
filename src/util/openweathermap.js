const OpenWeatherMap = {
    search(cityid) {
    return fetch(`api.openweathermap.org/data/2.5/forecast?id=${cityId}`)
        .then( response => {
            return response.json();
        })
        .then( jsonResponse => {
            if(jsonResponse.list) {
               return jsonResponse.list.map( item => {
                   console.log(item);
                   return {
                       date: item.dt,
                       iconId: item.weather.icon,
                       windSpeed: item.wind.speed,
                       description: item.weather.description,
                       nubosidad: item.clouds.all,
                       pressure: item.main.pressure,
                       humidity: item.main.humidity,
                       tempMin: item.main.temp_min,
                       tempMax: item.main.temp_max
                   }
               });
            }
        });
    }
}

export default OpenWeatherMap;