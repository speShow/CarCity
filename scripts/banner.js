// JavaScript Document
function createBanner(option){
	var data=option.data;
	var dataLen=data.length;
	var element=document.getElementById(option.element);
	var fragment=document.createDocumentFragment();
	var a=0;
	var timer;
	//创建轮播图片
	function createImage(option){
		var a=dc("a");
		a.href=option.href;
		a.title=option.title;
		a.style.backgroundImage="url("+option.url+")";
		return a;
	}
	//封装定时器
	function createTimer(){
		return setInterval(function(){
			var _a=a;
			a=a>=dataLen-1?0:a+1;
			images[_a].className="";
			images[a].className="current";
		},2000);
	}
	//创建左右按钮
	function createButton(className){
		var i=dc("i");
		i.className="icon "+className;
		i.onclick=function(){
			clearInterval(timer);
			// timer=createTimer();
			var _a=a;
			if(className==="previous"){
				a=a>0?a-1:dataLen-1;
			}else{
				a=a>=dataLen-1?0:a+1;
			}
			images[_a].className="";
			images[a].className="current";
		};
		return i;
	}
	//将轮播图片添加入文档碎片
	var images=data.map(function(item){
		return fragment.appendChild(createImage(item));
	});
	//初始状态的页面效果
	images[a].className="current";
	//轮播图定时
	timer=createTimer();

	element.onmouseover=function(){
		clearInterval(timer);
	};
	element.onmouseout=function(){
		timer=createTimer();
	};

	//添加到页面中
	fragment.appendChild(createButton("previous"));
	fragment.appendChild(createButton("next"));
	element.appendChild(fragment);
	
}
//轮播图配置信息
var bannerData=[
	{
		title:"广告",
		href:"/ad",
		url:"images/banner1.jpg"
	},
	{
		title:"大风车",
		href:"/dfc",
		url:"images/banner2.jpg"
	},
	{
		title:"车牛",
		href:"/cn",
		url:"images/banner3.jpg"
	}
];
//轮播图开始
createBanner({
	element:"banner",
	data:bannerData
});

