require('dotenv').config();


const owm = {
  token: process.env.OWM_TOKEN,
  baseurl: 'http://api.openweathermap.org/data/2.5',
  lang: process.env.OWM_LANG,
  units: process.env.OWM_UNITS,
};


const telegram = {
  token: process.env.TELEGRAM_TOKEN,
};


const config = {
  owm,
  telegram,
};


export default config;
