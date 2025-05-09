let details=[];
const input=document.getElementById('sname')
const sscore=document.getElementById('sscore')
const btn1=document.getElementById('btn1')
const btn2=document.getElementById('btn2')
const topbtn=document.getElementById('topbtn')
const list=document.getElementById('list')

btn1.addEventListener('click',()=>{
    let sname=input.value.trim();
   let score=parseInt(sscore.value)
    if(sname===''){
        alert('enter details')
        return;
    }
    details.push({name:sname,score:score});
    console.log(details);
    input.value='';
    sscore.value='';
})
btn2.addEventListener("click", () => {
list.textContent = "";
details.forEach(student => {
const grade = getGrade(student.score);
const li = document.createElement("li");
li.textContent = `${student.name} - ${student.score} - Grade: ${grade}`;
list.appendChild(li);
});
});

// Show Only Top Scorers

topbtn.addEventListener("click", () => {
list.textContent = "";
const topStudents = details.filter(stu => stu.score >= 90);
topStudents.forEach(student => {
const grade = getGrade(student.score);
const li = document.createElement("li");
li.textContent = ` ${student.name} - ${student.score} - Grade: ${grade}`;
list.appendChild(li);
});
});

// Grade calculator function
function getGrade(score) {
if (score >= 90) return 'A';
else if (score >= 80) return 'B';
else if (score >= 70) return 'C';
else if (score >= 60) return 'D';
else return 'F';
}

