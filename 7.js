
for(i=100;i<999;i++){
    var a = parseInt(i%10);  
    var b = parseInt((i/10)%10); 
    var c = parseInt(i/100);  
    if(a*a*a+b*b*b+c*c*c== i){
    console.log(i  +"是水仙花数");
}
}