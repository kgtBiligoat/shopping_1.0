
		$(document).ready(function(){
 			$("#daoHang").mouseover(function(){
				$("#top_search_page").css({
					position:"absolute",
					left:$("#daoHang").offset().left-2,
					top:$("#daoHang").offset().top+30,
				}).show()
			})
			$("#top_search_page").mouseover(function(){
				$("#top_search_page").show();
			})

			$("#top_search_page").mouseout(function(){
				$("#top_search_page").hide();
			})
	
		})