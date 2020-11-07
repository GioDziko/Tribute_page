const checkbox=document.getElementById("checkbox");
checkbox.addEventListener("click",()=>{
    if(document.getElementById("checkbox").checked){
        document.getElementById("body").style.cssText="background-color:black; color:white"
        
    }
    else{
        document.getElementById("body").style.cssText="background-color:white; color:black"
    }
})

