let users=[];
let actiontype='';

const userform=document.getElementById('userform');
const output=document.getElementById('output');

document.getElementById('registers').addEventListener('click',()=>actiontype='register'); // no need curly braces in arrow function as its only ne line
document.getElementById('login').addEventListener('click',()=>actiontype='login');

userform.addEventListener('submit',async function (e) {
    

    e.preventDefault();
    document.getElementById('output').textContent='';

    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;

    if(actiontype==='register'){
        await handleregister(email,password);
    }
    else if(actiontype==='login'){
        await handlelogin(email,password);
    }
});
    
function showoutput(msg){
    document.getElementById('output').innerHTML=`${msg}`
}

const handleregister=async (email,password)=>{
    try{
       const msg= await register(email,password)
       showoutput(msg)
    }
    catch(err){
        showoutput(err)
    }

}
const handlelogin=async (email,password)=>{
   try{
    const msg=await login(email,password)
    showoutput(msg)
   }
   catch(err){
    showoutput(err)
   }
}

const register=(email,password)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
            if(!email || !password){
                return reject('required both details')
            }
            const existinguser=users.find(user=>user.email===email);
            if(existinguser){
                reject('email already exists');
            }
            else{
                users.push({email,password})
                resolve('registration succesful')
            }
           
        },2000)
    })

}
const login=(email,password)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const user=users.find(user=>user.email === email && user.password===password)
            if(!user){
                reject('invalid cred')
            }
            else{
                resolve('login succesful')
            }
           
        },2000)
    })
}
const thankyou=()=>{
    return  new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('thank you for joining us')
        },3000)
    })
}
const loggout=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('loggout succesful')
        },5000)
    })
}
