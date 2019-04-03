Calculator = function() {
    this.value = 0;
}

Calculator.prototype.add = function(number) {
    if (typeof(number) == "number") {
        this.value += number;
        console.log(this.value);
    } else {
        alert("Error!");
    }
}

//step 2 in adding a new function -- write the simplest possible code to get the test to pass.

Calculator.prototype.prod = function(number) {
    if (typeof(number) == "number") {
        this.value = 1;
        this.value *= number;
        console.log(this.value);
    } else {
        alert("Error!");
    }
}


calc = new Calculator;
calc.prod(7);
calc.prod(4);

//calc.add(3);
//calc.add(17);
