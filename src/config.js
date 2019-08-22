require('dotenv').config();


const owm = {
  token: process.env.OWM_TOKEN,
  baseurl: 'http://api.openweathermap.org/data/2.5',
  lang: process.env.OWM_LANG,
  units: process.env.OWM_UNITS,
};


const database = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};


const telegram = {
  token: process.env.TELEGRAM_TOKEN,
};


const config = {
  owm,
  telegram,
  database,
};


export default config;
