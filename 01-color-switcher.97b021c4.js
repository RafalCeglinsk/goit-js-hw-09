const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");function d(){const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=e}e.addEventListener("click",(()=>{intervalId=setInterval(d,1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(()=>{clearInterval(intervalId),t.disabled=!0,e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.97b021c4.js.map
