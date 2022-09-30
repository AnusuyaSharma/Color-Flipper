var col=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];



document.querySelector(".bt").addEventListener("click",function(){
	var addCol="#";
	for(var i=0;i<6;i++){
		addCol+=col[getRandomNumber()]; 
	}
	document.querySelector("#body").style.backgroundColor=addCol;
	document.querySelector(".color").innerHTML=addCol;
})

function getRandomNumber{
	return Math.floor(Math.random()*col.length);
}
