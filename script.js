parent=document.querySelector('.x')
operator = ['-','+','/','*']
dot=['.']
enter3=["=","Enter"]
child=document.querySelector(".k")

function clicking(event){
   if(event.innerText=='C'){
    parent.innerText='';
   }else if(!((operator.includes(parent.innerText.slice(-1)) && operator.includes(event.innerText) ))){
    parent.innerText = parent.innerText + event.innerText
   }
}

function ok(even){
    if(!(parent.innerText.slice(-1)=='.' && even.innerText=='.')){
            parent.innerText = parent.innerText + even.innerText
    }
}

function click1(){
    parent.innerText.slice(-1)=''
}

window.addEventListener('keypress',(event)=>{
    key=event.key
    code=event.code
    if(code.includes('Digit')  ){
         parent.innerText = parent.innerText + key
    }else if(code.includes('Key')){
        console.log(event);
    }
    else if((!(operator.includes(key) && operator.includes(parent.innerText.slice(-1) ))) && ! enter3.includes(key)){
        parent.innerText = parent.innerText + key
    }else if(enter3.includes(key)){
        // output=document.querySelector('.y')
        data=parent.innerText
        parent.innerText=eval(data)
    }
})

const evaluate1=()=>{
    data1=parent.innerText
    parent.innerText=eval(data1)
}