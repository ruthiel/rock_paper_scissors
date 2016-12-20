var Counter = (function() {
    var number = 0;

    function Counter() {}

    Counter.prototype.increase = function() {
        number++;
    }

    Counter.prototype.getNumber = function() {
        return number;
    }

    return Counter;
})();

module.exports = Counter;
