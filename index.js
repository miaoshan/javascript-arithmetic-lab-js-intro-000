function add(a,b){
 return a+b;
}

function subtract(a,b){
return a-b;
}

function multiply(a,b){
return a*b;
}
function divide(a,b){

return a/b;
}

function inc(a){
  return a+=1;
}
function dec(a){
  return a-=1;
}



function makeInt(a){
  var n;
if(n==a.toString()){
   return parseInt(n)
  }
  else if(Number.isInteger(a)){{
    return false;
  }
    return NaN;
  }
else if(makeInt(parseInt(a,10))){

return 0;
}
}
function preserveDecimal(n){
  return parseFloat(n)
}