"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MeetUp = function () {
	function MeetUp() {
		_classCallCheck(this, MeetUp);

		this.meetUps = [];
		this.postedMeetUps = [];
	}

	_createClass(MeetUp, [{
		key: "create",
		value: function create(data) {
			var meetUp = {
				id: this.meetUps.length + 1,
				createdOn: new Date(),
				location: data.location,
				images: data.images,
				topic: data.topic,
				happeningOn: data.happeningOn,
				tags: data.tags
			};
			var postedMeetUp = {
				id: meetUp.id,
				location: meetUp.location,
				images: meetUp.images,
				topic: meetUp.topic,
				happeningOn: meetUp.happeningOn,
				tags: meetUp.tags
			};
			this.meetUps.push(meetUp);
			this.postedMeetUps.push(postedMeetUp);
			return postedMeetUp;
		}
	}, {
		key: "getMeetUps",
		value: function getMeetUps() {
			return this.postedMeetUps;
		}
	}, {
		key: "getMeetUp",
		value: function getMeetUp(id) {
			var meetUp = this.meetUps.find(function (meetup) {
				return meetup.id === parseInt(id, 10);
			});
			if (meetUp) {
				return {
					id: meetUp.id,
					location: meetUp.location,
					images: meetUp.images,
					topic: meetUp.topic,
					happeningOn: meetUp.happeningOn,
					tags: meetUp.tags
				};
			}
		}
	}, {
		key: "getUpcomingMeetUps",
		value: function getUpcomingMeetUps() {
			var upcomingMeetUps = this.postedMeetUps.sort(function (first, second) {
				var firstHappeningOn = parseInt(first.happeningOn, 10);
				var secondHappeningOn = parseInt(second.happeningOn, 10);
				return firstHappeningOn - secondHappeningOn;
			});
		}
	}, {
		key: "postRsvp",
		value: function postRsvp(id, data) {
			var meetUp = this.meetUps.find(function (meetup) {
				return meetup.id === parseInt(id, 10);
			});
			return {
				meetup: meetUp.id,
				topic: meetUp.topic,
				status: data.status
			};
		}
	}]);

	return MeetUp;
}();

exports.default = new MeetUp();