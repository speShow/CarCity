Array.prototype.filter=[].filter || function(callback){
	var a=-1,
		len=this.length,
		result=[];
	while(++a<len){
		callback(this[a],a,this)&&result.push(this[a]);
	}
	return result;
};
//数组map方法补丁
Array.prototype.map=[].map || function(callback){
	var a=0,
		len=this.length,
		result=[];
	while(a<len){
		result.push(callback(this[a],a++,this));
	}
	return result;
};
//数组forEach方法补丁
Array.prototype.forEach = [].forEach || function(callback){
	var a = 0,
		len = this.length;
	while(a < len){
		callback(this[a], a++, this);
	}
};

function dc(tagName){
	return document.createElement(tagName);
}
function getA(name,href){
	var a=dc("a");
	a.appendChild(document.createTextNode(name));
	a.href=href;
	return a;
}
function getSpan(name,className){
	var span=dc("span");
	span.appendChild(document.createTextNode(name));
	span.className=className;
	return span;
}
function createAnchor(content){
	var li=dc("li");
	li.appendChild(content);
	return li;
}