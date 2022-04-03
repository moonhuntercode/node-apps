import http from 'http';
import express from 'express';
import assert from 'assert';

import app from '../lib/index';

describe('Example Node app', () => {
  it('should return 200', done => {
    app.get('http://127.0.0.1:3001/', res => {
      assert.equal(200, res.statusCode);
      app.close();
      done();
    });
  });
});