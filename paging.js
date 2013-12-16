$(document).ready(function(){

		var currentPage = 1;
		var maxPage = ($("#navigator .number-paging").length);

		function switchPage(page){

			currentPage = page;
			$("ul").removeClass();
			// if(currentPage % 2 == 0){

			// 	$("ul").removeClass("red");
			// 	$("ul").addClass("green");

			// }else{
			// 	$("ul").removeClass("green");
			// 	$("ul").addClass("red");
			// }
			$.ajax({
	  			type: "GET",
			  	url: "http://localhost:8080/data",
			  	data: {page:currentPage}
			})
			.done(function( msg ){
			    console.log(msg);
			    for(var b=0;b<msg.data.length;b++){
				
				   	// $("ul").append("<li>" +"<img src='" + msg.data[b].icon + "'" + "alt=' ' />" + msg.data[b].item + "</li>");
				   	$("ul").append("<li>" + msg.data[b].item + "</li>");
				   

				   	  
				}
					$("ul").addClass(msg.listClass);	
					console.log(msg.listClass);	
						
	 	   });
			
			// $("ul").removeClass("current");
			// $("ul:nth-child(" +page+ ")").addClass("current");
		}		


		$("#navigator a").click(function(){
			$("ul").empty();
			if($(this).hasClass("nav2")){
				if(currentPage < maxPage)
				currentPage++;
				switchPage(currentPage);
			}
			else if($(this).hasClass("nav")){
				if(currentPage >=2)
					currentPage--;
				switchPage(currentPage);
			}
			else	
			switchPage($(this).data("chosen"));


		});

		switchPage(currentPage);

		
});