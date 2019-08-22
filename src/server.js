import express from 'express';
import routes from './routes';
import logger from './logger';

const app = express();

app.use('/api/weather', routes);

app.get('/', (req, res) => {
  res.send('umbrello-api');
});


app.get('*', (req, res) => {
  logger.error(`404 ${req.path}`);
  res.status(404).send();
});

app.listen(3000, () => {
  logger.info('Server started');
});


process
  .on('unhandledRejection', (reason) => logger.error(reason))
  .on('uncaughtException', (err) => {
    logger.error(err);
    process.exit(1);
  })
  .on('SIGINT', () => {
    logger.info('Server stopped');
    process.exit(0);
  });
