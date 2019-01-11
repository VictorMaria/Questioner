var should = require('chai').should(),
expect = require('chai').expect,
supertest = require('supertest')
api = supertest('http://localhost:3000');

describe ('Question', function(){
// The before hook tests the postQuestion function by sending input to it's endpoint
	before(function(done){
		let question1 
		let questions = [question1]
    	api.post('/api/v1/questions')
    	.set('Accept', 'application/json')
    	.send({
    		createdBy: 1,
    		meetup: 1,
      		title: "Framework and module",
      		body: "Difference between a framework and a module"
    	})
    	.expect('Content-Type', /json/)
    	.expect(201)
    	.end(function (err, res) {
      	question1 = res.body;
    	});
		done()
  });

// Tests for success response
 	it('should return a 200 response', function(done) {
    	api.get('/api/v1/questions/1')
    	.set('Accept', 'application/json')
    	.expect(200,done);
  	});

// Tests for an object with key-value pairs when fetching a specific question
	it('should be an object with keys and values', function(done) {
    	api.get('/api/v1/questions/1')
    	.set('Accept', 'application/json')
    	.expect(200)
    	.end(function(err, res) {
	  	expect(res.body.data[0]).to.have.property("user");
      	expect(res.body.data[0].user).to.not.equal(null);
      	expect(res.body.data[0]).to.have.property("meetup");
      	expect(res.body.data[0].meetup).to.not.equal(null);
      	expect(res.body.data[0]).to.have.property("title");
      	expect(res.body.data[0].title).to.not.equal(null);
      	expect(res.body.data[0]).to.have.property("body");
      	expect(res.body.data[0].body).to.not.equal(null);
		done();
      });
});
  
// Tests the endpoint for fetching all questions posted  
  it('getQuestions() should return a 200 response', function(done) {
    api.get('/api/v1/questions')
		.set('Accept', 'application/json')
    	.expect(200, done);
  });
});      
