/**
 * Express application configuration
 */
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const path = require('path');

require('./config/db');
require('./config/passport');

const sessionConfig = require('./config/session');

const app = express();

app.use(express.static('public'));

/* ---------- VIEW ENGINE ---------- */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* ---------- MIDDLEWARE ---------- */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

/* ---------- SESSION ---------- */
app.use(session(sessionConfig));

/* ---------- USER ---------- */
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

/* ---------- PASSPORT ---------- */
app.use(passport.initialize());
app.use(passport.session());

/* ---------- LOCALS ---------- */
app.use((req, res, next) => {
  res.locals.currentUser = req.user || null;
  next();
});

/* ---------- ROUTES ---------- */
app.use('/', require('./routes/index.routes'));
app.use('/auth', require('./routes/auth.routes'));

/* ---------- ERROR HANDLER ---------- */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { error: err });
});

/* ---------- HOOK ROUTES INTO APP ---------- */
app.use('/books', require('./routes/books.routes'));
app.use('/reading-list', require('./routes/readingList.routes'));
app.use('/reviews', require('./routes/reviews.routes'));

module.exports = app;
