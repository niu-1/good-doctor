//逻辑模块，整个页面的核心
define(["model/login","model/register"],function(login,register){
    // console.log(login);
    login.init(".n-name");
    register.init(".font_red");

})




