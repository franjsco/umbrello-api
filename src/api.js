import axios from 'axios';
import config from './config';
import logger from './logger';
import citySchema from './db';


export const getCurrentWeatherById = (cityId) => (
  axios.get(`${config.owm.baseurl}/weather`, {
    params: {
      appid: config.owm.token,
      id: cityId,
      units: config.owm.units,
      lang: config.owm.lang,
    },
  })
    .then((res) => {
      const { data } = res;

      const currentWeather = {
        city: `${data.name}, ${data.sys.country} `,
        date: new Date(data.dt * 1000).toISOString(),
        temperature: data.main.temp,
        humidity: data.main.humidity,
        rain_flg: Object.prototype.hasOwnProperty.call(data, 'rain') ? 'Y' : 'N',
      };

      return currentWeather;
    })
    .catch((error) => {
      const { status } = error.response;
      logger.error(`getCurrentWeatherById (cityId=${cityId}) - Status:${status}`);
      throw new Error(status);
    })
);


export const getForecastWeatherById = (cityId) => (
  axios.get(`${config.owm.baseurl}/forecast`, {
    params: {
      appid: config.owm.token,
      id: cityId,
      units: config.owm.units,
      lang: config.owm.lang,
    },
  })
    .then((res) => {
      const { data } = res;
      let date = new Date(Date.now());
      date = date.toISOString().substr(0, 10);

      const forecastList = data.list
        .filter((dato) => new Date(dato.dt * 1000).toISOString().substr(0, 10) === date)
        .map((dato) => ({
          date: new Date(dato.dt * 1000).toISOString(),
          temperature: dato.main.temp,
          humidity: dato.main.humidity,
          wind_speed: dato.wind.speed,
          rain_flag: Object.prototype.hasOwnProperty.call(dato, 'rain') ? 'Y' : 'N',
        }
        ));


      const forecastWeather = {
        city: `${data.city.name}, ${data.city.country}`,
        rain: forecastList.some((e) => e.rain_flag === 'Y') ? 'Y' : 'N',
        list: forecastList,
      };

      return forecastWeather;
    })
    .catch((error) => {
      const { status } = error.response;
      logger.error(`getCurrentWeatherById (cityId=${cityId}) - Status:${status}`);
      throw new Error(status);
    })
);

export const getCityIdByName = (cityName) => (
  new Promise((resolve, reject) => {
    citySchema.find({ name: new RegExp(`^${cityName}`, 'i') }, {
      _id: 0, name: 1, country: 1, id: 1,
    }, (err, cities) => {
      if (err) {
        reject(err);
      }

      resolve(cities);
    }).sort({ name: 1 }).limit(5);
  })
);
