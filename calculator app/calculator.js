let result    = document.querySelector(".showResult");
const clear     = document.querySelector(".clear");
const deleted   = document.querySelector(".delete");
const equaled   = document.querySelector(".equal");
const button    = document.querySelectorAll("button");
// let dummy       =   document.querySelector(".dummy");

evalValue = ''
for(elem of button){

elem.addEventListener('click',(e)=>{
    
    let buttontext = e.target.innerText;

        if(buttontext == "="){
            evalValued = eval(evalValue);
            result.innerText =  evalValued
           
    }else if(buttontext == "Clr"){
        result.innerHTML = "";
        evalValue = "";
        evalValued = "";
    }else if(buttontext == "del"){
        // String(evalValued);
        // evalValued = evalValued.slice(0,-1);
        evalValue = evalValue.slice(0,-1);
        result.innerHTML = evalValue;

    }else if(buttontext == "X"){
    
        buttontext = "*";
        evalValue += buttontext  
        result.innerHTML = evalValue;
    }
    else{
        evalValue += buttontext;
        result.innerHTML = evalValue;
    }
    


});


}


