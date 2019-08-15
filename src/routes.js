import express from 'express';
import { getCurrentWeatherById, getForecastWeatherById } from './apiOWM';

const router = express.Router();


router.get('/current', (req, res) => {
  getCurrentWeatherById(req.query.cityId)
    .then((json) => res.send(json))
    .catch((err) => {
      const code = err.message;
      if (code) {
        res.status(code).send();
      } else {
        res.status(500).send(err.toString());
      }
    });
});


router.get('/forecast', (req, res) => {
  getForecastWeatherById(req.query.cityId)
    .then((json) => res.send(json))
    .catch((err) => {
      const code = err.message;

      if (code) {
        res.status(code).send();
      } else {
        res.status(500).send(err.toString());
      }
    });
});


export default router;
