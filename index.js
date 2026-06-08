let h1=document.querySelector("#chng");
window.addEventListener("keydown",function(event){
    if(event.key===" "){
        h1.textContent="SPC";
    }
    else{
        h1.textContent=event.key;
    }
});