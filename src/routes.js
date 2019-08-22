import express from 'express';
import { getCurrentWeatherById, getForecastWeatherById, getCityIdByName } from './api';

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


router.get('/search', (req, res) => {
  getCityIdByName(req.query.city)
    .then((obj) => res.json(obj))
    .catch((err) => res.status(500).send(err));
});

export default router;
