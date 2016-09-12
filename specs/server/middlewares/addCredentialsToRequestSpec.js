const addCredentialsToRequest = require('../../../server/middlewares/addCredentialsToRequest');
const fs = require('fs');
const path = require('path');


fdescribe('addCredentialsToRequest middleware', function () {
  beforeEach(function () {
    this.next = jasmine.createSpy('next');
    this.reqSpy = {body: 'some data'};
    this.resSpy = {};
  });
  describe('takes a request and', function () {
    beforeEach(function (done) {
      addCredentialsToRequest(this.reqSpy, this.resSpy, function () { done(); });
    });

    it("adds json-ified credentials to request", function (done) {
      expect(this.reqSpy.creds).toEqual(jasmine.objectContaining({'1':
        { u: 'hellaSecureUsername', p: 'veryNicePassword' }}));
      done();
    });
  });
});