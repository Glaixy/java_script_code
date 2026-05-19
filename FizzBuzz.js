//fizz buzz : print no. from 1 to 100
//if no. is divisible by 5 then print "fizz"
//if no. is divisible by 3 then print "buzz"
//if no. is divisible by 3 and 5 then print "fizzbuzz"
//if no. is not divisible by 3 and 5 then print the no

console.log("FizzBuzz from 1 to 100:");
for(let i=1; i<=100; i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }else if(i%5==0){
        console.log("Fizz");
    }else if(i%3==0){
        console.log("Buzz");
    }else{
        console.log(i);
    }   
}
