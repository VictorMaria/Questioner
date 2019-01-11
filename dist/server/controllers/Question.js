'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Question = require('../models/Question');

var _Question2 = _interopRequireDefault(_Question);

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Question = {
	postQuestion: function postQuestion(req, res) {
		var schema = _joi2.default.object({
			createdBy: _joi2.default.number().integer().required(),
			meetup: _joi2.default.number().integer().required(),
			title: _joi2.default.string().required(),
			body: _joi2.default.string().required()
		});
		var result = _joi2.default.validate(req.body, schema);
		if (result.error) {
			res.writeHead(400, { 'Content-Type': 'Application/json' });
			res.end(JSON.stringify({ status: 400, error: result.error.details[0].message }));
		} else {
			var question = _Question2.default.postQuestion(req.body);
			res.writeHead(201, { 'Content-Type': 'Application/json' });
			res.end(JSON.stringify({ status: 201, data: [question] }));
		}
	},
	getQuestion: function getQuestion(req, res) {
		var question = _Question2.default.getQuestion(req.params.id);
		if (!question) {
			res.writeHead(404, { 'Content-Type': 'Application/json' });
			res.end(JSON.stringify({ status: 404, error: 'Question not found' }));
		} else {
			res.writeHead(200, { 'Content-Type': 'Application/json' });
			res.end(JSON.stringify({ status: 200, data: [question] }));
		}
	},
	getQuestions: function getQuestions(req, res) {
		var questions = _Question2.default.getQuestions();
		res.writeHead(200, { 'Content-Type': 'Application/json' });
		res.end(JSON.stringify({ status: 200, data: questions }));
	},
	upvote: function upvote(req, res) {
		var question = _Question2.default.getQuestion(req.params.id);
		if (!question) {
			res.writeHead(404, { 'Content-Type': 'Application/json' });
			res.end(JSON.stringify({ status: 404, error: 'Question not found, action not recorded' }));
		} else {
			var upvote = _Question2.default.upvote(req.params.id);
			res.writeHead(200, { 'Content-Type': 'Application/json' });
			res.end(JSON.stringify({ status: 200, data: [upvote] }));
		}
	},
	downvote: function downvote(req, res) {
		var question = _Question2.default.getQuestion(req.params.id);
		if (!question) {
			res.writeHead(404, { 'Content-Type': 'Application/json' });
			res.end(JSON.stringify({ status: 404, error: 'Question not found, action not recorded' }));
		} else {
			var downvote = _Question2.default.downvote(req.params.id);
			res.writeHead(200, { 'Content-Type': 'Application/json' });
			res.end(JSON.stringify({ status: 200, data: [downvote] }));
		}
	}
};
exports.default = Question;