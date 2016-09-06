const boaController = require('../../../server/controllers/boaController');

describe('boaController', function () {
  beforeEach(function () {
    this.response = jasmine.createSpyObj('response', ['send']);
  });

  it('returns boa cool', function () {
    boaController({}, this.response);
    expect(this.response.send).toHaveBeenCalledWith('boa cool');
  });
});
