'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _MeetUp = require('../controllers/MeetUp');

var _MeetUp2 = _interopRequireDefault(_MeetUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/meetups', _MeetUp2.default.create).get('/meetups', _MeetUp2.default.getMeetUps).get('/meetups/:id', _MeetUp2.default.getMeetUp).get('/meetups/upcoming/', _MeetUp2.default.getUpcomingMeetUps).post('/meetups/:id/rsvp', _MeetUp2.default.postRsvp);

exports.default = router;