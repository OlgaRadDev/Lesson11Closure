// Замыкания
// Вам нужно, написать функцию, которая принимает 1 параметр.
//     При первом вызове, она его запоминает, при втором —
// суммирует переданый параметр с тем, что передали первый раз и тд.
//     Всё это с замыканиями, например: sum(3) = 3 sum(5) = 8 sum(20) = 28
//
// Это не все. Возьмите счетчик, который мы писали в классе и
// добавьте ему возможность задавать начальное значение и шаг счетчика.

(function () {

    function sum (num) {
        var temp = num;

        sum = function () {
            var addNum = arguments[0]? arguments[0]:0;
            return temp+=addNum;
        };
        return sum();
    }
    console.log(sum(3));
    console.log(sum(5));
    console.log(sum(20));
})();


function counter(start, step){
    var index = start;

    return function() {
        var returnValue = index;
        index+=step;
        return returnValue;
    }
}
var counterOne = counter(2,3);
counterOne();
counterOne();
counterOne();
console.log(counterOne());

var counterTwo = counter(5,4);
counterTwo();
counterTwo();
counterTwo();
console.log(counterTwo());




