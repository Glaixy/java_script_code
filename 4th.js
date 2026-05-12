//WAP that only print multiple of no. between num 1 and num 2
// WAP that print only prime no. between num1 and num2

let num1 = 1
let num2 = 10



for (let i = num1; i <= num2; i++) {

    let isPrime = true;

    if (i <= 1) {
        isPrime = false;
    } else {

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        console.log(i);
    }
}