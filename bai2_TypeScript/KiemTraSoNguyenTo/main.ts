function isPrime(x: number): boolean {
    let count: number = 0;
    if (x < 2) {
        return false;
    } else {
        for (let i = 2; i < x; i++) {
            if(x%i===0){
                count++;
            }
        }
    }
    return count == 0;
}

console.log(isPrime(8))