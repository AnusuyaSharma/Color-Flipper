var colours=["Powderblue","Red","Pink","Yellow","Green","Orange"];



document.querySelector(".bt").addEventListener("click",function(){
	var randomColour=random();
	document.querySelector("#body").style.backgroundColor=colours[randomColour];
	document.querySelector(".color").innerHTML=colours[randomColour];
})

function random(){
	return Math.floor(Math.random()*colours.length);
}