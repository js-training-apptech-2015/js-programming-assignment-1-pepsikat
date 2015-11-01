function solution1(a, b, c) {
    if (a < b && c > 0) {
        return Math.ceil((b - a) / c);
    }
    return false;
}


function solution2(a, b) {
    var c = 0,
        exp = 0;
    while (a !== 0 || b !== 0) {
        if ((a & 1) !== (b & 1)) {
            exp = c;
        }
        a >>= 1;
        b >>= 1;
        c++;
    }
    return Math.pow(2, exp + 1) - 1;
}