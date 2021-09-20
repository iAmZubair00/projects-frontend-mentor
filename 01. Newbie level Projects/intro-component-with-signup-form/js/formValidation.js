function validate(e){
    errorField=e.target.nextSibling;
    targetField=e.target.name;
    targetValue=e.target.value;
    if((targetField=='firstName' || targetField=='lastName' || targetField=='password') && targetValue==''){
        showError(errorField);
        e.target.classList.add('error-style');
    }
    else{
        hideError(errorField);
        e.target.classList.remove('error-style');
    }
}
function validateEmail(e){
    errorField=e.target.nextSibling;
    targetValue=e.target.value;
    if(!targetValue.includes('@') || !targetValue.includes('.com')){
        showError(errorField);
        e.target.classList.add('error-style');
    }
    else{
        hideError(errorField);
        e.target.classList.remove('error-style');
    }
}
function showError(elem){
    elem.classList.add('active');
}
function hideError(elem){
    elem.classList.remove('active');
}