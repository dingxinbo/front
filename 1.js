

const getRMB = (doller)=>{
   
   const RMB = doller*6.33;
   return RMB;
}
const getDoller = (RMB)=>{
   
    const dollor =RMB/6.33;
    return dollor;
}
console.log(getRMB(1));
console.log(getDoller(10));

