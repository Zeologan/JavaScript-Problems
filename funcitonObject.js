// hint : use closures
// count.reset is method 
// create counter function and update value by 1 when we call it but when we use count.reset it should get 0;

const count = (() => {
    let counter = 0;
        function inner(){
            counter++;
            console.log(counter);
            return counter;
        }
        inner.reset = function(){
            counter = 0;
        }
        return inner;
})();

count(); //1
count(); //2
count(); //3

count.reset(); //inital value