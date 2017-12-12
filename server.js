const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser'),
      mongoose = require('mongoose'),
      session = require('express-session'),
      index = require('./server/routes/index'),
      visitors = require('./server/routes/visitors')


require('dotenv').load();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI);

let app = express()


app.use(express.static(path.join(__dirname, './dist')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
  secret: 'test-secret',
  resave: false,
  saveUninitialized: true,
  cookie: { httpOnly: true, maxAge: 2495000000 }
}))

app.use(cookieParser('test-secret'))

app.use('/visitors', visitors)
app.use('/', index)

const port =  process.env.PORT || 4000;
app.listen(port, () => console.log('Running on localhost:', port))
