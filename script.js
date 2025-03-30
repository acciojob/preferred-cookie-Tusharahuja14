//your JS code here. If required.
let fsize=document.getElementById("fontsize");
let fcolor=document.getElementById("fontcolor");
let submit=document.getElementById("submit");
submit.addEventListener("click",savecookies);
function savecookies()
{
	document.cookie=`fontsize=${fsize.value};path=/`;
	document.cookie=`fontcolor=${fcolor.value};path=/`;
}
window.addEventListener("load",()=>{
	let cookies=document.cookie.split("; ").forEach(cookie=>{
	let[key,value]=cookie.split("=");
		if(key==="fontsize")
		{
			fsize.value=value;
		}
		if(key==="fontcolor")
		{
			fcolor.value=value;
		}
});
});
  document.body.style.fontSize = fontSize;
    document.body.style.color = fontColor;