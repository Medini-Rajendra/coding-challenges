function repeatedString(s, n) {
    const countA = s.split('').filter(element => element == 'a').length;
    let repeatA = Math.floor(n / s.length)*countA;
    const remainderA = n % s.length;
    for(let i=0; i<remainderA; i+=1) {
        if (s[i] === 'a') {
            repeatA += 1;
        }
    } 
    return repeatA;
}