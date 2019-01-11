'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Question = require('../controllers/Question');

var _Question2 = _interopRequireDefault(_Question);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
	return res.send('Welcome to Questioner');
});
router.post('/questions', _Question2.default.postQuestion).get('/questions', _Question2.default.getQuestions).get('/questions/:id', _Question2.default.getQuestion).patch('/questions/:id/upvote', _Question2.default.upvote).patch('/questions/:id/downvote', _Question2.default.downvote);

exports.default = router;