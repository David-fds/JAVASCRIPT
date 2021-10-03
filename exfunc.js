//Function exercise 1
function displaym(){
    console.log("Wow, it worked");
}

displaym();

//Function exercise 2
function displayn(){
    var resultn = "The Good, the Bad and the Ugly";
    return resultn;
}

console.log(displayn());

//Function exercise 3
function displayo(num1){
    var resulto = num1 * 100;
    return resulto;
}

console.log(displayo(6));

//Function Exercise 4
function displayp(myName){
    var sentence = "Give it to " + myName + ", he can do it.";
    return sentence;
}

console.log(displayp("David"));

//Function Exercise 5
function comparison(numA, numB, numC){
    if(numA >= numB && numA >= numC){
        return numA;
    }
    else if(numB >= numA && numB >= numC){
        return numB;
    }
    else{
        return numC;
    }
}

console.log(comparison(10, 8, 9));