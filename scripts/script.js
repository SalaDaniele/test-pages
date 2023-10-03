document.addEventListener("DOMContentLoaded",()=>{ //questo fa si che il codice venga eseguito dopo che il documento è stato caricato
  const myH1 = document.querySelector("h1");  // un altro modo per farlo è aggiungere defer nel tag di richiamo dello script nell'html
  //myH1.textContent = "Hello world!";
});


//dichiarazione funzione
function multiply(num1, num2){
  let result = num1*num2;
  return result;
}

//invocazione funzione
console.log(multiply(4,6));

// document.querySelector("html").addEventListener("click", ()=>{
//   alert("mi hai cliccato");
// })


const myImage = document.querySelector("img");
myImage.onclick=()=>{
  const mySrc = myImage.getAttribute("src");
  if(mySrc === "images/firefox-icon.png"){
    myImage.setAttribute("src","images/firefox2.png");
  }else{
    myImage.setAttribute("src","images/firefox-icon.png");
  }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
  let myName = prompt("inserisci il tuo nome");
  if(!myName){
    setUserName()
  }
  else{
    localStorage.setItem("name",myName);
    myHeading.textContent = "mozilla is cool "+myName;
  }
}

if(!localStorage.getItem("name")){
  setUserName()
}else{

  myHeading.textContent = "mozilla is cool "+localStorage.getItem("name");
}

myButton.onclick = setUserName;
