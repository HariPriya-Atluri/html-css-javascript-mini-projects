let food=[
    {name:'burger',price:450},
    {name:'pizza',price:300},
    {name:'fries',price:200}
];

function orderFood(foodname,callback){
    callback(foodname);
}
function ordering(foodname){
    document.getElementById('msg1').textContent=`ordering your ${foodname} now`
}
function thankyou(){
    document.getElementById('msg2').textContent='thank you for ordering!'
}
//orderFood('pizza',ordering)




function list(){
    let mainlist=document.getElementById('list');
    //food.textContent='';
    food.forEach(item=>{
        let div=document.createElement('div');
        let li=document.createElement('li');
        li.classList.add('list-item')
        li.innerHTML=`${item.name}-${item.price}`;
        let btn=document.createElement('button');
        btn.classList.add('btn-card')
        btn.textContent='order now';
        btn.addEventListener('click',()=>{
            orderFood(item.name,ordering);
            setTimeout(thankyou,2000);
        });
        div.appendChild(li)
        li.appendChild(btn)
        mainlist.appendChild(div)
    })
}
list();