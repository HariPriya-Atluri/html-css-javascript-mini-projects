function addtask(){
    let taskinput=document.getElementById('inputtask')
    let tasktext=taskinput.value.trim()

    if(tasktext==""){
        alert('please enter a task')
        return;
    }
    let tasklist=document.getElementById('tasklist')
    let li=document.createElement('li')
    li.textContent=tasktext

    //             document.getElementById('taskList')	Gets the <ul> element from the HTML.
// document.createElement('li')	Creates a new empty <li> element.
// li.textContent = taskText;	Adds user input as text inside <li>.
// taskList.appendChild(li);	Adds the <li> inside the <ul>.

    //create a delete button
    let deletebtn=document.createElement('button')  
    // why we created del btn herre is ----Creating the button in JavaScript ensures that every new task gets its own "Delete" button.
    deletebtn.textContent='Delete'
    deletebtn.onclick=function(){
        tasklist.removeChild(li)  //remove task from list
    }


    li.appendChild(deletebtn)  //to display delte btn after task(list):
    tasklist.appendChild(li) //tasklist is ul now li is added to ul 
    taskinput.value='' 
} 
