'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Home = require('./server/routes/Home');

var _Home2 = _interopRequireDefault(_Home);

var _MeetUp = require('./server/routes/MeetUp');

var _MeetUp2 = _interopRequireDefault(_MeetUp);

var _Question = require('./server/routes/Question');

var _Question2 = _interopRequireDefault(_Question);

var _User = require('./server/routes/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import MeetUp from './src/controllers/MeetUp';
//import User from './src/controllers/User';

var app = (0, _express2.default)();
app.use(_express2.default.json());

app.use('/', _Home2.default);
app.use('/api/v1', _MeetUp2.default);
app.use('/api/v1', _Question2.default);
app.use('/api/v1', _User2.default);

var port = process.env.PORT || 3000;
app.listen(port, function () {
  return console.log('Questioner listens on port ' + port);
});