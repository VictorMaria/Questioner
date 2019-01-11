'use strict';

var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest');
api = supertest('http://localhost:3000');

describe('MeetUp', function () {
  // Testing createMeetUp function by sending data to its endpoint
  before(function (done) {
    var meetUp1 = void 0;
    var meetUps = [meetUp1];
    api.post('/api/v1/meetups').set('Accept', 'application/json').send({
      location: "Geneva",
      images: ["photo1", "photo2"],
      topic: "Code World",
      happeningOn: "22-05-2019",
      tags: ["graphQL, CORS"]
    }).expect('Content-Type', /json/).expect(201).end(function (err, res) {
      meetUp1 = res.body;
    });
    done();
  });
  // Testing for success response at a specific meetUp's endpoint
  it('should return a 200 response', function (done) {
    api.get('/api/v1/meetups/1').set('Accept', 'Application/json').expect(200, done);
  });
  // Testing for key-value pairs in an object received from a specific meetUp's response
  it('should be an object with keys and values', function (done) {
    api.get('/api/v1/meetups/1').set('Accept', 'application/json').expect(200).end(function (err, res) {
      expect(res.body.data[0]).to.have.property("id");
      expect(res.body.data[0].id).to.not.equal(null);
      expect(res.body.data[0]).to.have.property("topic");
      expect(res.body.data[0].topic).to.not.equal(null);
      expect(res.body.data[0]).to.have.property("location");
      expect(res.body.data[0].location).to.not.equal(null);
      expect(res.body.data[0]).to.have.property("images");
      expect(res.body.data[0].images).to.not.equal(null);
      expect(res.body.data[0]).to.have.property("happeningOn");
      expect(res.body.data[0].happeningOn).to.not.equal(null);
      expect(res.body.data[0]).to.have.property("tags");
      expect(res.body.data[0].tags).to.not.equal(null);

      done();
    });
  });
  // Testing getMeetUps function  
  it('getMeetUps() function should return a 200 response', function (done) {
    api.get('/api/v1/meetups').set('Accept', 'application/json').expect(200, done);
  });
});