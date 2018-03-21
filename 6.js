for (let i = 1; i <= 6; i++) {
    let string = "";
    for (let j = 0; j <= 5 - i; j++) {
        string = string + " ";
    }
    for (let r = 1; r <= 2 * i - 1; r++) {
        string = string + "*";
    }
    console.log(string);
}
for (let i = 1; i <= 5; i++) {
    let string = "";
    for (let j = 1; j <= i; j++) {
        string =string + " ";
    }
    for (let r = 1; r <= 11 - 2 * i; r++) {
        string = string + "*";
    }
    console.log(string);
}