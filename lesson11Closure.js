// Замыкания
// Вам нужно, написать функцию, которая принимает 1 параметр.
//     При первом вызове, она его запоминает, при втором —
// суммирует переданый параметр с тем, что передали первый раз и тд.
//     Всё это с замыканиями, например: sum(3) = 3 sum(5) = 8 sum(20) = 28
//
// Это не все. Возьмите счетчик, который мы писали в классе и
// добавьте ему возможность задавать начальное значение и шаг счетчика.

function addNum() {
    var temp = 0;
    return function (num) {
        temp+=num;
        return temp;
    }
}
 var sum = addNum();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));


function counter(start, step){
    var index = start;

    return function() {
        index+=step;
        return index;
    }
}

var counterOne = counter(0,2);

console.log('------------------');
console.log(counterOne());
console.log(counterOne());
console.log(counterOne());
console.log(counterOne());
console.log('------------------');
var counterTwo = counter(5,4);
console.log(counterTwo());
console.log(counterTwo());
console.log(counterTwo());
console.log(counterTwo());




