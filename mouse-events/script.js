const events=document.getElementById('eventid')
const keyboard=document.getElementById('keybid')
const list=document.getElementById('listid')
const form=document.getElementById('formid')
const input=document.getElementById('inputid')
const btn=document.getElementById('btnid')
const result=document.getElementById('result')

function showlog(eventtype){
    result.textContent='event occured:'+eventtype
}

events.addEventListener('click',()=>showlog('clicked'))
events.addEventListener('dblclick',()=>showlog('double clicked'))
events.addEventListener('mousemove',()=>showlog('mouse moved'))
events.addEventListener('mouseover',()=>showlog('mouse over'))
events.addEventListener('mouseout',()=>showlog('mouse out'))

keyboard.addEventListener('keyup',()=>showlog('key up '))
keyboard.addEventListener('keydown',()=>showlog('key down '))

form.addEventListener('submit',function(e){
    e.preventDefault()
    addtask()
    showlog('form submitted')
})

input.addEventListener('focus',()=>showlog('input focus'))
input.addEventListener('blur',()=>showlog('input blur'))
input.addEventListener('change',()=>showlog('input change'))

function addtask(){
    let tasks=document.getElementById('inputid')
    let task=tasks.value.trim();
    if(task===''){
        alert('enter any task');
        return;
    }
    
    let list=document.getElementById('listid')
    let li=document.createElement('li')
    li.append(task)

    let delbtn=document.createElement('button')
    delbtn.textContent='Delete Task'

    delbtn.addEventListener('click',function(){
        list.removeChild(li)
    })

    let editbtn=document.createElement('button')
    editbtn.textContent='Edit Task'
    editbtn.addEventListener('click',function(){
        input.value=tasks;
        list.removeChild(li)
    })
    
    li.append(delbtn)
    list.append(li)
    li.append(editbtn)
    tasks.value=''

}

// btn.addEventListener('click',()=>addtask())

