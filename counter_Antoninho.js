var counterFactory = function() {
  var count = 0;

  var counter = {
    increment: function() {
      count++;
    },
    getCount: function() {
      return count;
    }
  };

  return counter;
};

var c1 = counterFactory();
var c2 = counterFactory();

c1.increment();
c1.increment();
c1.increment();
console.log(c1.getCount());

c2.increment();
console.log(c2.getCount());
c1.increment();
console.log(c2.getCount());
