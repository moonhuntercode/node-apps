"use strict";

var assert = require('assert');

var expect = require('chai').expect;

var request = require('supertest');

var app = require('../dist/index');

describe('Unit testing the /home route', function () {
  it('should return OK status', function () {
    return request(app).get('/home').then(function (response) {
      assert.equal(response.status, 200);
    });
  });
  it('should return message on rendering', function () {
    return request(app).get('/home').then(function (response) {
      expect(response.text).to.contain('Welcome Home Dude !!');
    });
  });
});