webpackJsonp([4],{13:function(e,t,o){"use strict";var n,s=o(0),r=(n=s)&&n.__esModule?n:{default:n},a=window,i=document.getElementsByTagName("body")[0];new r.default({el:"#message-container",data:{visible:!1,message:"Сообщение отправлено"},mounted:function(){console.log("mounted"),this.setListeners()},methods:{afterEnter:function(){this.setBodyListener()},animationLeave:function(){i.removeEventListener("click",this.bodyListener)},bodyListener:function(e){e.target.closest(".message-popup")||e.target.closest(".message-popup__button")||(this.visible=!1)},setBodyListener:function(){i.addEventListener("click",this.bodyListener)},setListeners:function(){var e=this;a.addEventListener("showMessagePopup",function(t){e.message=t.detail.popupMessage,e.visible=!0})},closePopup:function(){this.visible=!1}},template:"#message-popup"})},46:function(e,t,o){"use strict";o(47),o(49),o(13)},47:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var s=n(o(0)),r=n(o(9)),a=n(o(48)),i=window,c=screen;new s.default({el:"#welcome-app",components:{preloader:r.default,background:a.default},data:{allowBigBG:!1},beforeMount:function(){i.isWelcomePage=!0,i.percents=0},mounted:function(){console.log("mounted app"),this.changeBackground(),i.addEventListener("resize",this.changeBackground)},beforeDestroy:function(){i.removeEventListener("resize",this.changeBackground)},methods:{changeBackground:function(){this.allowBigBG=c.width>1199}}})},48:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n;(n=o(0))&&n.__esModule;var s=window,r=document,a=(screen,{mounted:function(){var e=this;setTimeout(function(){e.mountBackground(),s.addEventListener("mousemove",e.moveLayer)},500)},beforeDestroy:function(){s.removeEventListener("mousemove",this.moveLayer)},methods:{downloadFile:function(e){var t=0;return new Promise(function(o,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onprogress=function(e){var o=parseInt(e.loaded/e.total*50);s.percents+=o-t;var n=new CustomEvent("updatePercents",{detail:{percents:s.percents}});s.dispatchEvent(n),t=o},r.send(null),r.onload=function(){200===r.status?o(r.response):n(new Error("Картинка не загрузилась. error code:\n                "+request.statusText))},r.onerror=function(){n(new Error("Ошибка сети."))}})},mountBackground:function(){var e=r.querySelector(".background__layer"),t=new Image;t.classList.add("background__img"),t.alt="Горы",t.crossOrigin="anonymous",this.downloadFile("./assets/images/mountains-bg.png").then(function(o){var n=new Blob([o]);t.src=window.URL.createObjectURL(n),e.appendChild(t),console.log("картинка загружена")},function(e){console.log(e)}),r.querySelector(".background__video")&&(s.percents+=50)},moveLayer:function(e){var t=r.querySelector(".background__layer"),o=.035*(s.innerWidth/2-e.pageX),n=.035*(s.innerHeight/2-e.pageY);t.style.transform="translate("+o+"px, "+n+"px)"}},template:"#background"});t.default=a},49:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var s=n(o(0)),r=n(o(2));n(o(14));var a=window,i=document,c=i.getElementsByTagName("body")[0],u=!0,l={template:"#welcome",data:function(){return{firstRender:u}},mounted:function(){console.log("mounted! firstRender",u),u&&a.addEventListener("showWelcomeFlipper",this.showWelcomeFlipper)},methods:{showWelcomeFlipper:function(e){i.querySelector(".welcome"),this.firstRender=!1,u=!1,a.removeEventListener("showWelcomeFlipper",this.showWelcomeFlipper)}}},d={template:"#login",data:function(){return{confirmHuman:!1,user:{name:"",password:""},isHumanConfirmed:{checkHuman:!1,humanConfirmed:!1}}},watch:{isHumanConfirmed:function(){console.log("this.isHumanConfirmed",this.isHumanConfirmed)}},methods:{toMainHandler:function(){c.click()},submitForm:function(){var e=this,t=this.validateForm();t&&(console.log("validated",t),r.default.login(this.user).then(function(t){if(200==t.status){console.log("response",t),e.showMessage("Вы успешно вошли");var o=Math.floor(Date.now()/1e3+t.data.ttl);localStorage.setItem("token",t.data.token),localStorage.setItem("ttl",o),a.location.href="/my-site-portfolio/dist/admin"}},function(t){console.log("reason.error",t.error),e.showMessage(t.message)}).catch(function(e){return console.error(e)}))},showMessage:function(e){console.log("popupMessage",e);var t=new CustomEvent("showMessagePopup",{detail:{popupMessage:e}});a.dispatchEvent(t)},validateForm:function(){var e=i.querySelector(".login__input--login").value,t=i.querySelector(".login__input--password").value,o=i.querySelector(".login__confirm-input--check-human").checked,n=i.querySelector(".login__confirm-input--humanConfirmed").checked;return e&&t?o&&n?{login:e,password:t,isHuman:o,confirmHuman:n}:(this.showMessage("Роботам тут не место"),!1):(this.showMessage("Не верный логин или пароль"),!1)}}},m=new s.default({el:"#welcome-turner",components:{welcome:l,login:d},data:{animationDirection:"flip",compToShow:"welcome"},mounted:function(){var e=this,t=document;t.getElementById("welcome-turner"),c.classList.add("welcome--no-overflow"),c.addEventListener("click",function(o){var n=t.getElementById("auth-button");o.target.closest(".welcome-turner")||o.target.closest("#auth-button")||o.target.closest(".message-popup")||o.target.closest(".message-popup__button")||("login"===e.compToShow&&(e.compToShow="welcome"),n.classList.remove("auth-button--hidden"))})},template:"#turner"});new s.default({el:"#auth-container",methods:{switchComponents:function(){document.getElementById("auth-button").classList.add("auth-button--hidden"),m.compToShow="welcome"===m.compToShow?"login":"welcome"}},template:"#auth-block"})}},[46]);