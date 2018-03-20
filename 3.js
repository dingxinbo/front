const dollor = "美元";
const riyuan = "日元";
const ouyuan = "欧元";
const lubu = "卢布";
const falang = "法郎";
let num = 10;
const getRMB = (type, num) => {
    switch (type) {
        case dollor:
            RMB = num * 6.63;
            break;
        case riyuan:
            RMB = num * 0.06;
            break;
        case ouyuan:
            RMB = num * 7.8;
            break;
        case lubu:
            RMB = num * 0.1;
            break;
        case falang:
            RMB = num * 6.65;
            break;
    }

    return RMB;
}
console.log(getRMB("卢布", 100));
