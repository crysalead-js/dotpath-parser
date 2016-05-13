var keypath = require('..');

describe("keypath()", function() {

  it("translates a basic key", function() {

    var keys = keypath('test');
    expect(keys).toEqual(['test']);

  });

  it("translates a nested key", function() {

    var keys = keypath('test1.test2');
    expect(keys).toEqual(['test1', 'test2']);

  });

  it("translates a nested key with array keys", function() {

    var keys = keypath('this.is.0.an.1.example');
    expect(keys).toEqual(['this', 'is', 0, 'an', 1, 'example']);

  });

});
