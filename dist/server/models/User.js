"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
	function User() {
		_classCallCheck(this, User);

		this.users = [];
		this.postedUsers = [];
	}

	_createClass(User, [{
		key: "signUp",
		value: function signUp(data) {
			var user = {
				id: this.users.length + 1,
				firstname: data.firstname,
				lastname: data.lastname,
				othername: data.othername,
				email: data.email,
				phonenumber: data.phonenumber,
				username: data.username,
				registered: new Date(),
				isAdmin: data.isAdmin
			};
			var postedUser = {
				id: user.id,
				firstname: user.firstname,
				lastname: user.lastname,
				othername: user.othername,
				email: user.email,
				phonenumber: user.phonenumber,
				isAdmin: user.isAdmin
			};
			this.users.push(user);
			this.postedUsers.push(postedUser);
			return postedUser;
		}
	}, {
		key: "getUser",
		value: function getUser(id) {
			var user = this.users.find(function (usr) {
				return usr.id === parseInt(id, 10);
			});
			return user;
		}
	}, {
		key: "getUsers",
		value: function getUsers() {
			return this.postedUsers;
		}
	}]);

	return User;
}();

exports.default = new User();