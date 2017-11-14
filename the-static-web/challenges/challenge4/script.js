/*
    This program finds the smallest number that can be divided by each of the numbers from minValue to maxValue without any remainder.
*/
var smallestNumber = null;

// Minimum and maximum value that we will be checking for.
var minValue = 1;
var maxValue = 10;


var curNumber = 1; //Curent number being tested

if(smallestNumber === null){
    console.log(smallestNumber);
}
while(smallestNumber === null){
    var amtCanWork = 0; //Amount of numbers that divide without remainder.
    for(var i = minValue; i <= maxValue; i++) {
       
       // console.log(i + "%" + curNumber + "=" + (curNumber % i) + " = "  + amtCanWork + " " + ((curNumber % i) == 0));
        if((curNumber % i) == 0){
            amtCanWork ++;
        }
    }
    if(amtCanWork === maxValue){
        smallestNumber = curNumber;
    } else {
        curNumber ++;
    }
}


document.write("<p>The smallest number that can be divided by each of the numbers from " + minValue + " to " + maxValue + " without any remainder is <strong>" + smallestNumber + "</strong></p>");
