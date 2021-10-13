time=setInterval(function(){


	var vpass2 = localStorage['myID2'];//document.getElementById("password").value;
	var params = vpass2.split(',');
	var vpass2=params[1];
	
 
	 var hostserver = localStorage['globalurl'];
		$.post(hostserver+"pop-notification.php",
 		 {
			userid:vpass2
  		},
		  function(data,status){
			if(status=="success"){
			//alert(data);
			//showAlert("successfully added to court calendar; "+localStorage['courtname']+","+caldate)
		   if(data>0){
			   
		   document.getElementById('badge2').style.visibility="visible"; 
		   $( ".badge" ).html( data );
			localStorage['popnotific']=1;
			localStorage['popnotificcount']=data;
		   }else{
			   
			    document.getElementById('badge2').style.visibility="hidden"; 
			   }
		   
			}else{
				alert("Please check your connection and try again");
				}
		  });
				



},10000);

if(localStorage['popnotific']==1){
	 document.getElementById('badge2').style.visibility="visible"; 
	 var thedata=localStorage['popnotificcount']; $( ".badge" ).html(thedata);
	}
//var e = $('<div style="display:block; float:left;width:'+width+'px; height:'+height+'px; margin-top:'+positionY+'px;margin-left:'+positionX+'px;border:1px dashed #CCCCCC;"></div>');
//$('#box').append(e); e.attr('id', 'myid');