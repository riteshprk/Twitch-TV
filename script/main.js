$(document).ready(function() {
var listChannel = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];


var myUrl = 'https://wind-bow.gomix.me/twitch-api/streams/'

var statusChannel = [];
var urlChannel=[]; 



 

for (var i =0; i<listChannel.length; i++){
	
function getChannel(channelName, item){

$.ajax({
			method: 'GET',
			url: myUrl+channelName,
		    dataType : "jsonp",
			callback : "?",
			success: function(data){
		   
		                       if(data.stream!==undefined){ 
								if(data.stream){
						
							        
									$(".firstData").append("<tr><td><h3>"+listChannel[item]+"</h3></td><td style='color:green'><h3>Online</h3></td><td><a href="+data.stream.channel.url+"><img class = 'img-responsive' src="+data.stream.preview.medium+"></img><h4>Streaming: "+data.stream.game+"</h4></a></td></tr>"); 
								
			
								} else{
								    
									$(".firstData").append("<tr><td><h3>"+listChannel[item]+"</h3></td><td style='color:grey'><h3>Offline</h3></td><td><h3>Check It Later</h3></td></tr>"); 
									
	
							
								};
							   }else {
								   $(".firstData").append("<tr><td><h3>"+listChannel[item]+"</h3></td><td style='color:grey'><h3>Channel closed or Not exist</h3></td><td><h3></h3></td></tr>");
							   } 
					},
			error: function(error){
				alert('error');
			}
		  
		
     
});


};
	
	
	  
	   	
		getChannel(listChannel[i], i);
		
		

 
 
};


});

$("#searchInput").keyup(function () {
    //split the current value of searchInput
    var data = this.value.toUpperCase().split(" ");
    //create a jquery object of the rows
    var jo = $(".firstData").find("tr");
    if (this.value == "") {
        jo.show();
        return;
    }
    //hide all the rows
    jo.hide();

    //Recusively filter the jquery object to get results.
    jo.filter(function (i, v) {
        var $t = $(this);
        for (var d = 0; d < data.length; ++d) {
            if ($t.text().toUpperCase().indexOf(data[d]) > -1) {
                return true;
            }
        }
        return false;
    })
	//show the rows that match.
    .show();
});
