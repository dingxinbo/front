let num =2;

const getABCD = (num) => {
    const arr = new Array("D","C","B","C","B","B","C","B","C","D","B","A");
    return arr[num-1];
}
console.log(getABCD(12));

