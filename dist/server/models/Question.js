"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Question = function () {
	function Question() {
		_classCallCheck(this, Question);

		this.questions = [];
		this.postedQuestions = [];
		this.postedQuestionsWithId = [];
	}

	_createClass(Question, [{
		key: "postQuestion",
		value: function postQuestion(data) {
			var question = {
				id: this.questions.length + 1,
				createdOn: new Date(),
				createdBy: data.createdBy,
				meetup: data.meetup,
				title: data.title,
				body: data.body,
				votes: 0
			};
			var postedQuestion = {
				user: question.createdBy,
				meetup: question.meetup,
				title: question.title,
				body: question.body
			};
			var postedQuestionWithId = {
				id: question.id,
				user: question.createdBy,
				meetup: question.meetup,
				title: question.title,
				body: question.body,
				votes: 0
			};
			this.questions.push(question);
			this.postedQuestions.push(postedQuestion);
			this.postedQuestionsWithId.push(postedQuestionWithId);
			return postedQuestion;
		}
	}, {
		key: "getQuestion",
		value: function getQuestion(id) {
			var question = this.questions.find(function (q) {
				return q.id === parseInt(id, 10);
			});
			if (question) {
				return {
					user: question.createdBy,
					meetup: question.meetup,
					title: question.title,
					body: question.body
				};
			}
		}
	}, {
		key: "getQuestions",
		value: function getQuestions() {
			return this.postedQuestionsWithId;
		}
	}, {
		key: "upvote",
		value: function upvote(id) {
			var question = this.questions.find(function (q) {
				return q.id === parseInt(id, 10);
			});
			if (!hasDownvoted && voteCount <= 0) {
				question.votes += 1;
				voteCount += 1;
				hasUpvoted = true;
			}
			return {
				meetup: question.meetup,
				title: question.title,
				body: question.body,
				votes: question.votes
			};
		}
	}, {
		key: "downvote",
		value: function downvote(id) {
			var question = this.questions.find(function (q) {
				return q.id === parseInt(id, 10);
			});
			if (!hasUpvoted && voteCount <= 0 && question.votes > 0) {
				question.votes -= 1;
				voteCount += 1;
				hasDownvoted = true;
			}
			return {
				meetup: question.meetup,
				title: question.title,
				body: question.body,
				votes: question.votes
			};
		}
	}]);

	return Question;
}();

var voteCount = 0;
var hasUpvoted = false;
var hasDownvoted = false;

exports.default = new Question();