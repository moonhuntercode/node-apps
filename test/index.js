import express from 'express';
import assert from 'assert';
import expect from 'chai'
import request from 'supertest';
import app from '../lib/index';

describe('Unit testing the /home route', function() {

  it('should return OK status', function() {
    return request(app)
      .get('/home')
      .then(function(response){
          assert.equal(response.status, 200)
      })
  });
});

it('should return message on rendering', function() {
  return request(app)
      .get('/home')
      .then(function(response){
          expect(response.text).to.contain('Welcome Home Dude !!');
      })
});
