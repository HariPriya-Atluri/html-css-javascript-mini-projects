function appendToDisplay(value){
    document.getElementById('display').value+=value //value=value+value
}
function clearDisplay(){
    document.getElementById('display').value=''
}
function calculateResult(){
    let display=document.getElementById('display')
    let exp=display.value
    if (exp){
        display.value=eval(exp)
    }
    else{
        display.value=''
    }
}