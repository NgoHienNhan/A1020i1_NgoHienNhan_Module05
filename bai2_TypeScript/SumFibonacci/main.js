function Main(endPoint) {
    var a = 1;
    var b = 1;
    var sum = 2;
    var tmp;
    if (endPoint < 1) {
        return 0;
    }
    while (b < endPoint) {
        tmp = b;
        b = a + b;
        a = tmp;
        sum += b;
    }
    sum -= b;
    return sum;
}
function num() {
    return 5;
}
console.log(num());
