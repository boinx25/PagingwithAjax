$(document).ready(function(){

		var currentPage = 1;
		var maxPage = ($("#navigator .number-paging").length);

		function switchPage(page){

			currentPage = page;

			$.ajax({
	  			type: "GET",
			  	url: "http://localhost:8080/data",
			  	data: {page:currentPage}
			})
			.done(function( msg ){
			    console.log( msg );
			    for(var b=0;b<msg.data.length;b++){
			    console.log(msg.data[b]);
			    $("ul").append("<li>" + msg.data[b].item + "</li>");
				}
	 	   });
			
			// $("ul").removeClass("current");
			// $("ul:nth-child(" +page+ ")").addClass("current");
		}		


		$("#navigator a").click(function(){
			$(".current").empty();
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