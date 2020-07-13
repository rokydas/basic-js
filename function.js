function printMessage(){
    console.log("Hello, How are you?");
}

printMessage();

function doubleIt(num){
    var result = num*2;
    console.log(result);
}

doubleIt(100);
doubleIt(500);

function doubleItReturn(num){
    var result = num*2;
    return result;
}
console.log(doubleItReturn(50));
