let btn1=document.querySelector("#new")
let boxes=document.querySelectorAll(".button")
let btnreset=document.querySelector("#reset")
let msg=document.querySelector(".msg")
let text=true;
let count=0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
    if(text){
        box.innerText="X"
        box.style.color="green"
        text=false;
    }
    else{
        box.innerText="O"
        box.style.color="red"

        text=true;
    }
    box.disabled=true;
    count++;
    // console.log(count)
    let iswinner=checkwinner();
    if (count === 9 && !iswinner) {
        matchdraw();
      }
   
   })

  });
  const checkwinner=()=>{
    for(let pattern of winPatterns){
        let value1=boxes[pattern[0]].innerText;
        let value2=boxes[pattern[1]].innerText;
        let value3=boxes[pattern[2]].innerText;
        if(value1!=""&&value2!=""&&value3!=""){
            if(value1==value2&&value2==value3){
                showwinner(value1)
                return true;
            }
           
        
                
            
        }
    }
  }
  const showwinner=(winner)=>{
    msg.classList.remove("msg");
    boxes.forEach((box)=>{
        box.disabled=true;

    })
    h1.innerText=`congratulation winner is ${winner}`
    

  }
  btn1.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText=""
        box.disabled=false;

    })
    msg.classList.add("msg");
    count=0;



  });   
  btnreset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText=""
        box.disabled=false;


    })
    count=0;


  })
  const matchdraw=()=>{
    msg.classList.remove("msg");
    h1.innerText="MATCH IS DRAW NOBODY WIN"


  }



