// JavaScript Document

Array.prototype.map=function(callback){
	var a=0;
	var len=this.length;
	var result=[];
	while(a<len){
		result.push(callback(this[a],a++,this));
	}
	return result;
};
Array.prototype.forEach=function(callback){
	var a=0;
	var len=this.length;
	while(a<len){
		callback(this[a],a++,this);
	}
};
Array.prototype.filter=function(callback){
	var a=-1;
	var len=this.length;
	var result=[];
	while(++a<len){
		callback(this[a],a,this)&&result.push(this[a]);
	}
	return result;
};