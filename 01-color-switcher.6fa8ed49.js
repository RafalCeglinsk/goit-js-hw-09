!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");function n(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}intervalId=null,t.addEventListener("click",(function(){intervalId=setInterval(n,1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(intervalId),e.disabled=!0,t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.6fa8ed49.js.map