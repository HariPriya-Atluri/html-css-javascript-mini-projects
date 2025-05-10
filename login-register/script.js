let userform=document.getElementById('userform');
userform.addEventListener('submit',function(e){
    e.preventDefault();
    document.getElementById('output').textContent=''

    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;

    simulateUserProcess(email,password)
})
function showoutput(msg){
    document.getElementById('output').innerHTML=`${msg}`
}
const register=(email,password)=>{
    return new Promise((resolve,reject)=>{
        console.log('starting registration...');
        setTimeout(()=>{
            if(!email || !password){
                reject('registration failed :required email and password ')
            }
            else if(email==='alreadyTaken@example.com'){
                reject('registration failed :email already exists')
            }
            else{
                //console.log('registration succesful!')
                resolve('registration succesful!')
            }
        },2000)
    })
}

const login=(email,password)=>{
    return new Promise((resolve,reject)=>{
        console.log('attempting login...')
        setTimeout(()=>{
            if(email!=='user@example.com' || password!=='password123'){
                reject('login failed:invalid creditaials')
            }
            else{
               // console.log('login succesful')
                resolve('login succesful')
            }
        },5000)
    })
}

const thankyou=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //console.log('thank you')
            resolve('thank you for joining us')
        },2000)
    })
}

const logout=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           // console.log('logging out')
            resolve('logout succesfull')
        },3000)
    })
}

const simulateUserProcess=(email,password)=>{ // this is main function
register(email,password)
    .then((data)=>{
        showoutput(data)
        return login(email,password)
    })
    .then((loginmsg)=>{
        showoutput(loginmsg)
        return thankyou()
    })
    .then((thankmsg)=>{
        showoutput(thankmsg)
        return logout()
    })
    .then((logoutmsg)=>{
        showoutput(logoutmsg)
    })
    .catch((err)=>{
        showoutput(err)
    })
}

// simulateUserProcess('user@example.com', 'password123');

//simulateUserProcess('alreadyTaken@example.com', 'password123');

// simulateUserProcess('user@example.com', 'wrongPassword');
