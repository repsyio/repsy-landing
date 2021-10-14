let h = message.scrollHeight;

message.addEventListener("keydown",({ target })=>{ 
    if(target.scrollHeight > h && target.scrollHeight <= 172){
        target.style.height = target.scrollHeight + "px";
    }
})