let m=document.getElementById("m");
let convertType=document.getElementById("convertKm");
let showMeter=document.getElementById("showMeter");
function convertMeter(){
	if(convertType.value=="mm"){
		let milli = parseInt(m.value)*1000;
		showMeter.innerText = m.value+"Meter:"+milli+"mm";
	}
	else if(convertType.value=="km"){
		let kilo = parseInt(m.value)/1000;
		showMeter.innerText = m.value+"Meter:"+kilo+"km";
	}
	else if(convertType.value=="cm"){
		let centi = parseInt(m.value)*100;
		showMeter.innerText = m.value+"Meter:"+centi+"cm";
	}
	else{
		console.log("Something went wrong please check....!");
	}
	convertType.value="";
    m.value="";
}	