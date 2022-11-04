//Reverse a String;
function reverseString(str){
    var newString = "";
    for(let i = str.length -1 ; i >= 0; i--){
        newString += str[i];
    }
    return newString;
};

var str = "Vishnu";
console.log(reverseString(str));


