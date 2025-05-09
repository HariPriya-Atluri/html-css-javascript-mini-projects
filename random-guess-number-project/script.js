let randomnumber=Math.floor(Math.random()*10)+1
let guesses=[];

function checkguess(){
    let userguess=document.getElementById('guess').value
    if (userguess){
        userguess=parseInt(userguess);
        guesses.push(userguess)
        if(userguess===randomnumber){
            document.getElementById('result').innerHTML='<b>congrats</b>'
        }
        else{
            document.getElementById('result').textContent='wrong'
        }
        document.getElementById('guesses').textContent='your guesses: '+guesses.join(',') //converts the array into a single string with values separated by commas.
    }
    guess.value=''
}