var pers = document.querySelector(".persons")
var inp = document.querySelector('input')

var data = [
{name:"aayush", src:"https://images.unsplash.com/photo-1503001358144-8d7f2c1db9f5?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{name:"aayushma", src:"https://images.unsplash.com/photo-1503001358144-8d7f2c1db9f5?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{name:"Chudamina", src:"https://images.unsplash.com/photo-1503001358144-8d7f2c1db9f5?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{name:"Chuda", src:"https://images.unsplash.com/photo-1503001358144-8d7f2c1db9f5?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}

]






var matching= [];
 inp.addEventListener("input",function(){
    matching = data.filter(function(e){
        return  e.name.startsWith(inp.value)})
     var newusers= ""
        matching.forEach(function(elem){
          newusers += ` <div class="people">
                 <img src="${elem.src}" alt="">
                 <h3>${elem.name}</h3>
     
             </div>`
     })
     pers.innerHTML= newusers;
     })
 
 



