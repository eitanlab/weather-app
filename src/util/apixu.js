
const apiKey = 'b50cd3e030db4c5a833192516190104';

const Apixu = {
    toDayOfWeek(dateString) {
        const days = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
        
        const a = new Date(dateString);
        //console.log('1   ' + dateString);
        //console.log('2  ' + a);
        const diaMes = `${days[a.getDay()]} ${a.getDate()}`
        return diaMes;
    },
    FetchByCityId(cityId) {
        return fetch(`https://api.apixu.com/v1/forecast.json?key=${apiKey}&q=auto:ip&days=5&lang=es`)
        .then( response => {
                return response.json();
            })
        .then( jsonResponse => {
            if(jsonResponse) {
               //console.log(jsonResponse);
               return jsonResponse.forecast.forecastday.map( (item,i) => {
                   //console.log('Dentro del map de fetch' + item);
                   return {
                       date: this.toDayOfWeek(item.date),
                       iconId: item.day.condition.icon,
                       windSpeed: item.day.maxwind_kph,
                       description: item.day.condition.text,
                       humidity: item.day.avghumidity,
                       tempMin: Math.round(item.day.mintemp_c * 10 ) / 10,
                       tempMax: Math.round(item.day.maxtemp_c * 10 ) / 10
                   }
               });
            }
        });
    }
}

export default Apixu;