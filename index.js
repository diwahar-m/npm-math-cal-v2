
function checkType(a, b){
    if(typeof a === 'number' && typeof b === 'number'){
        return true
    }
    return false
}

const inValidNumber  = "Invalid inputs"

function addition(a, b){
    if(checkType(a,b)){
        return a + b;
    }
    return inValidNumber;
}
function subtraction(a, b){
     if(checkType(a,b)){
        return a - b;
    }
    return inValidNumber;
}
function multiplication(a, b){
     if(checkType(a,b)){
        return a * b;
    }
    return inValidNumber;
}

function division(a, b){
     if(checkType(a,b)){
        return a / b;
    }
    return inValidNumber;
}


export {addition, subtraction, multiplication, division};