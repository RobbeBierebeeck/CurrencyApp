"use strict";var newTransactionButton=document.querySelector(".button--submit"),inputUsername=document.getElementById("name");primus=Primus.connect("http://localhost:3000",{reconnect:{max:1/0,min:500,retries:10}}),newTransactionButton.addEventListener("click",function(a){a.preventDefault();var b=document.getElementById("name").dataset.userid,c=parseInt(document.getElementById("amount").value),d=document.getElementById("reason").value,e=document.getElementById("message").value;fetch(settings.host+"/api/transactions",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer  "+localStorage.getItem("token")},body:JSON.stringify({person_to_id:b,amount:c,reason:d,message:e})}).then(function(a){return a.json()}).then(function(a){if("success"===a.status){document.getElementById("name").value="",document.getElementById("amount").value="",document.getElementById("reason").value="Helping out",document.getElementById("message").value="";var b=document.querySelector(".form__success");b.innerText="Succesfully made a transaction!",b.style.display="flex"}else if("error"===a.status){document.getElementById("name").value="",document.getElementById("amount").value="",document.getElementById("reason").value="Helping out",document.getElementById("message").value="";var c=document.querySelector(".form__error");c.innerText=a.error,c.style.display="flex"}})}),inputUsername.addEventListener("keyup",function(a){var b=this;fetch(settings.host+"/api/users?name="+a.target.value,{method:"get",headers:{"Content-Type":"application/json"}}).then(function(a){return a.json()}).then(function(a){closeAllLists();var c=document.createElement("div");c.setAttribute("id",b.id+"autocomplete-list"),c.setAttribute("class","form__autocomplete-items"),b.parentNode.appendChild(c);var d=a.user;if(d)for(var e=0;e<d.length;e++){var f=d[e].name,g=d[e]._id,h=document.createElement("div");h.innerHTML=f,h.innerHTML+="<input type='hidden' value='"+f+"' data-userid='"+g+"'>",h.addEventListener("click",function(){var a=this.getElementsByTagName("input")[0];inputUsername.dataset.userid=a.dataset.userid,inputUsername.value=a.value,closeAllLists()}),c.appendChild(h)}else closeAllLists()})});function closeAllLists(a){for(var b=document.getElementsByClassName("form__autocomplete-items"),c=0;c<b.length;c++)a!=b[c]&&a!=inputUsername&&b[c].parentNode.removeChild(b[c])}document.addEventListener("click",function(a){closeAllLists(a.target)}),fetch(settings.host+"/api/users/amount",{method:"get",headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(function(a){return a.json()}).then(function(a){var b=a.transactions[0].amount;document.querySelector(".balance__data").innerHTML=b})["catch"](function(a){console.log(a),console.log("Het werkt niet")});