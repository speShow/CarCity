var topNav=document.getElementById("topNav");
var topNavClassName=topNav.className;
onscroll=function(){
	topNav.className = topNavClassName + (document.documentElement.scrollTop || scrollY >= 50 ? " fixed" : "");
	toP.style.display=document.documentElement.scrollTop||scrollY!==0?"block":"none";
};