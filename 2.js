
const dollor = "美元";
const riyuan = "日元";
const ouyuan = "欧元";
const lubu = "卢布";
const falang = "法郎";
let num = 10;
const getRMB = (type, num) => {

    if (type === "美元") {
        RMB = 6.33 * num;
    } else if (type === "日元") {
        RMB = 10 * num;
    } else if (type === "欧元") {
        RMB = 10 * num;
    } else if (type = "卢布") {
        RMB = 100 * num;
    } else if (type = "法郎") {
        RMB = 5 * num;
    }
    return RMB;


}
console.log(getRMB("日元", 20));