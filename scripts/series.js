var brandFragment=document.createDocumentFragment();
carData.forEach(function(item){
	var cont=createCars(item);
	var ccDiv=getDiv("car-content");
	item.brands.forEach(function(_item){
		var eachCarNameDiv=getDiv("car-name-line clear");
		var carTypeDiv=getDiv("car-type");
		var carNameA=getA(_item.brandName.name,_item.brandName.href);
		carNameA.className="car-name";
		eachCarNameDiv.appendChild(carNameA);
		_item.brandType.forEach(function(__item){
			carTypeDiv.appendChild(getA(__item.name,__item.href));
		});
		eachCarNameDiv.appendChild(carTypeDiv);
		ccDiv.appendChild(eachCarNameDiv);
	});
	cont.appendChild(ccDiv);
	brandFragment.appendChild(cont);
});
document.getElementById("set-wrap").appendChild(brandFragment);