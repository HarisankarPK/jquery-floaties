var p_no=400+Math.floor((Math.random())*25);
	var location=document.getElementById("floaties");
	while(p_no>0)
	{
		if(!document.getElementById('particle'+p_no))
		{
			var ele=document.createElement("div");
			ele.setAttribute("id","particle"+p_no);
			ele.setAttribute("class","particle");
			location.appendChild(ele);
			var diameter=5+Math.ceil((Math.random())*10);
			$(ele).css("width",diameter);
			$(ele).css("height",diameter);
			$(ele).css("border-radius",diameter);
			$(ele).css("background-color","red");
			$(ele).css("opacity",Math.abs(Math.random()-.5)+.2);
			$(ele).css("top",(Math.random()*95)+"%");
			$(ele).css("left",(Math.random()*95)+"%");
		}
		p_no--;
	}
	
	$(".particle").mouseover( function()
	{
		var leftMotion=(Math.random())*95;
		var topMotion=(Math.random())*95;
		var rTime=(Math.random()+.3)*1000;
		$("#"+this.id).animate({left:leftMotion+"%", top:topMotion+"%"},rTime);
	}
	);