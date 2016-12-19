Array.prototype.filter=[].filter || function(callback){
	var a=-1;
	var len=this.length;
	var result=[];
	while(++a<len){
		callback(this[a],a,this)&&result.push(this[a]);
	}
	return result;
};
//数组map方法补丁
Array.prototype.map=[].map || function(callback){
	var a=0;
	var len=this.length;
	var result=[];
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