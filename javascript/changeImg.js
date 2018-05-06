		$(document).ready(function(){
			var arr=['image/backImg1.jpg','image/backImg2.jpg','image/backImg3.jpg','image/backImg4.jpg']
			var i = 0;
			var right = document.getElementById("arrow_right")
			var left = document.getElementById("arrow_left")

			

			right.addEventListener("click",right_change,false)
			left.addEventListener("click",left_change,false)

			var time = setInterval(right_change,10000)
			addEvent()

			function right_change(){
					var img = document.getElementById("img1")
					div_icon(i + 2)

					$("#img1").fadeOut(function(){
						i++
						if(i > 3)
						{
							i = 0
						}
						img.src = arr[i]

						$("#img1").fadeIn()	
					})			
			}

			function left_change(){
				var img = document.getElementById("img1")
				div_icon(i)

				$("#img1").fadeOut(function(){
					i--
					if(i < 0)
					{
						i = 3
					}

					img.src = arr[i]
					$("#img1").fadeIn()
				})
			}

			function addEvent(){
				for(var j = 1; j < arr.length + 1; j++)
				{

					(function(arg){
						
						var name = "div" + arg
						var img = document.getElementById(name)
						
						img.addEventListener("click",function(){
							//clearInterval(time)   				---清除计时器
							div_icon(arg)
							toulan(arg)
							$("#img1").fadeOut(function(){

								$("#img1").attr("src",arr[arg - 1])
								$("#img1").fadeIn()
							})
						
						})
					})(j)
				}		
			}
			function toulan(arg)
			{
				if(arg == 1) i = 0;
				else if(arg == 2) i = 1;
				else if(arg == 3) i = 2;
				else if(arg == 4) i = 3;

			}
			function div_icon(arg){
				if(arg > 4) arg = 1
				else if(arg < 1) arg = 4
				else arg = arg
				
				for(var j = 1; j < 5; j++)
					(function(arg,j){
						var xiabiao = "div" + j
						if(j == arg)
						{
							$("#" + xiabiao).css("background-color","black")	
						}
						else
						{
							$("#" + xiabiao).css("background-color","grey")
						}
					})(arg,j)
				
			}
		})