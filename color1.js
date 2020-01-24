
var color=generaterandom(6);
var a=document.querySelectorAll(".square");
var target=ayush();
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var e=0,h=1;
document.querySelector("span").textContent=target+" ";
for(var i=0;i<a.length;i++)
{
	a[i].style.backgroundColor=color[i];

	a[i].addEventListener("click",function(){
		if(this.style.backgroundColor!==target)
		{
			this.style.backgroundColor= "#232323";
			document.querySelector("#try").textContent="try again";
		}
		else
		{ for(var j=0;j<a.length;j++)
			a[j].style.backgroundColor = target;
			document.querySelector("#try").textContent="CORRECT";
			document.querySelector("h1").style.backgroundColor=target;
			document.querySelector("#newcolors").textContent="PLAY AGAIN";

		}
	});
}

function ayush()
{
	var c=Math.floor(Math.random()*color.length);
	return color[c];
}

function generaterandom(num){
	var b=[];
	for(var i=0;i<num;i++)
	{
		b.push(more());
	}
	return b;
}
function more()
{
	var s="rgb"+"("+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+")";
	return s;
}

document.querySelector("#newcolors").addEventListener("click",function(){
	if(h){
color= generaterandom(6);
 for(var i=0;i<a.length;i++)
{
	a[i].style.backgroundColor=color[i];
}}
if(e){
	color=generaterandom(3);
	 for(var i=0;i<a.length;i++)
{
	a[i].style.backgroundColor=color[i];
}}
 target=ayush();
 document.querySelector("span").textContent=target+" ";
 document.querySelector("h1").style.backgroundColor="steelblue";
 document.querySelector("#try").textContent="";
document.querySelector("#newcolors").textContent="NEW COLORS";

})

easy.addEventListener("click",function(){
	e=1;
	h=0;
easy.classList.add("selected");
hard.classList.remove("selected");
color=generaterandom(3);
target=ayush();
document.querySelector("span").textContent=target+" ";
document.querySelector("h1").style.backgroundColor="steelblue";
 document.querySelector("#try").textContent="";
for(i=0;i<a.length;i++)
{
	if(color[i])
		a[i].style.backgroundColor=color[i];
	else
		a[i].style.display="none";
}
})
hard.addEventListener("click",function(){
	e=0;
	h=1;
easy.classList.remove("selected");
hard.classList.add("selected");	
color=generaterandom(6);
target=ayush();
document.querySelector("span").textContent=target+" ";
document.querySelector("h1").style.backgroundColor="steelblue";
 document.querySelector("#try").textContent="";
for(i=0;i<a.length;i++)
{
	if(color[i])
		{a[i].style.backgroundColor=color[i];
	a[i].style.display="block";
	}

	
}
})