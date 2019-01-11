'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MeetUp = require('../models/MeetUp');

var _MeetUp2 = _interopRequireDefault(_MeetUp);

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MeetUp = {
	create: function create(req, res) {
		var _Joi$object;

		var schema = _joi2.default.object((_Joi$object = {
			topic: _joi2.default.string().required(),
			location: _joi2.default.string().required(),
			images: _joi2.default.array()
		}, _defineProperty(_Joi$object, 'topic', _joi2.default.string().required()), _defineProperty(_Joi$object, 'happeningOn', _joi2.default.string().regex(/^\d{2}-\d{2}-\d{4}$/).required()), _defineProperty(_Joi$object, 'tags', _joi2.default.array().required()), _Joi$object));
		var result = _joi2.default.validate(req.body, schema);
		if (result.error) {
			res.writeHead(400, { 'Content-Type': 'Application/json' });
			res.end(JSON.stringify({ status: 400, error: result.error.details[0].message }));
		} else {
			var meetUp = _MeetUp2.default.create(req.body);
			res.writeHead(201, { 'Content-Type': 'Application/json' });
			res.end(JSON.stringify({ status: 201, data: [meetUp] }));
		}
	},
	getMeetUps: function getMeetUps(req, res) {
		var meetUps = _MeetUp2.default.getMeetUps();
		res.writeHead(200, { 'Content-Type': 'Application/json' });
		res.end(JSON.stringify({ status: 200, data: meetUps }));
	},
	getMeetUp: function getMeetUp(req, res) {
		var meetUp = _MeetUp2.default.getMeetUp(req.params.id);
		if (!meetUp) {
			res.writeHead(404, { 'Content-Type': 'Application/json' });
			res.end(JSON.stringify({ status: 404, error: 'Meet Up not found' }));
		} else {
			res.writeHead(200, { 'Content-Type': 'Application/json' });
			res.end(JSON.stringify({ status: 200, data: [meetUp] }));
		}
	},
	getUpcomingMeetUps: function getUpcomingMeetUps(req, res) {
		var upcomingMeetUps = _MeetUp2.default.getUpcomingMeetUps();
		res.writeHead(200, { 'Content-Type': 'Application/json' });
		res.end(JSON.stringify({ status: 200, data: upcomingMeetUps }));
	},
	postRsvp: function postRsvp(req, res) {
		var meetUp = _MeetUp2.default.getMeetUp(req.params.id);
		if (!meetUp) {
			res.writeHead(404, { 'Content-Type': 'Application/json' });
			res.end(JSON.stringify({ status: 404, error: 'Meet-up not found, cannot respond' }));
		} else {
			var rsvp = _MeetUp2.default.postRsvp(req.params.id, req.body);
			res.writeHead(200, { 'Content-Type': 'Application/json' });
			res.end(JSON.stringify({ status: 200, data: [rsvp] }));
		}
	}
};

exports.default = MeetUp;