//reverse a string without built in method reversestr("aniket")=tekina
function reverse(str){
    let reversed = "";
    for(let i=str.length-1; i>=0; i--){
        reversed += str[i];
    }
    return reversed;
}
const str = "aniket";
console.log("The reverse of the string is: " + reverse(str));
