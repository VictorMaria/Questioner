var should = require('chai').should(),
expect = require('chai').expect,
supertest = require('supertest')
api = supertest('http://localhost:3000');

describe ('User', function(){
// The before hook tests the function for user creation by sending input to it's endpoint
	before(function(done){
		let user1 
		let users = [user1]
    	api.post('/api/v1/users')
    	.set('Accept', 'application/json')
    	.send({
      		firstname: "John",
      		lastname: "Greer",
      		othername: "JG",
      		email: "jg@samaritan.com",
      		phonenumber: "0808945956",
      		username: "jg",
      		isAdmin: "yes"
    	})
    	.expect('Content-Type', /json/)
    	.expect(201)
    	.end(function (err, res) {
      	user1 = res.body;
    	});
		done()
  });
 // Tests for success response
 	it('should return a 200 response', function(done) {
    	api.get('/api/v1/users/1')
    	.set('Accept', 'application/json')
    	.expect(200,done);
  	});

// Tests for an object with key-value pairs when fetching a specific user
	it('should be an object with keys and values', function(done) {
    	api.get('/api/v1/users/1')
    	.set('Accept', 'application/json')
    	.expect(200)
    	.end(function(err, res) {
	  	expect(res.body.data[0]).to.have.property("id");
      	expect(res.body.data[0].id).to.not.equal(null);
      	expect(res.body.data[0]).to.have.property("firstname");
      	expect(res.body.data[0].firstname).to.not.equal(null);
      	expect(res.body.data[0]).to.have.property("lastname");
      	expect(res.body.data[0].lastname).to.not.equal(null);
      	expect(res.body.data[0]).to.have.property("othername");
      	expect(res.body.data[0].othername).to.not.equal(null);
      	expect(res.body.data[0]).to.have.property("email");
      	expect(res.body.data[0].email).to.not.equal(null);
      	expect(res.body.data[0]).to.have.property("phonenumber");
      	expect(res.body.data[0].phonenumber).to.not.equal(null);
      	expect(res.body.data[0]).to.have.property("username");
      	expect(res.body.data[0].username).to.not.equal(null);
      	expect(res.body.data[0]).to.have.property("isAdmin");
      	expect(res.body.data[0].isAdmin).to.not.equal(null);
		done();
      });
});
  
// Tests the endpoint for fetching all users created  
  it('getUsers() should return a 200 response', function(done) {
    api.get('/api/v1/users')
		.set('Accept', 'application/json')
    	.expect(200, done);
  });
});       