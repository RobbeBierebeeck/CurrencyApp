"use strict";var signupBtn=document.querySelector(".button--submit");signupBtn.addEventListener("click",function(a){a.preventDefault();var b=document.querySelector("#username").value,c=document.querySelector("#email").value,d=document.querySelector("#password").value,e=document.querySelector("#password-repeat").value;d===e?fetch(settings.host+"/api/users/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:b,email:c,password:d})}).then(function(a){return a.json()}).then(function(a){"succes"===a.status&&(console.log("signup succes"),document.querySelector("#username").value="",document.querySelector("#email").value="",document.querySelector("#password").value="",document.querySelector("#password-repeat").value="")}):console.log("Passwords don't match.")});