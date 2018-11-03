var test = require('tap').test,
    Dummy = require('../lib/dummy');

test('setup', function(t) {
  dummy = new Dummy(1);
  t.ok(dummy);
  t.end();
});

test('add', function(t) {
  t.equal(5, dummy.add(4));
  t.end();
});

test('teardown', function(t) {
  t.ok(true);
  t.end();
});

