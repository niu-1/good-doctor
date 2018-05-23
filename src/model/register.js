define(["jquery"],function(){
    function Register(){
    }
    Register.prototype = {
        constructor:Register,
        init(selector){
            this.txt = $(selector);
            if(!this.txt) return;
            this.txt.on("click",$.proxy(this.jump,this));
        },
        jump(){
            window.location = "register.html";
        } 
    }
    return new Register();
})