var brandFragment=document.createDocumentFragment();
carData.forEach(function(item){
	var cont=createCars(item);
	var ccDiv=getDiv("car-content");
	item.brands.forEach(function(_item){
		ccDiv.appendChild(getA([item.title," ",_item.brandName.name].join(""),_item.brandName.href));
	});
	cont.appendChild(ccDiv);
	brandFragment.appendChild(cont);
});
document.getElementById("brand-wrap").appendChild(brandFragment);