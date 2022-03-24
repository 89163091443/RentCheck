const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const FileStore = require('session-file-store')(session);
const hbs = require('hbs');

// Здесь require ручек

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(process.env.PWD, 'views', 'partials'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const sessionConfig = {
  name: 'cookieName',
  secret: 'keyboard cat',
  store: new FileStore(),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1e3 * 86400,
  },
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionConfig));

// Здесь мидлвары на ручки

app.use((req, res) => {
  res.status(404).json('Запрашиваемой страницы не существует!');
});
app.listen(PORT, () => {
  console.log('Server started on PORT:', PORT);
});
