'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = {
	signUp: function signUp(req, res) {
		var schema = _joi2.default.object({
			firstname: _joi2.default.string().required(),
			lastname: _joi2.default.string().required(),
			othername: _joi2.default.string().required(),
			email: _joi2.default.string().email().required(),
			phonenumber: _joi2.default.string().required(),
			username: _joi2.default.string().required(),
			isAdmin: _joi2.default.string().required()
		});
		var result = _joi2.default.validate(req.body, schema);
		if (result.error) {
			res.writeHead(400, { 'Content-Type': 'Application/json' });
			res.end(JSON.stringify({ status: 400, error: result.error.details[0].message }));
		} else {
			var user = _User2.default.signUp(req.body);
			res.writeHead(201, { 'Content-Type': 'Application/json' });
			res.end(JSON.stringify({ status: 201, data: [user] }));
		}
	},
	getUser: function getUser(req, res) {
		var user = _User2.default.getUser(req.params.id);
		if (!user) {
			res.writeHead(404, { 'Content-Type': 'Application/json' });
			res.end(JSON.stringify({ status: 404, error: 'User does not exist' }));
		} else {
			res.writeHead(200, { 'Content-Type': 'Application/json' });
			res.end(JSON.stringify({ status: 200, data: [user] }));
		}
	},
	getUsers: function getUsers(req, res) {
		var users = _User2.default.getUsers();
		res.writeHead(200, { 'Content-Type': 'Application/json' });
		res.end(JSON.stringify({ status: 200, data: users }));
	}
};

exports.default = User;