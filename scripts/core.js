// JavaScript Document
var toP=document.getElementById("top");
toP.onclick=function(){
	scrollTo(0,0);
};
onscroll=function(){
	toP.style.display=document.documentElement.scrollTop||scrollY!==0?"block":"none";
};