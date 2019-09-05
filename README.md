# umbrello-api

Rest API for umbrello-bot

**Technologies**:

- Node.js
- express
- mongodb

## Installation

1. Install `Node.js` and `npm`.
2. Install `mongodb`.
3. Clone this repository.
4. Install dependencies with `npm install`
5. Create env file or set environment variables. (read "Environment variables" paragraph)
6. Build with `npm run build`.
7. Start the server with `npm run serve`.


### Environment Variables.
```
OWM_TOKEN=your-open-weather-map-token-api
OWM_LANG=en
OWM_UNITS=metric

TELEGRAM_TOKEN=your-telegram-bot-token

DB_HOST=mongodb://host:port/db
DB_USER=user
DB_PASSWORD=password
```

## License
GPLv3

---
Made with ❤️ by Francesco Esposito ([@frsposito](https://github.com/frsposito))
