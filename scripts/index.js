// JavaScript Document

//车展览
function createBox(option){
	var a=document.createElement("a");
	a.href=option.href;
	a.style.backgroundImage="url("+option.bigUrl+")";
	a.innerHTML="<h2>"+option.title+"</h2>"
			   +"<p>"+option.label+"</p>"
			   +"<img src=\""+option.smallUrl+"\"/>";
			   return a;
}
var exhibitionData=[
	{
		href:"/a",
		bigUrl:"images/exhibition1.jpg",
		smallUrl:"images/car1.png",
		title:"豪车不止BBA",
		label:"德系三架马车，是时候退位让贤啦"
	},
	{
		href:"/a",
		bigUrl:"images/exhibition2.jpg",
		smallUrl:"images/car2.png",
		title:"百年大厂杰作",
		label:"时间在流逝，品质永流传！"
	},
	{
		href:"/a",
		bigUrl:"images/exhibition3.jpg",
		smallUrl:"images/car3.png",
		title:"便宜才是王道",
		label:"谁说便宜没好车？"
	},
	{
		href:"/a",
		bigUrl:"images/exhibition4.jpg",
		smallUrl:"images/car4.png",
		title:"驾校毕业生",
		label:"那些年，我们练过的普桑和捷达。"
	},
	{
		href:"/a",
		bigUrl:"images/exhibition5.jpg",
		smallUrl:"images/car5.png",
		title:"明星也抠门",
		label:"明星都买二手车了你还等什么"
	},
	{
		href:"/a",
		bigUrl:"images/exhibition6.jpg",
		smallUrl:"images/car6.png",
		title:"全能的大玩具",
		label:"越野帮手、四驱利器"
	}
];
var exhibitionFragment=document.createDocumentFragment();
exhibitionData.forEach(function(item){
	exhibitionFragment.appendChild(createBox(item));
});
document.getElementById("exhibition").appendChild(exhibitionFragment);

//产品app
function createApp(option,index){
	var divApp=document.createElement("div");
	divApp.className="app"+(index===0?" noborder":"");
	divApp.innerHTML=[
		"<div class=\"img\">",
		"<img src="+option.imgUrl+" width=\"64\" height=\"64\">",
		"<div class=\"title\">",
		"<h2>"+option.title+"</h2>",
		"<p>"+option.sub_title+"</p>",
		"</div>",
		"</div>",
		"<p>"+option.detail+"</p>",
		"<p>"+option.type+"</p>",
		"<a href="+option.href+">查看更多</a>",
	].join("");
	return divApp;
}
var appData=[
	{
		imgUrl:"images/icon4.png",
		title:"弹个车",
		sub_title:"面向消费者",
		detail:"基于消费者个人信用提供超低首付、超长分期，灵活智选的汽车融资租赁个性化解决方案",
		type:"支持 IOS / Android",
		href:"/a"
	},
	{
		imgUrl:"images/icon5.png",
		title:"大风车",
		sub_title:"面向拥有展厅和销售团队的大车商",
		detail:"评估管理、车辆管理、客户管理、经营数据......一应俱全",
		type:"支持 IOS / Android / PC 端",
		href:"/b"
	},
	{
		imgUrl:"images/icon6.png",
		title:"车牛",
		sub_title:"面向经营二手车的中小车商",
		detail:"收车、卖车、贷款、质保、估价......一步到位",
		type:"支持 IOS / Android",
		href:"/c"
	}
];
var appFragment=document.createDocumentFragment();
appData.forEach(function(item,index){
    appFragment.appendChild(createApp(item,index));
});
document.getElementById("product").appendChild(appFragment);