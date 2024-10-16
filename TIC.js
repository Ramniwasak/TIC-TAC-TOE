let boxes=document.querySelectorAll(".boxes")
let reset=document.querySelector(".button")
let reset2=document.querySelector(".button2")
let msgcon=document.querySelector(".msgcon")
let msg=document.querySelector(".msg")
let game=document.querySelector("#game")
let main=document.querySelector("#body")

let h1=document.querySelector("#h1")
let turn=true; 
let innerarr=0;
let count=0;
let winpettern=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[2,4,6],
[0,4,8],
]
let random=Math.floor(Math.random()*9)
console.log(random,"random")
console.log(winpettern[random])


boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    count++;
    console.log("clicked")

if(turn===true){
box.innerText="X"
turn=false

computer();

}
box.disabled=true;
checkwinner();
})
})

function showwinner(){
msgcon.classList.remove("hide")
msg.innerText=`CONGRUTULATON! `
h1.style.display="none"
game.style.display="none"
reset.style.display="none"
body.style.background="pink"

}

reset2.addEventListener("click",()=>{
location.reload()

})

reset.addEventListener("click",()=>{
    for(let box of boxes){
        box.innerText=" "
        box.disabled=false
    }
})


    
    



function checkwinner(){
    for(let pattern of winpettern){
    
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
           
                         if (pos1Val === pos2Val && pos2Val === pos3Val){
                                         showwinner();
                                           boxdis();
                                         
                                         }else{

                                         }



    
    }}
    
    
    }
  
function draw(){
    console.log("hello")
}


    function boxdis(){
        for( let box of boxes){
            box.disabled="true"
        }
    }


    function computer(){if(turn==false){


if(boxes[winpettern[random][innerarr]].innerText==="X"){

           if(boxes[winpettern[random][innerarr]].innerText===" ")
              {  boxes[winpettern[random][innerarr]].innerText="0"
                    innerarr++
                          turn=true

                               }
                                                                                                                                                     
                                            innerarr=0;
                                            random++

                                               if(random===8){
                                                random=1;
                                              boxes[winpettern[random][innerarr]].innerText="0"
                                                    innerarr++
                                                         turn=true
                                               }else if(random!==7){
                                                boxes[winpettern[random][innerarr]].innerText="0"
                                                innerarr++
                                                     turn=true}

                                               
}else{
    boxes[winpettern[random][innerarr]].innerText="0"
    innerarr++
    turn=true

}}}

