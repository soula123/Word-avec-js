//selection des bouttons
let boldBTN=document.querySelector("#bold");
let rightBTN=document.querySelector("#right")
let leftBTN=document.querySelector("#left")
let centerBTN=document.querySelector("#center")
let italicBTN=document.querySelector("#italic")
let underlineBTN=document.querySelector("#underline")

//selections des inputs
let sizeSelect=document.querySelector("#size")
let fontSelect=document.querySelector("#font")
let colorSelect=document.querySelector("#color")
//selections text areas
let text = document.querySelector("#text")

function bold()
{
    if((text.style.fontWeight)=="" )
      text.style.fontWeight="bold"
    else
      text.style.fontWeight="normal"
    }
function italic(){
    if((text.style.fontStyle)=="" )
      text.style.fontStyle="italic"
    else 
      text.style.fontStyle=""
 }
function underline(){
    if((text.style.textDecoration)=="" )
        text.style.textDecoration="underline"
    else 
    text.style.textDecoration=""

}
function font(){
    let ch=fontSelect.value
    text.style.fontFamily=ch;
}
function size(){
    let s=sizeSelect.value
    text.style.fontSize=s
}
function color(){
    text.style.color=colorSelect.value
}


function right(){
   text.style.textAlign="right"
}
function left(){
    text.style.textAlign="left"
}

function center(){
    text.style.textAlign="center"
}


boldBTN.onclick=bold
italicBTN.onclick=italic
underlineBTN.onclick=underline
sizeSelect.onclick=size
fontSelect.onclick=font
colorSelect.onchange=color
rightBTN.onclick=right
leftBTN.onclick=left
centerBTN.onclick=center

