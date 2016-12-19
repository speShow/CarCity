// JavaScript Document

//.bottom_bg
var divBg=document.createElement("div");
divBg.className="bottom_bg";
//.bottom
var div=document.createElement("div");
div.className="bottom";
//.bottom_catalog
var divCatalog=document.createElement("div");
divCatalog.className="bottom_catalog clear";

var divDg=document.createElement("div");
var ulDg=document.createElement("ul");

var divZn=document.createElement("div");
var ulZn=document.createElement("ul");

var divAbout=document.createElement("div");
var ulAbout=document.createElement("ul");

var divContact=document.createElement("div");
var ulContact=document.createElement("ul");

divDg.className="divDg";
divZn.className="divDg";
divAbout.className="divDg";
divContact.className="divDg";


var dgcity=getA("城市大全","");
var dgbrands=getA("品牌大全","");
var dgcars=getA("车系大全","");
var dgSettings=[
	{
		content:dgcity
	},
	{
		content:dgbrands
	},
	{
		content:dgcars
	}
];

var zn1=getA("如何挑选二手车","");
var zn2=getA("如何判断事故火烧水浸车","");
var zn3=getA("二手车指标说明","");
var znSettings=[
	{
		content:zn1
	},
	{
		content:zn2
	},
	{
		content:zn3
	}
];

var about1=getA("大搜车理念","");
var about2=getA("车牛","");
var about3=getA("大风车","");
var about4=getA("大搜车手机版","");
var aboutSettings=[
	{
		content:about1
	},
	{
		content:about2
	},
	{
		content:about3
	},
	{
		content:about4
	}
];

var contact=getA("联系电话","");
var contactSettings=[
	{
		content:contact
	}
];

divDg.appendChild(getSpan("导购大全",""));
divDg.appendChild(ulDg);
dgSettings.forEach(function(item){
	ulDg.appendChild(createAnchor(item.content))
});// 为li添加a标签 然后全部添加给ul
divCatalog.appendChild(divDg);

divZn.appendChild(getSpan("购车指南",""));
divZn.appendChild(ulZn);
znSettings.forEach(function(item){
	ulZn.appendChild(createAnchor(item.content))
});// 为li添加a标签 然后全部添加给ul
divCatalog.appendChild(divZn);

divAbout.appendChild(getSpan("关于我们",""));
divAbout.appendChild(ulAbout);
aboutSettings.forEach(function(item){
	ulAbout.appendChild(createAnchor(item.content))
});// 为li添加a标签 然后全部添加给ul
divCatalog.appendChild(divAbout);

divContact.appendChild(getSpan("联系我们",""));
divContact.appendChild(ulContact);
contactSettings.forEach(function(item){
	ulContact.appendChild(createAnchor(item.content))
});// 为li添加a标签 然后全部添加给ul
divCatalog.appendChild(divContact);

//热门城市
var pCity=document.createElement("p");
pCity.appendChild(document.createTextNode("热门城市："));
pCity.className="city";
var hotCitySettings=[
	{
		name:"厦门",
		href:""
	},
	{
		name:"北京",
		href:""
	},
	{
		name:"南宁",
		href:""
	},
	{
		name:"杭州",
		href:""
	},
	{
		name:"郑州",
		href:""
	},
	{
		name:"漳州",
		href:""
	},
	{
		name:"长沙",
		href:""
	},
	{
		name:"合肥",
		href:""
	},
	{
		name:"西安",
		href:""
	},
	{
		name:"上海",
		href:""
	},
	{
		name:"宁波",
		href:""
	},
	{
		name:"温州",
		href:""
	},
	{
		name:"太原",
		href:""
	},
	{
		name:"青岛",
		href:""
	},
	{
		name:"南京",
		href:""
	},
	{
		name:"武汉",
		href:""
	},
	{
		name:"沈阳",
		href:""
	},
	{
		name:"成都",
		href:""
	},
	{
		name:"石家庄",
		href:""
	},
	{
		name:"重庆",
		href:""
	},
	{
		name:"台州",
		href:""
	},
	{
		name:"大连",
		href:""
	},
	{
		name:"福州",
		href:""
	},
	{
		name:"佛山",
		href:""
	},
	{
		name:"临沂",
		href:""
	},
	{
		name:"济南",
		href:""
	},
	{
		name:"苏州",
		href:""
	},
	{
		name:"贵阳",
		href:""
	},
	{
		name:"泉州",
		href:""
	},
	{
		name:"南昌",
		href:""
	},
	{
		name:"天津",
		href:""
	},
	{
		name:"东莞",
		href:""
	},
	{
		name:"深圳",
		href:""
	},
	{
		name:"昆明",
		href:""
	},
	{
		name:"广州",
		href:""
	},
	{
		name:"包头",
		href:""
	},
	{
		name:"鞍山",
		href:""
	},
	{
		name:"淮南",
		href:""
	},
	{
		name:"长春",
		href:""
	},
	{
		name:"金华",
		href:""
	},
	{
		name:"乌鲁木齐",
		href:""
	},
	{
		name:"无锡",
		href:""
	},
	{
		name:"柳州",
		href:""
	},
	{
		name:"潍坊",
		href:""
	},
	{
		name:"荆州",
		href:""
	},
	{
		name:"保定",
		href:""
	},
	{
		name:"枣庄",
		href:""
	},
	{
		name:"洛阳",
		href:""
	},
	{
		name:"常州",
		href:""
	},
	{
		name:"沧州",
		href:""
	}
];
hotCitySettings.forEach(function(item){
	pCity.appendChild(getA(item.name,item.href));
});
pCity.appendChild(getA("更多城市",""));


//其他链接
var pOther=document.createElement("p");
pOther.className="other";
var otherSettings=[
	{
		name:"车险信息网",
		href:""
	},
	{
		name:"中山二手车",
		href:""
	},
	{
		name:"车易拍",
		href:""
	},
	{
		name:"海南二手车",
		href:""
	},
	{
		name:"汽车点评网",
		href:""
	},
	{
		name:"杭州二手车",
		href:""
	},
	{
		name:"2014汽车报价",
		href:""
	},
	{
		name:"北京汽车网",
		href:""
	},
	{
		name:"中国二手车网",
		href:""
	},
	{
		name:"汽车配件",
		href:""
	},
	{
		name:"二手车评估",
		href:""
	},
	{
		name:"湖北专用车",
		href:""
	},
	{
		name:"中国汽车网",
		href:""
	},
	{
		name:"大浙汽车",
		href:""
	},
	{
		name:"搜狐二手车",
		href:""
	},
	{
		name:"车300估价",
		href:""
	},
	{
		name:"58二手车",
		href:""
	},
	{
		name:"二手车评估",
		href:""
	}
];
otherSettings.forEach(function(item){
	pOther.appendChild(getA(item.name,item.href));
});

//版权
var copy="Copyright © 2016 SouChe All Rights Reserved 杭州大搜车汽车服务有限公司 版权所有 京 ICP备 13012136号 京公网安备 11010802013095号";
var pCopy=document.createElement("p");
pCopy.appendChild(document.createTextNode(copy));
pCopy.className="copy";

div.appendChild(divCatalog);
div.appendChild(pCity);
div.appendChild(pOther);
div.appendChild(pCopy);
divBg.appendChild(div);
//添加到页面上
document.body.appendChild(divBg);

function getA(name,href){
	var a=document.createElement("a");
	a.appendChild(document.createTextNode(name));
	a.href=href;
	return a;
}
function getSpan(name,className){
	var span=document.createElement("span");
	span.appendChild(document.createTextNode(name));
	span.className=className;
	return span;
}
function createAnchor(content){
	var li=document.createElement("li");
	li.appendChild(content);
	return li;
}